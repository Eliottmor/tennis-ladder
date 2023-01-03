'use client'
import { Root, Image, Fallback } from '@radix-ui/react-avatar'

interface AvatarProps {
  fallbackText: string
  imgSrc?: string
  imgAlt: string
}

const Avatar = ({ imgSrc, imgAlt,  fallbackText }: AvatarProps) => (
  <Root className='inline-flex items-center justify-center align-middle overflow-hidden select-none w-11 h-11 rounded-full bg-backgroundContainerAlt'>
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

export default Avatar
