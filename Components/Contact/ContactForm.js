import MyInput from 'Components/Common/Form/input'
import Button from 'Components/Common/Button'
import FormBase from 'Components/Common/Form'

const ContactForm = props => {
  return (
    <FormBase
      initialValues={{ fName: '', lName: '', email: '', message: '' }}
      onSubmit={(values, { setSubmitting }) => {
        // add submit action here
      }}
      validate={values => {
        const errors = {}
        if (!values.email) {
          errors.email = 'Required'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address'
        }

        if (!values.fName) {
          errors.fName = 'Required'
        }
        if (!values.lName) {
          errors.lName = 'Required'
        }
        if (!values.message) {
          errors.message = 'Required'
        }
        return errors
      }}
    >
      <MyInput
        id='fName'
        type='text'
        name='fName'
        label='first name'
        placeholder='your first name'
      />
      <MyInput
        id='lName'
        type='text'
        name='lName'
        label='last name'
        placeholder='your last name'
      />
      <MyInput
        id='email'
        type='email'
        name='email'
        label='email'
        placeholder='your email address'
      />
      <MyInput
        variant='textarea'
        id='message'
        name='message'
        label='your message'
        placeholder='why do you want to contact me?'
      />
      <Button type='submit'>
        <span className='text-sm font-display'>
          send message
        </span>
      </Button>
    </FormBase>
  )
}

export default ContactForm
