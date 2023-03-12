
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


const FormForTask = ({ addToDoNewTask }) => {
  const [inputValue, setinputValue] = useState('')

  const handleSumbit = (e) => {
    e.preventDefault();

    if(!inputValue) return

    addToDoNewTask(inputValue)
    setinputValue('')

  }


  return (
      <Form onSubmit={handleSumbit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>New Task</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter new task"
                value={inputValue}
                onChange={(event) => setinputValue(event.target.value)}
                />
              
          </Form.Group>
      </Form>
  )
}

export default FormForTask