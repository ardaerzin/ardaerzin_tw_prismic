import classnames from 'classnames/dedupe'
import PropTypes from 'prop-types'

const Page = ({ className, type = 'flex', ...rest }) => {
  return (
    <div
      className={classnames(`
        relative
        w-full
        mx-auto
        min-h-screen
        px-6 md:px-4
        pb-8 md:pb-24
        justify-start
        items-center
        z-0
        md:-mt-16
        pt-16
        max-w-full md:max-w-screen-lg
      `, {
        'flex flex-col': type === 'flex',
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
