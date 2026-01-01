// import { tv, VariantProps } from '@vezham/react-utils'
// const tva = tv({
//     slots: {
//         base: 'flex rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700',
//         header: 'flex items-start gap-3 my-4',
//         logo: 'flex-shrink-0',
//         icon: 'flex-shrink-0',
//         imageWrapper: '',
//         image: 'w-full h-full',
//         logoimage:'h-10 w-10',
//         body: '',
//         title: '',
//         subtitle: '',
//         description: '',
//         footer: 'flex gap-2 ',
//         action: 'mt-4 rounded-md text-sm font-medium transition-colors'
//     },
//     variants: {
//         variant: {
//             default: '',
//             elevated: 'shadow-lg',
//             outlined: 'border-2 border-gray-300 dark:border-gray-600 bg-transparent',
//             flat: 'bg-gray-100 dark:bg-gray-900',
//         },
//         layout: {
//             default: '',
//             header: '',
//             image: '',
//             imageBackground: ''
//         },
//         align: {
//             left: '',
//             center: 'items-center text-center',
//             right: 'items-end text-right'
//         },
//         size: {
//             xs: {
//                 base: 'p-1 ',
//                 title: 'text-xs',
//                 subtitle: 'text-xs',
//                 description: 'text-xs text-justify',
//                 action: 'px-2 py-1 text-xs'
//             },
//             sm: {
//                 base: 'p-2',
//                 title: 'text-sm',
//                 subtitle: 'text-sm',
//                 description: 'text-sm text-justify' ,
//                 action: 'px-3 py-1.5 text-sm'
//             },
//             md: {
//                 base: 'p-3',
//                 title: 'text-xl',
//                 subtitle: 'text-sm',
//                 description: 'text-sm text-justify',
//                 action: 'px-4 py-2 text-sm'
//             },
//             lg: {
//                 base: 'p-4',
//                 title: 'text-xl',
//                 subtitle: 'text-base',
//                 description: 'text-base text-justify',
//                 action: 'px-5 py-2.5 text-base'
//             },
//             xl: {
//                 base: 'p-5',
//                 title: 'text-2xl',
//                 subtitle: 'text-lg',
//                 description: 'text-lg text-justify',
//                 action: 'px-6 py-3 text-lg'
//             }
//         },
//         orientation: {
//             horizontal: 'flex-row',
//             vertical: 'flex-col'
//         },
//         hasImage: {
//             true: '',
//             false: ''
//         },
//         imageBackground: {
//             true: 'relative overflow-hidden',
//             false: ''
//         }
//     },
//     compoundVariants: [
//         // Layout: default (icon/logo above title)
//         {
//             layout: 'default',
//             class: {
//                 header: 'flex-col items-start',
//                 body: 'mt-2'
//             }
//         },
//         // Layout: header (logo/icon and title in same line)
//         {
//             layout: 'header',
//             class: {
//                 header: 'flex-row items-center',
//                 body: 'mt-3'
//             }
//         },
//         // Layout: image (image with overlay)
//         {
//             layout: 'image',
//             hasImage: true,
//             class: {
//                 imageWrapper: 'order-first',
//                 header: 'mt-4',
//                 body: 'mt-2'
//             }
//         },
//         // Layout: imageBackground (image as background)
//         {
//             layout: 'imageBackground',
//             imageBackground: true,
//             class: {
//                 base: 'bg-cover  text-white',
//                 body: 'relative z-10'
//             }
//         },
//         // Align variations
//         {
//             align: 'left',
//             class: {
//                 header: 'items-start justify-start',
//                 body: 'text-left',
//                 footer:'justify-start',
//             }
//         },
//         {
//             align: 'center',
//             class: {
//                 header: 'items-start justify-center',
//                 body: 'text-center',
//                 footer: 'justify-center',
//             }
//         },
//         {
//             align: 'right',
//             class: {
//                 header: 'items-start justify-end',
//                 body: 'text-right',
//                 footer: 'justify-end',
//             }
//         }
//     ],
//     defaultVariants: {
//         variant: 'default',
//         layout: 'default',
//         align: 'center',
//         size: 'lg',
//         orientation: 'vertical',
//         hasImage: false,
//         imageBackground: false
//     }
// })
// type tvProps = VariantProps<typeof tva>
// type tvSlots = keyof ReturnType<typeof tva>
// export { tva }
// export type { tvProps, tvSlots }
import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'flex rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800',
    header: 'my-2 flex items-start gap-3',
    logo: 'flex-shrink-0',
    icon: 'flex-shrink-0',
    imageWrapper: '',
    image: 'h-full w-full',
    logoimage: 'h-10 w-10',
    body: '',
    title: '',
    subtitle: '',
    description: '',
    footer: 'flex gap-2',
    action: 'mt-4 rounded-md text-sm font-medium transition-colors'
  },
  variants: {
    variant: {
      default: '',
      elevated: 'shadow-lg',
      outlined: 'border-2 border-gray-300 bg-transparent dark:border-gray-600',
      flat: 'bg-gray-100 dark:bg-gray-900'
    },
    layout: {
      default: '',
      header: '',
      image: '',
      imageBackground: ''
    },
    align: {
      left: '',
      center: '',
      right: ''
    },
    size: {
      xs: {
        base: 'p-1',
        title: 'text-xs',
        subtitle: 'text-xs',
        description: 'text-justify text-xs',
        action: 'px-2 py-1 text-xs'
      },
      sm: {
        base: 'p-2',
        title: 'text-sm',
        subtitle: 'text-sm',
        description: 'text-justify text-sm',
        action: 'px-3 py-1.5 text-sm'
      },
      md: {
        base: 'p-3',
        title: 'text-xl',
        subtitle: 'text-sm',
        description: 'text-justify text-sm',
        action: 'px-4 py-2 text-sm'
      },
      lg: {
        base: 'p-4',
        title: 'text-xl',
        subtitle: 'text-base',
        description: 'text-justify text-base',
        action: 'px-5 py-2.5 text-base'
      },
      xl: {
        base: 'p-5',
        title: 'text-2xl',
        subtitle: 'text-lg',
        description: 'text-justify text-lg',
        action: 'px-6 py-3 text-lg'
      }
    },
    hasImage: {
      true: '',
      false: ''
    },
    imageBackground: {
      true: 'relative overflow-hidden',
      false: ''
    }
  },
  compoundVariants: [
    // Layout: default (icon/logo above title)
    {
      layout: 'default',
      class: {
        header: 'flex-col items-start',
        body: 'mt-2'
      }
    },
    // Layout: header (logo/icon and title in same line)
    {
      layout: 'header',
      class: {
        header: 'flex-row items-center',
        body: 'mt-3'
      }
    },
    // Layout: image (image with overlay)
    {
      layout: 'image',
      hasImage: true,
      class: {
        imageWrapper: 'order-first',
        header: 'mt-4',
        body: 'mt-2'
      }
    },
    // Layout: imageBackground (image as background)
    {
      layout: 'imageBackground',
      imageBackground: true,
      class: {
        base: 'min-h-[200px] bg-cover bg-center text-white',
        imageWrapper: 'absolute inset-0 z-0',
        image: 'absolute inset-0 h-full w-full object-cover',
        header: 'relative z-10',
        body: 'relative z-10 mt-2',
        footer: 'relative z-10',
        title: 'text-white',
        subtitle: 'text-white',
        description: 'text-white'
      }
    },
    // Align variations
    {
      align: 'left',
      class: {
        base: 'items-start text-left',
        header: 'items-start justify-start',
        body: 'text-left',
        footer: 'justify-start',
        title: 'text-left',
        subtitle: 'text-left'
      }
    },
    {
      align: 'center',
      class: {
        base: 'items-start text-center',
        header: 'items-start justify-center',
        body: 'text-center',
        footer: 'justify-center',
        title: 'text-center',
        subtitle: 'text-center'
      }
    },
    {
      align: 'right',
      class: {
        base: 'items-start text-right',
        header: 'items-start justify-end',
        body: 'text-right',
        footer: 'justify-end',
        title: 'text-right',
        subtitle: 'text-right'
      }
    }
  ],
  defaultVariants: {
    variant: 'default',
    layout: 'default',
    align: 'center',
    size: 'lg',
    hasImage: false,
    imageBackground: false
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
