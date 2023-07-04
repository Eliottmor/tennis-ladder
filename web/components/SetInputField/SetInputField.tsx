import { useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types'

interface SetInputFieldProps {
  setNumber: string
  register: UseFormRegister<FieldValues>
}

const SetInputField = ({ setNumber, register }: SetInputFieldProps) => {
  const { watch } = useFormContext()
  const [activeElement, setActiveElement] = useState<Element | null>()

  const playerOneSetScore = watch(`playerOne.set${setNumber}`)
  const playerTwoSetScore = watch(`playerTwo.set${setNumber}`)
  const playerOneTiebreakerScore = watch(`playerOne.tiebreaker${setNumber}`)
  const playerTwoTiebreakerScore = watch(`playerTwo.tiebreaker${setNumber}`)

  const playerOneSetRef = useRef<HTMLInputElement | null>(null)
  const playerTwoSetRef = useRef<HTMLInputElement | null>(null)
  const playerOneTiebreakerRef = useRef<HTMLInputElement | null>(null)
  const playerTwoTiebreakerRef = useRef<HTMLInputElement | null>(null)
  const allRefs = [playerOneSetRef, playerTwoSetRef, playerOneTiebreakerRef, playerTwoTiebreakerRef]


  const playerOneSetRegister = register(`playerOne.set${setNumber}`)
  const { ref: playerOneSetRegisterRef, onBlur: playerOneSetOnBlur} = playerOneSetRegister
  const playerTwoSetRegister = register(`playerTwo.set${setNumber}`)
  const { ref: playerTwoSetRegisterRef, onBlur: playerTwoSetOnBlur} = playerTwoSetRegister
  const playerOneTiebreakerRegister = register(`playerOne.tiebreaker${setNumber}`)
  const { ref: playerOneTiebreakerRegisterRef, onBlur: playerOneTiebreakerOnBlur } = playerOneTiebreakerRegister
  const playerTwoTiebreakerRegister = register(`playerTwo.tiebreaker${setNumber}`)
  const { ref: playerTwoTiebreakerRegisterRef, onBlur: playerTwoTiebreakerOnBlur } = playerTwoTiebreakerRegister
  
  const hasBothScores = !!playerOneSetScore && !!playerTwoSetScore
  const hasPlayerOneWonSet = hasBothScores && playerOneSetScore > playerTwoSetScore
  const hasPlayerTwoWonSet = hasBothScores && playerTwoSetScore > playerOneSetScore

  const isTiebreaker = Math.abs(playerOneSetScore - playerTwoSetScore) === 1
  const isEditingTiebreakerScore = hasBothScores && isTiebreaker && !!allRefs.find(ref => ref.current === activeElement)
  
  const hasTiebreakerScore = !!playerTwoTiebreakerScore && !!playerOneTiebreakerScore && !isEditingTiebreakerScore

  const borderStyle = 'border-2 border-gray-300'
  const tiebreakerTitle = isEditingTiebreakerScore && '- Tiebreaker'

  return (
    <div className='inline-flex items-center flex-col pr-7'>
      <p className='text-textLight'>Set {setNumber} {tiebreakerTitle}</p>
      <div className='flex-row'>
        <div className='inline-flex flex-col relative'>
          {hasTiebreakerScore && <div className='absolute top-[10px] right-3 text-xs'>{playerOneTiebreakerScore}</div>}
          <input
            className={`w-[56px] text-center h-[48px] inline-flex items-center justify-center rounded py-0 px-2 text-lg leading-[1] bg-neutral mt-2 mx-0 mb-4 box-border ${hasPlayerOneWonSet && borderStyle}`}
            maxLength={1}
            placeholder='0'
            inputMode='numeric'
            pattern='[0-9]'
            onFocus={() => setActiveElement(document.activeElement)}
            {...playerOneSetRegister}
            ref={(e) => {
              playerOneSetRegisterRef(e)
              playerOneSetRef.current = e
            }}
            onBlur={(e) => {
              playerOneSetOnBlur(e)
              setActiveElement(e.relatedTarget)
            }}
          />
          {hasTiebreakerScore && <div className='absolute bottom-11 right-3 text-xs'>{playerTwoTiebreakerScore}</div>}
          <input
            className={`w-[56px] text-center h-[48px] inline-flex items-center justify-center rounded py-0 px-2 text-lg leading-[1] bg-neutral mt-2 mx-0 mb-4 box-border ${hasPlayerTwoWonSet && borderStyle}`}
            maxLength={1}
            placeholder='0'
            pattern='[0-9]'
            inputMode='numeric'
            onFocus={() => setActiveElement(document.activeElement)}
            {...playerTwoSetRegister}
            ref={(e) => {
              playerTwoSetRegisterRef(e)
              playerTwoSetRef.current = e
            }}
            onBlur={(e) => {
              playerTwoSetOnBlur(e)
              setActiveElement(e.relatedTarget)
            }}
          />
        </div>
        {isEditingTiebreakerScore && (
          <div className='inline-flex flex-col px-1'>
            <input
              className={'w-[56px] text-center h-[48px] inline-flex items-center justify-center rounded py-0 px-2 text-lg leading-[1] bg-neutral mt-2 mx-0 mb-4 box-border'}
              maxLength={2}
              placeholder='0'
              inputMode='numeric'
              pattern='[0-9]'
              onFocus={() => setActiveElement(document.activeElement)}
              {...playerOneTiebreakerRegister}
              ref={(e) => {
                playerOneTiebreakerRegisterRef(e)
                playerOneTiebreakerRef.current = e
              }}
              onBlur={(e) => {
                playerOneTiebreakerOnBlur(e)
                setActiveElement(e.relatedTarget)
              }}
            />

            <input
              className={'w-[56px] text-center h-[48px] inline-flex items-center justify-center rounded py-0 px-2 text-lg leading-[1] bg-neutral mt-2 mx-0 mb-4 box-border'}
              maxLength={2}
              placeholder='0'
              inputMode='numeric'
              pattern='[0-9]'
              onFocus={() => setActiveElement(document.activeElement)}
              {...playerTwoTiebreakerRegister}
              ref={(e) => {
                playerTwoTiebreakerRegisterRef(e)
                playerTwoTiebreakerRef.current = e
              }}
              onBlur={(e) => {
                playerTwoTiebreakerOnBlur(e)
                setActiveElement(e.relatedTarget)
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default SetInputField
