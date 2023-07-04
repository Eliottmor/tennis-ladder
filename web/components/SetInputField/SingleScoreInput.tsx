import { Dispatch, MutableRefObject, SetStateAction } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface SingleScoreInputProps {
  hasWonSet?: boolean,
  setActiveElement: Dispatch<SetStateAction<Element | null>>
  register: UseFormRegisterReturn
  setRef: MutableRefObject<HTMLInputElement | null>
}

const SingleScoreInput = ({
  hasWonSet,
  setActiveElement,
  register,
  setRef
}: SingleScoreInputProps) => {
  const borderStyle = 'border-2 border-gray-300'
  const { onBlur, ref } = register

  return (
    <input
      className={`w-[56px] text-center h-[48px] inline-flex items-center justify-center rounded py-0 px-2 text-lg leading-[1] bg-neutral mt-2 mx-0 mb-4 box-border ${hasWonSet && borderStyle}`}
      maxLength={1}
      placeholder='0'
      inputMode='numeric'
      pattern='[0-9]'
      onFocus={() => setActiveElement(document.activeElement)}
      {...register}
      ref={(e) => {
        ref(e)
        setRef.current = e
      }}
      onBlur={(e) => {
        onBlur(e)
        setActiveElement(e.relatedTarget)
      }}
    />
  )
}

export default SingleScoreInput