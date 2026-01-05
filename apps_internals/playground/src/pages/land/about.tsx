import { Image } from '@vezham/react/v2'

import AboutLogo from '../../../public/assets/aboutlogo.png'
import { List } from '../../components/list'
import { Text } from '../../components/text'

const About = () => {
  const listitems = [
    { content: 'Set a cadence for your team meetings' },
    { content: 'Have a clear meeting objective and agenda' },
    { content: 'Start on time and end on time' },
    { content: 'Have the right attendees in the room' },
    {
      content:
        'Have clear action items [who, what, when] at the end of the meeting'
    }
  ]
  return (
    <div className="my-8 flex w-full flex-col items-start justify-start overflow-x-hidden px-5 md:px-8">
      <Text content="About us" variant="title" size="lg" />
      <Text
        className="-mt-4 md:-mt-6"
        content="__"
        variant="title"
        color="primary"
        size="lg"
      />

      <div className="mt-6 grid w-full grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-16">
        <div className="col-span-1 w-full md:col-span-9">
          <Text
            content="Picture this… you’re in your weekly meeting and you ask a question."
            variant="paragraph"
          />
          <Text
            content="No one responds. Whether they’re zoned out or are responding to emails or chatting"
            variant="paragraph"
          />
          <Text
            content="on Slack, it can feel defeating."
            variant="paragraph"
          />

          <List
            title="In order to have an epic meeting, you need five parts:"
            style="circle"
            variant="primary"
            items={listitems}
          />

          <Text
            content="Rate It was created to help leaders and managers have epic meetings that aren’t wasting anyone’s time."
            variant="paragraph"
          />
          <Text
            content="With timely feedback on how meetings can be productive, you will soon be holding world-class and super effective meetings."
            variant="paragraph"
          />
        </div>

        <div className="col-span-1 flex w-full items-center justify-center md:col-span-2">
          <Image radius="none" src={AboutLogo} className="h-auto max-w-full" />
        </div>
      </div>
    </div>
  )
}

export { About }
