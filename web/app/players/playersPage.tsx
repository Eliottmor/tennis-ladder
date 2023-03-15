'use client'
import { useRouter } from 'next/navigation'
import ProfileHoverCard from '@ui/HoverCard'
import Table from '@ui/Table'

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

  const ladderCell = {
    headerLabel: 'Ladders',
    renderCell: ({ ladders }) => <div>{ladders?.length}</div>
  }

  const cells = [fullNameCell, emailCell, phoneNumberCell, ladderCell]

  return (
    <div className='p-16'>
      <Table cells={cells} rows={players} onClick={(player: Player) => router.push(`/profile/${player?.id}`)}/>
    </div>
  )
}

export default PlayersPage