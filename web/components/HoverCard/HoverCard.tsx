'use client'
import * as HoverCard from '@radix-ui/react-hover-card'
import Avatar from '../Avatar'
import { ImageSize } from '../Avatar/Avatar'

interface ProfileHoverCardProps {
  imgSrc?: string
  fallbackText: string
  imgAlt: string
  fullName: string
  email: string
}

const ProfileHoverCard = ({
  imgSrc,
  fallbackText,
  imgAlt,
  fullName,
  email
}: ProfileHoverCardProps) => {
  return (
    <HoverCard.Root closeDelay={100}>
      <HoverCard.Trigger asChild>
        <span>
          <Avatar imgSrc={imgSrc} fallbackText={fallbackText} imgAlt={imgAlt} />
        </span>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content className='shadow w-72 bg-white p-5 rounded-md' side='right' sideOffset={5}>
          <Avatar imgSrc={imgSrc} imgSize={ImageSize.Lg} fallbackText={fallbackText} imgAlt={imgAlt} />
          <div className='font-semibold pt-1'>{fullName}</div>
          <div className='text-textLight'>{email}</div>
          <div className='text-textLight'>USTA rating: 4.5</div>
          <div className='py-3'>Just a casual player trying to get better. Reach out to schedule a match. I am typically available during the evenings and weekends.</div>
          <div className='flex gap-2'>
            <div className='font-semibold m-0'>14</div>
            <div className='text-textLight m-0'> Matches played</div>
          </div>
          <HoverCard.Arrow className='fill-white' />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}
export default ProfileHoverCard
