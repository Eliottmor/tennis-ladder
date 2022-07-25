import { useRouter } from 'next/router'
import client from '../apollo-client'
import GetAllLadders from './gql/GetAllLadders.gql'

const Dashboard = ({ ladders }) => {
  function ladderTiles(ladder) {
    return <div>{ladder.name}</div>
  }

  return <>{ladders?.map(ladderTiles)}</>
}

export default Dashboard

export async function getServerSideProps() {
  const { data } = await client.query({ query: GetAllLadders })
  return {
    props: {
      ladders: data.ladders
    }
  }
}
