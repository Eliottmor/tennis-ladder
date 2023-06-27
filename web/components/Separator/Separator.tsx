interface SeparatorProps {
  children: JSX.Element
}

const Separator = ({ children }: SeparatorProps) => {
  return (
    <span className={`text-textLight
      flex
      justify-center
      items-center
      uppercase
      whitespace-nowrap
      font-medium
      after:content-['']
      after:inline-block
      after:w-[40%]
      after:h-[1px]
      after:my-0
      after:mx-2
      after:bg-textLighter
      before:content-['']
      before:inline-block
      before:w-[40%]
      before:h-[1px]
      before:my-0
      before:mx-2
      before:bg-textLighter`
    }
    >
      {children}
    </span>
  )
}

export default Separator
