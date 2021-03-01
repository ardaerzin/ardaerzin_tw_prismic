import classnames from 'classnames/dedupe'
import PropTypes from 'prop-types'

const Page = ({ className, type = 'flex', ...rest }) => {
  return (
    <div
      className={classnames(`
        relative
        w-full
        mx-auto
        sm:container
        min-h-screen
        px-6 md:px-4 lg:px-10
        pb-6
        justify-start
        items-center
        z-0
        md:-mt-16
        pt-16
      `, {
        'flex flex-col sm:container': type === 'flex',
        grid: type === 'grid'
      }, className)}
      {...rest}
    />
  )
}

Page.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string
}

export default Page
