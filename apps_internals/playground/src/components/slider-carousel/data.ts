// Import your images
import IMG1 from '../../../public/assets/image1.png'
import IMG2 from '../../../public/assets/image2.png'
import IMG3 from '../../../public/assets/image3.png'
import { CarouselImage } from './types'

export const CAROUSEL_IMAGES: CarouselImage[] = [
  { id: '1', src: IMG1, alt: 'Insight 1' },
  { id: '2', src: IMG2, alt: 'Insight 2' },
  { id: '3', src: IMG3, alt: 'Insight 3' },
  { id: '4', src: IMG2, alt: 'Insight 4' },
  { id: '5', src: IMG3, alt: 'Insight 5' }
]

export const DEFAULT_CARD_WIDTH = 500
export const DEFAULT_SIDE_SCALE = 0.88
export const DEFAULT_SIDE_OPACITY = 0.6
export const DEFAULT_CONTAINER_HEIGHT = 300
export const DEFAULT_AUTO_PLAY_INTERVAL = 2000
export const MAX_INDICATORS = 5
