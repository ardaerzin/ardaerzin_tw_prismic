import PropTypes from 'prop-types'

const FormLabel = ({ id, ...rest }) => {
  return (
    <label
      htmlFor={id}
      className='font-display text-sm tracking-tight'
      {...rest}
    />
  )
}

FormLabel.propTypes = {
  id: PropTypes.string
}

export default FormLabel
