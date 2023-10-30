import { useEffect, useState } from 'react'
import { STodoWrapper } from './styles'
import SockJS from 'sockjs-client'
import { over } from 'stompjs'

import TodoDetails from './TodoDetails/TodoDetails'
import Todos from './Todos/Todos'
import { TodoContext } from './TodoContext'

const Todo = () => {
	const [todos, setTodos] = useState(null)
	const [filteredTodos, setFilteredTodos] = useState(null)
	const [todoCategories, setTodoCategories] = useState(null)
	const [stompClient, setStompClient] = useState(null)
	const [selectedTodo, setSelectedTodo] = useState(null)

	useEffect(() => {
		const socket = new SockJS('http://localhost:8080/ws')
		const client = over(socket)

		client.connect({}, () => {
			client.subscribe('/topic/todos', message => {
				const receivedMessage = JSON.parse(message.body)
				const sortedTodos = receivedMessage.sort((a, b) => b.id - a.id)
				setTodos(sortedTodos)
			})
			client.subscribe('/topic/todo-categories', message => {
				const receivedMessage = JSON.parse(message.body)
				setTodoCategories(receivedMessage)
			})
			client.send('/app/get-todos', {}, '')
			client.send('/app/get-todo-categories', {}, '')
		})

		setStompClient(client)
		return () => {
			client.disconnect()
		}
	}, [])

	const value = {
		todos,
		setTodos,
		filteredTodos,
		setFilteredTodos,
		todoCategories,
		stompClient,
		selectedTodo,
		setSelectedTodo,
	}
	return (
		<STodoWrapper>
			<TodoContext.Provider value={value}>
				<Todos />
				<TodoDetails />
			</TodoContext.Provider>
		</STodoWrapper>
	)
}

export default Todo
