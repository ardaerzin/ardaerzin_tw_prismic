import classnames from 'classnames/dedupe'
import PropTypes from 'prop-types'

const Page = ({ className, ...rest }) => {
  return (
    <div
      className={classnames(className, `
        relative
        flex flex-col
        sm:container
        w-full
        mx-auto
        min-h-screen
        px-6 md:px-4 lg:px-10
        pb-6
        justify-start
        items-center
        z-0
        md:-mt-16
        pt-16
      `)}
      {...rest}
    />
  )
}

Page.propTypes = {
  className: PropTypes.string
}

export default Page
