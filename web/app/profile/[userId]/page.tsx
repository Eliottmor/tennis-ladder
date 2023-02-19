import { gql } from 'graphql-request'
import Avatar, { ImageSize } from '../../../components/Avatar'
import { gqlRequest } from '../../../gql-client'
import ProfileEditModalForm from './ProfileEditModalForm'

const query = gql`
  query GetUserById($userId: String!) {
    getUserById(userId:$userId) {
      id
      image
      fullName
      phoneNumber
      email
      fallbackImgText
    }
  }
`

export default async function Profile({ params }) {
  const userId = params?.userId
  const { getUserById: user } = await gqlRequest(query, { userId })

  return (
    <div className='p-16'>
      <Avatar imgAlt='profile picture' imgSize={ImageSize.Xl} fallbackText={user?.fallbackImgText} imgSrc={user?.image} />
      <div className='pl-2 text-5xl align-middle inline-flex'>
        {user?.fullName}
        <ProfileEditModalForm />
      </div>
      

      <div className='grid lg:grid-cols-3'>
        <div className='pt-4'>
          <h2 className='pt-8 text-lg font-semibold'>
            Contact Information
          </h2>
          <div className='font-medium text-text'>Email </div>
          <div className='mb-4'>{user?.email}</div>
          <div className='font-medium text-text'>Phone number </div>
          <div className='mb-4'>{user?.phoneNumber}</div>
        </div>

        <div className='pt-4'>
          <h2 className='pt-8 text-lg font-semibold'>
            USTA
          </h2>
          <div className='font-medium text-text'>USTA Number </div>
          <div className='mb-4'>2111251437</div>
          <div className='font-medium text-text'>Rating </div>
          <div className='mb-4'>4.5</div>
        </div>

        <div className='pt-4'>
          <h2 className='pt-8 text-lg font-semibold'>
            Availability
          </h2>
          <div>
            I usually am available on weeknights and weekends.
          </div>
        </div>
      </div>
    </div>
  )
}