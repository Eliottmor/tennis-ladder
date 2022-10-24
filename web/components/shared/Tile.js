import { styled } from '@stitches/react'

const TileRoot = styled('div', {
  width: 'fit-content',
  minWidth: 300,
  borderRadius: 14,
  padding: '2rem',
  lineHeight: 1,
  margin: '1rem 0 2.5rem',
  boxSizing: 'border-box',
  border: '1px solid $darkNeutral'
})

const Tile = ({ className, children }) => {
  return <TileRoot className={className}>{children}</TileRoot>
}

export default Tile
