const Tooltip = props => {
  return (
    <span
      className='
        tooltip
        bg-black bg-opacity-75
        py-2 px-3
        -mt-1
        lg:-mt-4
        text-xs md:text-sm text-white
        font-display
        rounded-lg
      '
      {...props}
    />
  )
}

export default Tooltip
