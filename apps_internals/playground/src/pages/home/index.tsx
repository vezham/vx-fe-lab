import { Button, Link } from '@vezham/react/v2'

const Home = () => {
  return (
    <div className="flex gap-3 p-5">
      <Button
        showAnchorIcon
        as={Link}
        href="/button"
        variant="flat"
        color="secondary"
        radius="sm">
        Button
      </Button>
      <Button
        showAnchorIcon
        as={Link}
        href="/text"
        variant="flat"
        color="secondary"
        radius="sm">
        Text
      </Button>
    </div>
  )
}

export { Home }
