import { useState } from 'react'

import { Table } from '../components/table'
import { DeleteIcon, EditIcon, EyeIcon } from '../components/table/icons'

const Page = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Tony Reichert',
      role: 'CEO',
      team: 'Management',
      status: 'active',
      age: '29',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
      email: 'tony.reichert@example.com'
    },
    {
      id: 2,
      name: 'Alex Reichert',
      role: 'Manager',
      team: 'Management',
      status: 'active',
      age: '32',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
      email: 'alex.reichert@example.com'
    },
    {
      id: 3,
      name: 'Emma Johnson',
      role: 'Developer',
      team: 'Development',
      status: 'vacation',
      age: '28',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
      email: 'emma.johnson@example.com'
    },
    {
      id: 4,
      name: 'Michael Brown',
      role: 'Designer',
      team: 'Design',
      status: 'active',
      age: '26',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
      email: 'michael.brown@example.com'
    },
    {
      id: 5,
      name: 'Sarah Wilson',
      role: 'QA Engineer',
      team: 'Testing',
      status: 'paused',
      age: '30',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
      email: 'sarah.wilson@example.com'
    },
    {
      id: 6,
      name: 'David Lee',
      role: 'DevOps',
      team: 'Operations',
      status: 'active',
      age: '35',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
      email: 'david.lee@example.com'
    }
  ])

  const columns = [
    { uid: 'id', name: 'Id', sortable: true },
    { uid: 'name', name: 'Name', sortable: true },
    { uid: 'role', name: 'Role', sortable: true },
    { uid: 'status', name: 'Status', sortable: true },
    { uid: 'actions', name: 'Actions', align: 'center' }
  ]

  const statusOptions = [
    { uid: 'active', name: 'Active' },
    { uid: 'paused', name: 'Paused' },
    { uid: 'vacation', name: 'Vacation' }
  ]

  const statusColorMap = {
    active: 'success',
    paused: 'danger',
    vacation: 'warning'
  }

  const handleDelete = user => {
    setUsers(prevUsers => prevUsers.filter(u => u.id !== user.id))
    console.log('Deleted user:', user.name)
  }

  const handleEdit = user => {
    console.log('Edit user:', user)
    // Implement edit logic here
  }

  const handleView = user => {
    console.log('View user:', user)
  }

  const actions = [
    {
      key: 'view',
      label: 'View Details',
      icon: EyeIcon,
      onClick: handleView
    },
    {
      key: 'edit',
      label: 'Edit User',
      icon: EditIcon,
      onClick: handleEdit
    },
    {
      key: 'delete',
      label: 'Delete User',
      icon: DeleteIcon,
      color: 'danger',
      onClick: handleDelete
    }
  ]

  const handleAddNew = () => {
    console.log('Add new user clicked')
    // Implement add new logic here
  }

  const handleRowAction = (actionKey, user) => {
    console.log(`Action ${actionKey} on user:`, user.name)
  }

  return (
    <div className="p-6">
      <Table
        columns={columns}
        data={users}
        statusOptions={statusOptions}
        statusColorMap={statusColorMap}
        actions={actions}
        maxVisibleActions={3} // Show only 2 actions inline, rest in dropdown
        pagination={{
          rowsPerPage: 5,
          rowsPerPageOptions: [5, 10, 20],
          showPagination: true,
          showRowsPerPage: true,
          showSelectedCount: true
        }}
        onAddNew={handleAddNew}
        onRowAction={handleRowAction}
        onSelectionChange={keys => console.log('Selected:', keys)}
        onSortChange={sort => console.log('Sort:', sort)}
        hover={true}
      />
    </div>
  )
}

export { Page }
