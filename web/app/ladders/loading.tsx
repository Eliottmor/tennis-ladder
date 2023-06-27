'use client'
import Table from '@ui/Table'

export default function Loading() {
  
  const nameCell = {
    headerLabel: 'Name',
    renderCell: () => <div className='rounded-md bg-gray-200 animate-pulse w-2/5 h-[21px]' />
  }

  const startDateCell = {
    headerLabel: 'Start date',
    renderCell: () => <div className='rounded-md bg-gray-200 animate-pulse w-2/5 h-[21px]' />
  }

  const endDateCell = {
    headerLabel: 'End date',
    renderCell: () => <div className='rounded-md bg-gray-200 animate-pulse w-2/5 h-[21px]' />
  }

  const cells = [nameCell, startDateCell, endDateCell]

  return (
    <div className='p-16'>
      <Table cells={cells} skeletonRows={3} />
    </div>
  )
}