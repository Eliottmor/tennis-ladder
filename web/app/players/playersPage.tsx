'use client'
import { useRouter } from 'next/navigation'
import ProfileHoverCard from '@ui/HoverCard'
import Table from '@ui/Table'
import { ImageSize } from '@ui/Avatar'

interface Player {
  id: string
  fullName: string
  email: string
  phoneNumber: string
  fallbackImgText: string
  image: string
}

interface PlayersPageProps {
  players: Player[]
}

const PlayersPage = ({ players }: PlayersPageProps) => {
  const router = useRouter()

  const fullNameCell = {
    headerLabel: 'Name',
    renderCell: ({ fullName, image, email, fallbackImgText }) => (
      <div className='flex'>
        <ProfileHoverCard
          imgSrc={image}
          fullName={fullName}
          fallbackText={fallbackImgText}
          imgAlt={fullName}
          email={email}
        />
        <span className='pl-3 self-center'>{fullName}</span>
      </div>
    )
  }

  const emailCell = {
    headerLabel: 'Email',
    renderCell: ({ email }) => <div>{email}</div>
  }

  const phoneNumberCell = {
    headerLabel: 'Phone Number',
    renderCell: ({ phoneNumber }) => <div>{phoneNumber}</div>
  }

  const cells = [fullNameCell, emailCell, phoneNumberCell]

  const renderMobilePlayers = (player) => {
    const {image, fullName, fallbackImgText, email, id, phoneNumber } = player
    return (
      <div className='flex p-3' key={id} onClick={() => router.push(`/profile/${player?.id}`)}>
        <ProfileHoverCard
          imgSrc={image}
          imgSize={ImageSize.Lg}
          fullName={fullName}
          fallbackText={fallbackImgText}
          imgAlt={fullName}
          email={email}
        />
        <div>
          <p className='pl-3 self-center text-base font-medium'>{fullName}</p>
          <p className='pl-3 self-center'>{email}</p>
          <p className='pl-3 self-center'>{phoneNumber}</p>
        </div>
      </div>

    )
  }

  return (
    <>
      <div className='p-16 hidden md:block'>
        <Table cells={cells} rows={players} onClick={(player: Player) => router.push(`/profile/${player?.id}`)}/>
      </div>
      <div className='block md:hidden pt-8 pl-2'>
        {players.map(renderMobilePlayers)}
      </div>
    </>
  )
}

export default PlayersPage