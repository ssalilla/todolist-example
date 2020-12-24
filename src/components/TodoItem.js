import { Button, Col, Input, Row } from 'antd'
import { useState } from 'react'

function TodoItem(props) {
  const [changeInput, setChangeInput] = useState('')
  const [isEdit, setIsEdit] = useState(false)

  const toggleEdit = () => {
    setChangeInput(props.todo.task)
    setIsEdit(true)
  }

  const updateTodoItem = (todo) => {
    todo.task = changeInput
    setIsEdit(false)
  }

  let contents = (
    <Row style={{ width: '100%' }}>
      <Col span={20}>
        <Row justify="start">
          <Input
            value={changeInput}
            onChange={(e) => {
              setChangeInput(e.target.value)
            }}
          />
        </Row>
      </Col>
      <Col span={4}>
        <Button
          style={{ width: '100%' }}
          type="primary"
          onClick={() => {
            updateTodoItem(props.todo)
          }}
        >
          Done
        </Button>
      </Col>
    </Row>
  )

  if (!isEdit) {
    contents = (
      <Row style={{ width: '100%' }}>
        <Col span={16}>
          <Row justify="start">{props.todo.task}</Row>
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            style={{ backgroundColor: 'orange', borderColor: 'orange' }}
            onClick={() => toggleEdit()}
          >
            Edit
          </Button>
        </Col>
        <Col span={4}>
          <Button
            disabled={props.todo.isComplete}
            type="primary"
            onClick={() => props.onComplete(props.todo)}
          >
            Complete
          </Button>
        </Col>
      </Row>
    )
  }

  return <>{contents}</>
}

export default TodoItem
