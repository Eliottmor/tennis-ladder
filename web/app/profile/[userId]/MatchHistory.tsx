'use client'
import Table from '@ui/Table'
import { useCurrentUser } from '@utils/useCurrentUser'
import { useParams } from 'next/navigation'
import AddMatchModal from './AddMatchModal'

const MatchHistory = () => {
  const params = useParams()
  const { currentUser } = useCurrentUser()
  const playerCell = {
    headerLabel: 'player',
    renderCell: () => <div>name</div>
  }
  
  const cells = [playerCell]

  const zeroState = <div className='m-16 text-center text-base'>This player has not played any matches yet.</div>

  return (
    <>
      <h2 className='pt-8 text-2xl font-semibold inline-flex'>
        Match history { params?.userId === currentUser?.id && <AddMatchModal />}
      </h2>
      <Table
        cells={cells}
        rows={[]}
        zeroStateContent={zeroState}
      />
    </>
  )
}

export default MatchHistory