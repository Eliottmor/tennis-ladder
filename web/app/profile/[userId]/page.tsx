import { gql } from 'graphql-request'
import Avatar, { ImageSize } from '@ui/Avatar'
import { serverRequest } from '@gql/server-gql-request'
import ProfileEditModalForm from './ProfileEditModalForm'
import MatchHistory from './MatchHistory'

const query = gql`
  query GetUserById($userId: String!) {
    getUserById(userId:$userId) {
      id
      image
      firstName
      lastName
      fullName
      phoneNumber
      email
      fallbackImgText
      ustaInfo {
        ustaNumber
        ntrpRating
      }
    }
  }
`

export default async function Profile({ params }) {
  const userId = params?.userId
  const { getUserById: user } = await serverRequest(query, { userId })
  const { ustaNumber, ntrpRating } = user?.ustaInfo || {}

  return (
    <div className='p-8 md:p-16'>
      <span className='float-right'><ProfileEditModalForm user={user}/></span>
      <Avatar imgAlt='profile picture' imgSize={ImageSize.Xl} fallbackText={user?.fallbackImgText} imgSrc={user?.image} />
      <div className='pt-4 md:pt-0 md:pl-2 text-xl md:text-5xl align-middle md:inline-flex'>
        {user?.fullName}
      </div>

      <section className='grid lg:grid-cols-3'>
        <article className='pt-4'>
          <h2 className='pt-8 text-lg font-semibold'>
            Contact Information
          </h2>
          <div className='font-medium text-text'>Email</div>
          <div className='mb-4'>{user?.email}</div>
          <div className='font-medium text-text'>Phone number</div>
          <div className='mb-4'>{user?.phoneNumber || '—'}</div>
        </article>

        <article className='pt-4'>
          <h2 className='pt-8 text-lg font-semibold'>
            USTA
          </h2>
          <div className='font-medium text-text'>USTA Number </div>
          <div className='mb-4'>{ustaNumber || '—'}</div>
          <div className='font-medium text-text'>Rating </div>
          <div className='mb-4'>{ntrpRating || '—'}</div>
        </article>

        <article className='pt-4'>
          <h2 className='pt-8 text-lg font-semibold'>
            Availability
          </h2>
          <div>
            I usually am available on weeknights and weekends.
          </div>
        </article>
      </section>
      <section>
        <MatchHistory />
      </section>
    </div>
  )
}