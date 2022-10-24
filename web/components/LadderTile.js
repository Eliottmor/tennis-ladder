import { css } from '@stitches/react'
import Tile from './shared/Tile'

const LadderTile = ({ name, description }) => {
  return (
    <Tile>
      <div className={title()}>{name}</div>
      <div className={caption()}>some description</div>
    </Tile>
  )
}

const title = css({
  fontSize: 16,
  fontWeight: 'bold'
})

const caption = css({
  fontSize: 12,
  color: '$textLight',
  lineHeight: '18px'
})

export default LadderTile
