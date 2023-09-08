import { useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types'
import SingleScoreInput from './SingleScoreInput'

interface SetInputFieldProps {
  setNumber: string
  register: UseFormRegister<FieldValues>
}

const SetInputField = ({ setNumber, register }: SetInputFieldProps) => {
  const { watch } = useFormContext()
  const [activeElement, setActiveElement] = useState<Element | null>()

  const [
    playerOneSetScore,
    playerTwoSetScore,
    playerOneTiebreakerScore,
    playerTwoTiebreakerScore
  ] = watch([`playerOne.set${setNumber}`, `playerTwo.set${setNumber}`, `playerOne.tiebreaker${setNumber}`, `playerTwo.tiebreaker${setNumber}`])

  const playerOneSetRef = useRef<HTMLInputElement | null>(null)
  const playerTwoSetRef = useRef<HTMLInputElement | null>(null)
  const playerOneTiebreakerRef = useRef<HTMLInputElement | null>(null)
  const playerTwoTiebreakerRef = useRef<HTMLInputElement | null>(null)
  const allRefs = [playerOneSetRef, playerTwoSetRef, playerOneTiebreakerRef, playerTwoTiebreakerRef]


  const playerOneSetRegister = register(`playerOne.set${setNumber}`)
  const playerTwoSetRegister = register(`playerTwo.set${setNumber}`)
  const playerOneTiebreakerRegister = register(`playerOne.tiebreaker${setNumber}`)
  const playerTwoTiebreakerRegister = register(`playerTwo.tiebreaker${setNumber}`)
  
  const hasBothScores = !!playerOneSetScore && !!playerTwoSetScore
  const hasPlayerOneWonSet = hasBothScores && playerOneSetScore > playerTwoSetScore
  const hasPlayerTwoWonSet = hasBothScores && playerTwoSetScore > playerOneSetScore

  const isTiebreaker = Math.abs(playerOneSetScore - playerTwoSetScore) === 1
  const isEditingTiebreakerScore = hasBothScores && isTiebreaker && !!allRefs.find(ref => ref.current === activeElement)
  
  const hasTiebreakerScore = !!playerTwoTiebreakerScore && !!playerOneTiebreakerScore && !isEditingTiebreakerScore
  const tiebreakerTitle = isEditingTiebreakerScore && '- Tiebreaker'

  return (
    <div className='inline-flex items-center flex-col pr-7'>
      <p className='text-textLight'>Set {setNumber} {tiebreakerTitle}</p>
      <div className='flex-row'>
        <div className='inline-flex flex-col relative'>
          {hasTiebreakerScore && <div className='absolute top-[10px] right-3 text-xs'>{playerOneTiebreakerScore}</div>}
          <SingleScoreInput
            hasWonSet={hasPlayerOneWonSet}
            setActiveElement={setActiveElement}
            register={playerOneSetRegister}
            setRef={playerOneSetRef}
          />
          {hasTiebreakerScore && <div className='absolute bottom-11 right-3 text-xs'>{playerTwoTiebreakerScore}</div>}
          <SingleScoreInput
            hasWonSet={hasPlayerTwoWonSet}
            setActiveElement={setActiveElement}
            register={playerTwoSetRegister}
            setRef={playerTwoSetRef}
          />
        </div>
        {isEditingTiebreakerScore && (
          <div className='inline-flex flex-col px-1'>
            <SingleScoreInput
              setActiveElement={setActiveElement}
              register={playerOneTiebreakerRegister}
              setRef={playerOneTiebreakerRef}
            />

            <SingleScoreInput
              setActiveElement={setActiveElement}
              register={playerTwoTiebreakerRegister}
              setRef={playerTwoTiebreakerRef}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default SetInputField
