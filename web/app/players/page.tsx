import { gql } from 'graphql-request'
import ProfileHoverCard from '../../components/HoverCard/HoverCard'
import Table from '../../components/Table'
import { client } from '../../gql-client'

const GetAllPlayers = gql`
  {
    players {
      id
      email
      fullName
      image
      phoneNumber
      fallbackImgText
      ladders {
        id
        name
      }
    }
  }
`

export default async function Players() {
  const gqlClient = await client()
  const data = await gqlClient.request(GetAllPlayers)
  console.log(data)

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
    renderCell: ({ ladders }) => (
      <div>
        {ladders?.length}
        <div>
          {ladders.map(ladder => <div key={ladder?.id}>{ladder?.name}</div>)}
        </div>
      </div>
    )
  }

  const cells = [fullNameCell, emailCell, phoneNumberCell, ladderCell]

  return (
    <div className='p-16'>
      <Table cells={cells} rows={data?.players} />
    </div>
  )
}