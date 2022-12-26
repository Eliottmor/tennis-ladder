// const ad = styled('input', {
//   all: 'unset',
//   minWidth: 200,
//   display: 'inline-flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderRadius: 4,
//   padding: '0 10px',
//   height: 35,
//   fontSize: '$1',
//   lineHeight: 1,
//   backgroundColor: '$neutral',
//   margin: '1rem 0 2.5rem',
//   boxSizing: 'border-box'
// })

const TextField = ({ ...rest }) => {
  return (
    <input
      className='inline-flex min-w-[200px] items-center rounded px-2 h-9 bg-neutral box-border'
      {...rest}
    />
  )
}

export default TextField
