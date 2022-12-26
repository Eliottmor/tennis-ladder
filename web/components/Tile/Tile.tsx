interface TileProps {
  children: JSX.Element
}

const Tile = ({ children }: TileProps) => {
  return (
    <div className='p-4 box-border w-auto inline-block rounded-[4px] min-w-[300px] border-[1px] border-darkNeutral'>
      {children}
    </div>
  )
}

export default Tile
