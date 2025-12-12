import { Text } from '../components/text'

const Page = () => {
  return (
    <div>
      <Text
        className="cursor-default"
        content="Text Component"
        variant="title"
        vc="black"
      />
      <Text
        className="cursor-default"
        content="Title1"
        variant="title1"
        vc="black"
      />
      <Text
        className="cursor-default"
        content="Subtitle"
        variant="subtitle"
        vc="black"
      />
      <Text
        className="cursor-default"
        content="Label"
        variant="label"
        vc="black"
      />
      <Text
        className="cursor-default"
        content="Paragraph"
        variant="paragraph"
        vc="black"
      />
      <Text className="cursor-default" content="Disable" variant="disable" />
      <Text className="cursor-default" content="Error" variant="error" />
    </div>
  )
}

export { Page }
