import MyInput from 'Components/Common/Form/input'
import Button from 'Components/Common/Button'
import FormBase from 'Components/Common/Form'

const validations = {
  email: {
    pattern: {
      value: '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i',
      message: 'please type in a valid email address'
    }
  },
  message: {
    pattern: {
      value: "/^[a-zA-Z0-9\'!@#$%^&*.;\" ]{3,}$/g",
      message: 'your message is not long enough'
    }
  },
  fName: {
    pattern: {
      value: "/^[a-zA-Z0-9\']{3,}$/g",
      message: 'invalid name'
    }
  },
  lName: {
    pattern: {
      value: "/^[a-zA-Z0-9\']{3,}$/g",
      message: 'invalid name'
    }
  }
}

const ContactForm = props => {
  return (
    <FormBase
      initialValues={{ fName: '', lName: '', email: '', message: '' }}
      validations={validations}
      onSubmit={() => alert('User submitted!')}
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
      <Button type='submit' disabled>
        <span className='text-sm font-display'>
          send message
        </span>
      </Button>
    </FormBase>
  )
}

export default ContactForm
