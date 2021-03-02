import { getRegex } from 'lib/regex'
import { useState } from 'react'

export const useForm = (options) => {
  const [data, setData] = useState({
    values: options?.initialValues || {},
    errors: {},
    touched: {},
    isValid: false
  })

  const validateKey = (key, value) => {
    const validation = options?.validations?.[key]
    if (!validation) return
    // console.log('validate this key please', key)
    let valid = true
    let newError
    if (validation?.required?.value && !value) {
      valid = false
      newError = validation?.required?.message
    }

    const pattern = validation?.pattern
    if (pattern?.value && !getRegex(pattern.value).test(value)) {
      valid = false
      newError = pattern.message
    }

    const custom = validation?.custom
    if (custom?.isValid && !custom.isValid(value)) {
      valid = false
      newError = custom.message
    }

    if (valid) return
    return { error: newError, valid }
  }

  const handleChange = (key, sanitizeFn) => (
    e
  ) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value
    let err
    if (data.touched[key]) {
      err = validateKey(key, value)
    }
    setData({
      values: {
        ...data.values,
        [key]: value
      },
      errors: {
        ...data.errors,
        [key]: err?.error
      },
      isValid: data.isValid || err?.valid,
      touched: data.touched
    })
  }

  const handleFocus = (key) => (
    e
  ) => {
    // console.log('handle focus')
  }

  const handleBlur = (key, sanitizeFn) => (
    e
  ) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value
    const err = validateKey(key, value)
    setData({
      values: data.values,
      errors: {
        ...data.errors,
        [key]: err?.error
      },
      isValid: data.isValid || err?.valid,
      touched: {
        ...data.touched,
        [key]: true
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (options?.onSubmit) {
      options.onSubmit()
    }
  }

  return {
    data: data.values,
    touched: data.touched,
    errors: data.errors,
    handleChange,
    handleSubmit,
    handleFocus,
    handleBlur
  }
}
