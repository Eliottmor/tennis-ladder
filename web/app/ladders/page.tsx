import { gql } from 'graphql-request'
import Table from '../../components/Table'
import { client } from '../../gql-client'

const GetAllLadders = gql`
  {
    ladders {
      id
      name
      startDate
      endDate
    }
  }
`

export default async function Ladders() {
  const gqlClient = await client()
  const data = await gqlClient.request(GetAllLadders)
  
  const nameCell = {
    headerLabel: 'Name',
    renderCell: ({ name }) => <div>{name}</div>
  }

  const startDateCell = {
    headerLabel: 'Start date',
    renderCell: ({ startDate }) => <div>{startDate}</div>
  }

  const endDateCell = {
    headerLabel: 'End date',
    renderCell: ({ endDate }) => <div>{endDate}</div>
  }

  const cells = [nameCell, startDateCell, endDateCell]

  return (
    <div className='p-16'>
      <Table cells={cells} rows={data?.ladders} />
    </div>
  )
}