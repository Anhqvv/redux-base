import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'

const FormAddNew = () => {
  return (
    <>
      <Form>
        <Form.Group className='mb-3 '>
          <Form.Label>Email address:</Form.Label>
          <Form.Control type='email' placeholder='Please enter your email...' />
        </Form.Group>
        <Form.Group className='mb-3 '>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type='password'
            placeholder='Please enter your password...'
          />
        </Form.Group>
        <Form.Group className='mb-3 '>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Please enter your username...'
          />
        </Form.Group>
        <Button>Create</Button>
      </Form>
    </>
  )
}

export default FormAddNew
