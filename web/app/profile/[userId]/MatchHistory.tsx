'use client'
import Table from '@ui/Table'

const MatchHistory = () => {

  const playerCell = {
    headerLabel: 'player',
    renderCell: () => <div>name</div>
  }
  
  const cells = [playerCell]

  const zeroState = <div className='m-16 text-center text-base'>This player has not played any matches yet.</div>

  return (
    <>
      <h2 className='pt-8 text-2xl font-semibold'>
        Match history
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