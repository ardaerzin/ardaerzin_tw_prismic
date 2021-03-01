import { Formik } from 'formik'
import { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import FormLabel from './FormLabel'

const FormBase = ({ className, children, ...rest }) => {
  return (
    <Formik
      {...rest}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
        /* and other goodies */
      }) => (
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
                        onChange: handleChange,
                        onBlur: handleBlur,
                        value: values[child.props.name],
                        hasError: errors[child.props.name] && touched[child.props.name]
                      })
                    }
                    {(errors[child.props.name] && touched[child.props.name]) && (
                      <span className='font-display text-xs bg-red-500 text-gray-50 p-2'>
                        {errors[child.props.name]}
                      </span>
                    )}
                  </div>
                )
              }
            })
          }
        </form>
      )}
    </Formik>
  )
}

FormBase.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

export default FormBase
