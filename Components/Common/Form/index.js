import { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import FormLabel from './FormLabel'
import { useForm } from './useForm'

const FormBase = ({ className, children, validations, initialValues, onSubmit, ...rest }) => {
  const { handleSubmit, handleChange, handleFocus, handleBlur, data, errors } = useForm({ validations, initialValues, onSubmit })
  return (
    <form
      onSubmit={handleSubmit}
      className='
        flex flex-col flex-grow w-full
        space-y-3
      '
    >
      {
        Children.map((children), (child, index) => {
          if (child) {
            return (
              <div className='flex flex-col flex-grow w-full'>
                {
                  child.props.label && (
                    <FormLabel {...(child.props.labelProps || {})}>
                      {child.props.label}
                    </FormLabel>
                  )
                }
                {
                  cloneElement(child, {
                    onChange: handleChange(child.props.name),
                    onFocus: handleFocus(child.props.name),
                    onBlur: handleBlur(child.props.name),
                    value: data[child.props.name],
                    hasError: data.errors?.[child.props.name]
                  })
                }
                {errors?.[child.props.name] && (
                  <span className='font-display text-xs bg-red-500 text-gray-50 p-2'>
                    {errors?.[child.props.name]}
                  </span>
                )}
              </div>
            )
          }
        })
      }
    </form>
  )
}

FormBase.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

export default FormBase
