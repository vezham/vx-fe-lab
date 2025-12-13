import React from 'react'

import { Timeline } from '../components/timeline'

const Page = () => {
  const changelogs = [
    {
      __type: 'changelog',
      id: 'CX145A22A9QA0ROS',
      name: 'Announcements',
      updated_at: '2023-02-09T11:48:58Z',
      updated_by:
        '0xb1a9704fd76d43d698f1f4e1cae9d36c102e070af5162c2920a798102b902992'
    },
    {
      __type: 'changelog',
      id: 'CX245A22A9QA0ROS',
      name: 'General',
      updated_at: '2023-02-09T11:48:58Z',
      updated_by:
        '0xb1a9704fd76d43d698f1f4e1cae9d36c102e070af5162c2920a798102b902992'
    },
    {
      __type: 'changelog',
      id: 'CX345A22A9QA0ROS',
      name: 'SDK',
      updated_at: '2023-02-09T11:48:58Z',
      updated_by:
        '0xb1a9704fd76d43d698f1f4e1cae9d36c102e070af5162c2920a798102b902992'
    }
  ]

  const timeline = [
    {
      __type: 'timeline',
      id: 'AX145A22A9QA0ROS',
      url: 'http://blogs.v.corp/posts/we-are-with-the-trend',
      title: 'Flowbite Application UI v2.0.0',
      blocks: [
        {
          __type: 'paragraph',
          text: 'Get access to over 20+ pages including a dashboard layout, charts, Ojo board, calendar, and pre-order E-commerce & Marketing pages.'
        }
      ],
      tags: [
        {
          __type: 'tag',
          id: '10123456',
          color: 'blue',
          name: 'New',
          updated_at: '2023-02-09T11:48:58Z',
          updated_by:
            '0xb1a9704fd76d43d698f1f4e1cae9d36c102e070af5162c2920a798102b902992'
        }
      ],
      cover: {
        __type: 'cover',
        type: 'image',
        alt_text: 'Paper bag poster',
        url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80'
      },
      authors: [
        {
          id: '1X245A22A9QA0ROS',
          name: 'Jake Long',
          avatar: {
            __type: 'avatar',
            url: 'https://images.unsplash.com/photo-1619533394727-57d522857f89?q=80'
          }
        }
      ],
      published_at: '2024-03-01T11:48:58Z',
      continue_reading: false
    },
    {
      __type: 'timeline',
      id: 'AX245A22A9QA0ROS',
      url: 'http://blogs.v.corp/posts/we-are-with-the-trend',
      title: 'Flowbite Figma v1.3.0',
      blocks: [
        {
          __type: 'paragraph',
          text: 'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project. All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project. All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project. All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.'
        }
      ],
      tags: [
        {
          __type: 'tag',
          id: '10123456',
          color: 'yellow',
          name: 'Update',
          updated_at: '2023-02-09T11:48:58Z',
          updated_by:
            '0xb1a9704fd76d43d698f1f4e1cae9d36c102e070af5162c2920a798102b902992'
        },
        {
          __type: 'tag',
          id: '10223456',
          color: 'green',
          name: 'New Feature',
          updated_at: '2023-02-09T11:48:58Z',
          updated_by:
            '0xb1a9704fd76d43d698f1f4e1cae9d36c102e070af5162c2920a798102b902992'
        },
        {
          __type: 'tag',
          id: '10323456',
          color: 'orange',
          name: 'Bug Fix',
          updated_at: '2023-02-09T11:48:58Z',
          updated_by:
            '0xb1a9704fd76d43d698f1f4e1cae9d36c102e070af5162c2920a798102b902992'
        }
      ],
      authors: [
        {
          id: '1X245A22A9QA0ROS',
          name: 'David Jerry',
          avatar: {
            __type: 'avatar',
            url: 'https://images.unsplash.com/photo-1619533394727-57d522857f89?q=80'
          }
        }
      ],
      published_at: '2024-03-09T11:48:58Z',
      continue_reading: true
    },
    {
      __type: 'timeline',
      id: 'AX345A22A9QA0ROS',
      url: 'http://blogs.v.corp/posts/we-are-with-the-trend',
      title: 'Flowbite Library v1.2.2',
      blocks: [
        {
          __type: 'paragraph',
          text: 'Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS.'
        }
      ],
      tags: [],
      cover: {
        __type: 'cover',
        type: 'video',
        alt_text: 'Paper bag poster',
        url: 'https://d2u8k2ocievbld.cloudfront.net/new-docs.mp4'
      },
      authors: [
        {
          id: '1X245A22A9QA0ROS',
          name: 'Sara Smith',
          avatar: {
            __type: 'avatar',
            url: 'https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?q=80'
          }
        }
      ],
      published_at: '2024-03-02T11:48:58Z',
      continue_reading: true
    },
    {
      __type: 'timeline',
      id: 'AX445A22A9QA0ROS',
      url: 'http://blogs.v.corp/posts/we-are-with-the-trend',
      title: 'Flowbite Library v1.2.1',
      blocks: [
        {
          __type: 'paragraph',
          text: 'Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS.'
        }
      ],
      tags: [],
      authors: [
        {
          id: '1X245A22A9QA0ROS',
          name: 'Jen McCall',
          avatar: {
            __type: 'avatar',
            url: 'https://images.unsplash.com/photo-1694564717876-7436bdf6a236?q=80'
          }
        }
      ],
      published_at: '2024-03-02T11:48:58Z',
      continue_reading: true
    },
    {
      __type: 'timeline',
      id: 'AX445A22A9QA0ROS',
      url: 'http://blogs.v.corp/posts/we-are-with-the-trend',
      title: 'Inital Version Library v1.0',
      blocks: [
        {
          __type: 'paragraph',
          text: 'Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS. Get started with dozens of web components and interactive elements built on top of Tailwind CSS.'
        }
      ],
      tags: [],
      authors: [
        {
          id: '1X245A22A9QA0ROS',
          name: 'Vijay Ravichander',
          avatar: {
            __type: 'avatar',
            url: 'https://images.unsplash.com/photo-1594672830234-ba4cfe1202dc?q=80'
          }
        }
      ],
      published_at: '2023-07-02T11:48:58Z',
      continue_reading: false
    },
    {
      __type: 'timeline',
      id: 'AX000000000000',
      url: 'http://blogs.v.corp/posts/we-are-with-the-trend',
      cover: {
        __type: 'cover',
        type: 'image',
        alt_text: 'Paper bag poster',
        url: 'https://roadmap.sh/images/gifs/rocket.gif'
      },
      title: 'Changelog page is launched',
      blocks: [
        {
          __type: 'paragraph',
          text: 'We will be sharing a selected list of updates, improvements, and fixes made to the website. Stay tuned!'
        }
      ],
      tags: [],
      authors: [
        {
          id: '1X245A22A9QA0ROS',
          name: 'Vijay Ravichander',
          avatar: {
            __type: 'avatar',
            url: 'https://images.unsplash.com/photo-1594672830234-ba4cfe1202dc?q=80'
          }
        }
      ],
      published_at: '2023-07-02T11:48:58Z',
      continue_reading: false
    }
  ]

  return (
    <div>
      <Timeline
        changelogs={changelogs}
        timeline={timeline}
        selectedChangelogId="CX145A22A9QA0ROS"
        onTabChange={id => console.log('Tab changed:', id)}
        onContinueReading={(index, id) =>
          console.log('Continue reading:', index, id)
        }
        device="desktop"
        direction="ltr"
        showRating={true}
        showReadMore={true}
      />
    </div>
  )
}

export { Page }
