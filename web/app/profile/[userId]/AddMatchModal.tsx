'use client'
import { gql } from 'graphql-request'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Button, { ButtonType } from '@ui/Button'
import Modal from '@ui/Modal'
import { clientRequest } from '@gql/client-gql-request'
import { useRouter } from 'next/navigation'
import { useCurrentUser } from '@utils/useCurrentUser'
import Avatar from '@ui/Avatar'
import SetInputField from '@ui/SetInputField'

const updateUserById = gql`
  mutation UpdateUserById($input: UpdateUserByIdInput!) {
    updateUserById(input: $input) {
      id
    }
  }
`

const AddMatchModal = () => {
  // const router = useRouter()
  const formMethods = useForm()
  const { watch, handleSubmit, register } = formMethods
  const { currentUser } = useCurrentUser()
  const [isOpen, setIsOpen] = useState(false)
  const addMatch = (data) => {
    // clientRequest(updateUserById, { input: {...data, userId: user?.id }}).then(() => {
    //   setIsOpen(false)
    //   router.refresh()
    // })
  }
  const playerOne = watch('playerOne')
  const playerTwo = watch('playerTwo')

  function getWinner(playerOne, playerTwo) {
    let playerOneSetsWon = 0
    let playerTwoSetsWon = 0

    const hasBothScoreSet1 = playerTwo && playerTwo.set1 && playerOne && playerOne.set1
    if (hasBothScoreSet1 && playerOne?.set1 > playerTwo?.set1) playerOneSetsWon++
    if (hasBothScoreSet1 && playerTwo?.set1 > playerOne?.set1) playerTwoSetsWon++

    const hasBothScoreSet2 = playerTwo && playerTwo.set2 && playerOne && playerOne.set2
    if (hasBothScoreSet2 && playerOne?.set2 > playerTwo?.set2) playerOneSetsWon++
    if (hasBothScoreSet2 && playerTwo?.set2 > playerOne?.set2) playerTwoSetsWon++

    const hasBothScoreSet3 = playerTwo && playerTwo.set3 && playerOne && playerOne.set3
    if (hasBothScoreSet3 && playerOne?.set3 > playerTwo?.set3) playerOneSetsWon++
    if (hasBothScoreSet3 && playerTwo?.set3 > playerOne?.set3) playerTwoSetsWon++

    if (playerOneSetsWon > playerTwoSetsWon) return 'playerOne'
    if (playerTwoSetsWon > playerOneSetsWon) return 'playerTwo'
  }
  const winner = getWinner(playerOne, playerTwo)

  const isPlayerOneWinner = winner === 'playerOne'
  const isPlayerTwoWinner = winner === 'playerTwo'

  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        trigger={<Button buttonType={ButtonType.Link} label='Add match' className='self-center' />}
        title='Match score'
      >
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(addMatch)}>
            <div className='inline-flex py-5'>
              <Avatar imgSrc={currentUser?.image} fallbackText={currentUser?.fallbackImgText || ''} imgAlt={currentUser?.fullName || ''} />
              <div className='inline-block pl-3'>
                <p className='text-lg'>{currentUser?.fullName}</p>
                {!isPlayerOneWinner && <p className='text-textLight'>Player 1</p>}
                {isPlayerOneWinner && <p className='text-blue font-semibold'>Winner!</p>}
              </div>
            </div>
            <div className='px-8'>
              <SetInputField setNumber='1' register={register} />
              <SetInputField setNumber='2' register={register} />
              <SetInputField setNumber='3' register={register} />
            </div>
            <div className='inline-flex py-5'>
              <Avatar imgSrc='' fallbackText='' imgAlt='' />
              <div className='inline-block pl-3'>
                <p className='text-lg'>Add player</p>
                {!isPlayerTwoWinner && <p className='text-textLight'>Player 2</p>}
                {isPlayerTwoWinner && <p className='text-blue font-semibold'>Winner!</p>}
              </div>
            </div>
            <div className='flex mt-6 justify-end'>
              <Button label='Submit match' type='submit' />
            </div>
          </form>
        </FormProvider>
      </Modal>
    </>
  )
}

export default AddMatchModal
