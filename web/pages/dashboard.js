import { useQuery } from '@apollo/client'
import LadderTile from '../components/LadderTile'
import Tile from '../components/shared/Tile'
import GetCurrentUserDashboard from './gql/GetCurrentUserDashboard.gql'

const Dashboard = () => {
  const { data, loading } = useQuery(GetCurrentUserDashboard)
  const currentPlayer = data?.currentPlayer
  const ladders = currentPlayer?.ladders

  if (loading) return null

  function ladderTiles({ id, name }) {
    return <LadderTile key={id} name={name} />
  }

  return (
    <>
      {ladders?.map(ladderTiles)}
      <Tile>hello</Tile>
    </>
  )
}

export default Dashboard
