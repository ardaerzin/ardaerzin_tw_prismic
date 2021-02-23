const Page = (props) => {
  return (
    <page
      className='
        flex flex-col
        container
        mx-auto
        min-h-screen
        px-6
        md:px-4
        lg:px-10
        lg:w-11/12
        justify-center
        items-center
      '
      {...props}
    />
  )
}

export default Page
