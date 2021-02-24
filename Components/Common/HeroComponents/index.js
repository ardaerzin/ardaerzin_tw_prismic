export const HeroTextSection = (props) => {
  return (
    <div
      className='
        flex flex-col flex-grow
        space-y-4
        w-full max-w-prose
      '
      {...props}
    />
  )
}

export const HeroDescription = (props) => {
  return (
    <p
      className='
        font-body
        text-2xl lg:text-4xl
      '
      {...props}
    />
  )
}
