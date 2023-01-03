import { gql } from 'graphql-request'
import Avatar from '../../components/Avatar'
import Table from '../../components/Table'
import { client } from '../../gql-client'

const GetAllPlayers = gql`
  {
    players {
      id
      email
      fullName
      ladders {
        id
      }
    }
  }
`

export default async function Players() {
  const gqlClient = await client()
  const data = await gqlClient.request(GetAllPlayers)

  const fullNameCell = {
    headerLabel: 'Name',
    renderCell: ({ fullName }) => <div className='flex'>
      {fullName !== 'Eliott Tennis' && (<Avatar imgSrc='https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80' fallbackText='EM' imgAlt='fullName' />)}
      {fullName === 'Eliott Tennis' && (<Avatar fallbackText='EM' imgAlt={fullName} />)}
      <span className='pl-3 self-center'>{fullName}</span>
    </div>
  }

  const emailCell = {
    headerLabel: 'Email',
    renderCell: ({ email }) => <div>{email}</div>
  }

  const ladderCell = {
    headerLabel: 'Ladders',
    renderCell: ({ ladders }) => <div>{ladders?.length}</div>
  }

  const cells = [fullNameCell, emailCell, ladderCell]

  return (
    <div className='p-16'>
      <Table cells={cells} rows={data?.players} />
    </div>
  )
}