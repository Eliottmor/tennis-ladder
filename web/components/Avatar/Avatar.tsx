'use client'
import { Root, Image, Fallback } from '@radix-ui/react-avatar'
import { IMG_SIZE } from './theme'

export enum ImageSize {
  Sm = 'small',
  Default = 'default',
  Lg = 'large'
}

interface AvatarProps {
  fallbackText: string
  imgSrc?: string
  imgAlt: string
  imgSize?: ImageSize
}

const Avatar = ({ imgSrc, imgAlt, imgSize = ImageSize.Default, fallbackText }: AvatarProps) => {
  const imageSize = IMG_SIZE[imgSize]

  return (
    <Root className={`inline-flex items-center justify-center align-middle overflow-hidden select-none rounded-full bg-backgroundContainerAlt ${imageSize}`}>
      <Image
        className='AvatarImage'
        src={imgSrc}
        alt={imgAlt}
      />
      <Fallback className='font-medium' delayMs={600}>
        {fallbackText}
      </Fallback>
    </Root>
  )
}

export default Avatar
