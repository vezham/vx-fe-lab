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
      <Button
        showAnchorIcon
        as={Link}
        href="/card"
        variant="flat"
        color="secondary"
        radius="sm">
        Card
      </Button>
      <Button
        showAnchorIcon
        as={Link}
        href="/table"
        variant="flat"
        color="secondary"
        radius="sm">
        Table
      </Button>
      <Button
        showAnchorIcon
        as={Link}
        href="/timeline"
        variant="flat"
        color="secondary"
        radius="sm">
        Timeline
      </Button>
      <Button
        showAnchorIcon
        as={Link}
        href="/footer"
        variant="flat"
        color="secondary"
        radius="sm">
        Footer - WhatsNew
      </Button>
      <Button
        showAnchorIcon
        as={Link}
        href="/footers"
        variant="flat"
        color="secondary"
        radius="sm">
        Footer - HeroUI
      </Button>
    </div>
  )
}

export { Home }
