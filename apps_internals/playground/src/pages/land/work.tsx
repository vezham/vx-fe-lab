import Cartoon from '../../../public/assets/CARTOON.png'
import Img from '../../../public/assets/log.png'
import { LandCard } from '../../components/card'
import { Text } from '../../components/text'
import { CardLayout } from '../../layouts/land-card'

const cardData = [
  {
    icon: { name: 'mdi:google' },
    title: 'Google Integration',
    description: [
      'Simply log into your google account then seamlessly integrate and mirror your planned meetings.'
    ],
    align: 'center'
  },
  {
    icon: { name: 'mdi:google' },
    title: 'Google Integration',
    description: [
      'Simply log into your google account then seamlessly integrate and mirror your planned meetings.'
    ],
    align: 'center'
  },
  {
    icon: { name: 'mdi:google' },
    title: 'Google Integration',
    description: [
      'Simply log into your google account then seamlessly integrate and mirror your planned meetings.'
    ],
    align: 'center'
  }
  //   {
  //       logo: { src: Img, alt: "Frontend Radio" },
  //       title: "Google Integration",
  //       subtitle: 'google',
  //       layout: 'header',
  //       align: 'right',
  //       description: [
  //           "Simply log into your google account then seamlessly integrate and mirror your planned meetings."
  //       ],
  //       actions: [{ label: "Notify Me", variant: 'solid', color: 'primary', onClick: () => console.log("Notify") },
  //       { label: "Subscribe", variant:'solid', color:'danger',  onClick: () => console.log("Notify") }],

  //   },
  // {
  //     logo: { src: Img, alt: "Frontend Radio" },
  //     title: "Google Integration",
  //     subtitle: 'google',
  //     layout: 'header',
  //     align: 'left',
  //     description: [
  //         "Simply log into your google account then seamlessly integrate and mirror your planned meetings."
  //     ],
  //     actions: [{ label: "Notify Me", variant: 'solid', color: 'primary', onClick: () => console.log("Notify") },
  //     { label: "Subscribe", variant: 'solid', color: 'danger', onClick: () => console.log("Notify") }],

  // },
  // {
  //     logo: { src: Img, alt: "Frontend Radio" },
  //     // image:{src: Cartoon, alt: 'Error'},
  //     title: "Google Integration",
  //     subtitle: 'google',
  //     layout: 'header',
  //     align: 'center',
  //     description: [
  //         "Simply log into your google account then seamlessly integrate and mirror your planned meetings."
  //     ],
  //     actions: [{ label: "Notify Me", variant: 'solid', color: 'primary', onClick: () => console.log("Notify") },
  //        ],
  //     // imageAsBackground: true,
  //     // hasImage:true

  // },
  //   {
  //       logo: { src: Img, alt: "Frontend Radio" },
  //       image:{src: Cartoon, alt: 'Error'},
  //       title: "Google Integration",
  //       subtitle: 'google',
  //       layout: 'header',
  //       align: 'left',
  //       description: [
  //           "Simply log into your google account then seamlessly integrate and mirror your planned meetings."
  //       ],
  //       actions: [{ label: "Notify Me", variant: 'solid', color: 'primary', onClick: () => console.log("Notify") },
  //       { label: "Subscribe", variant: 'solid', color: 'danger', onClick: () => console.log("Notify") }],
  //       imageAsBackground: false,
  //       // hasImage:true

  //   },
  // {
  //     logo: { src: Img, alt: "Frontend Radio" },
  //     image:{src: Cartoon, alt: 'Error'},
  //     title: "Google Integration",
  //     subtitle: 'google',
  //     layout: 'header',
  //     align: 'left',
  //     description: [
  //         "Simply log into your google account then seamlessly integrate and mirror your planned meetings."
  //     ],
  //     actions: [{ label: "Notify Me", variant: 'solid', color: 'primary', onClick: () => console.log("Notify") },
  //     { label: "Subscribe", variant: 'solid', color: 'danger', onClick: () => console.log("Notify") }],
  //     imageAsBackground: false,
  //     // hasImage:true

  // },
  // {
  //     logo: { src: Img, alt: "Frontend Radio" },
  //     image:{src: Cartoon, alt: 'Error'},
  //     title: "Google Integration",
  //     subtitle: 'google',
  //     layout: 'imageAsBackground',
  //     align: 'left',
  //     description: [
  //         "Simply log into your google account then seamlessly integrate and mirror your planned meetings."
  //     ],
  //     actions: [{ label: "Notify Me", variant: 'solid', color: 'primary', onClick: () => console.log("Notify") },
  //     ],
  //     imageAsBackground: false,
  //     hasImage:false

  // },
  //   {
  //       logo: { src: Img, alt: "Frontend Radio" },
  //       image: { src: Cartoon, alt: 'Error' },
  //       title: "Google Integration",
  //       subtitle: 'google',
  //       layout: 'imageAsBackground',
  //       align: 'left',
  //       description: [
  //           "Simply log into your google account then seamlessly integrate and mirror your planned meetings."
  //       ],
  //       actions: [{ label: "Notify Me", variant: 'solid', color: 'primary', onClick: () => console.log("Notify") },
  //       ],
  //       imageAsBackground: true,
  //       hasImage: false

  //   }
]

const Work = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <Text content=" How it works ? " variant="title" size="lg"></Text>
        <Text
          className="-mt-4 md:-mt-6"
          content="__"
          variant="title"
          color="primary"
          size="lg"></Text>
      </div>
      <CardLayout columns={3} gap="xl" padding="md" className="px-5 md:mt-6">
        {cardData.map((cardProps, index) => (
          <LandCard key={index} {...cardProps} />
        ))}
      </CardLayout>
    </div>
  )
}

export { Work }
