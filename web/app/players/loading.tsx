'use client'
import Table from '@ui/Table'

export default function Loading() {
  const fullNameCell = {
    headerLabel: 'Name',
    renderCell: () => (
      <div className='flex animate-pulse'>
        <div className='rounded-full bg-gray-200 h-11 w-11' />
        <span className='rounded-md ml-6 bg-gray-200 h-[21px] w-48 self-center'></span>
      </div>
    )
  }

  const emailCell = {
    headerLabel: 'Email',
    renderCell: () => <div className='rounded-md animate-pulse bg-gray-200 w-96 h-[21px]' />
  }

  const phoneNumberCell = {
    headerLabel: 'Phone Number',
    renderCell: () => <div className='rounded-md animate-pulse bg-gray-200 w-96 h-[21px]' />
  }

  const ladderCell = {
    headerLabel: 'Ladders',
    renderCell: () => <div className='rounded-md animate-pulse bg-gray-200 w-10 h-[21px]' />
  }

  const cells = [fullNameCell, emailCell, phoneNumberCell, ladderCell]

  return (
    <div className='p-16'>
      <Table cells={cells} skeletonRows={5} />
    </div>
  )
}