const TextField = ({ ...rest }) => {
  return (
    <input
      className='inline-flex min-w-[200px] items-center rounded px-2 h-9 bg-neutral box-border'
      {...rest}
    />
  )
}

export default TextField
