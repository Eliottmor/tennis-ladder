'use client'
import Table from '@ui/Table'

interface Ladder {
  id: string
  startDate: string
  endDate: string
}

interface LaddersPageProps {
  ladders: Ladder[]
}

const LaddersPage = ({ ladders }: LaddersPageProps) => {
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
      <Table cells={cells} rows={ladders} />
    </div>
  )
}

export default LaddersPage
