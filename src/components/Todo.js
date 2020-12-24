import { Button, Col, Divider, Input, List, notification, Row } from 'antd'
import { useState } from 'react'
import _ from 'lodash'
import { Progress } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import TodoItem from './TodoItem'

function Todo() {
  const [todoList, setTodoList] = useState([])
  const [inputField, setInputField] = useState('')
  const [percent, setPercent] = useState(0)

  const onClickAdd = () => {
    if (inputField === '') {
      notification.info({ message: 'Please kindly input your task (◕‿◕✿)' })
    } else if (todoList.length >= 5) {
      notification.info({
        message: '(人◕ω◕) 5 Tasks A Day Is Enough, Rest Some Too.(◕‿◕✿)',
      })
    } else {
      const newTodoList = [...todoList]
      newTodoList.push({
        id: _.uniqueId(),
        task: inputField,
        isComplete: false,
      })
      setTodoList(newTodoList)
    }

    setInputField('')
    // setTodoList([...todoList, { id: __dirname.uniqueId(), task: inputField }]);
  }

  const onComplete = (todo) => {
    const newPercent = percent + 20
    setPercent(newPercent)

    todo.isComplete = true
  }

  return (
    <>
      <Row justify="center">
        <List
          style={{ width: '450px' }}
          header="To Do Task"
          footer="Five Amazing Things A Day"
          bordered
          dataSource={todoList}
          renderItem={(todo) => (
            <List.Item>
              <TodoItem todo={todo} onComplete={onComplete} />
            </List.Item>
          )}
        ></List>
      </Row>
      <Divider />
      <Row justify="center">
        <Col>
          <Input
            value={inputField}
            onChange={(e) => setInputField(e.target.value)}
          />
        </Col>
        <Col>
          <Button onClick={onClickAdd}>Add</Button>
        </Col>
      </Row>
      <Divider />
      <Row justify="center">
        <Progress percent={percent} indicating style={{ width: '800px' }} />
      </Row>
    </>
  )
}

export default Todo
