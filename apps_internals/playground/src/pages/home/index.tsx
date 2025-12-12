import { useRouter } from '@tanstack/react-router'

import { Button } from '@vezham/react/v2'

const Home = () => {
  const router = useRouter()
  return (
    <div>
      <Button onPress={() => router.navigate({ to: '/button' })}>Button</Button>
    </div>
  )
}

export { Home }
