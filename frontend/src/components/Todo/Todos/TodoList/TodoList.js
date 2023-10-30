import { useContext } from 'react'
import TodoItem from './TodoItem'
import { SLoaderContainer, SLoaderRadio, SLoaderText, STodoListContainer, STodoListEmpty } from './styles'
import { TodoContext } from '../../TodoContext'

const loadings = [
	{
		textWidth: '75%',
	},
	{
		textWidth: '50%',
	},
	{
		textWidth: '65%',
	},
	{
		textWidth: '75%',
	},
	{
		textWidth: '50%',
	},
	{
		textWidth: '65%',
	},
]

const Todos = () => {
	const { filteredTodos, stompClient } = useContext(TodoContext)
	if (!filteredTodos) {
		return (
			<STodoListContainer>
				{loadings.map((loading, index) => (
					<SLoaderContainer key={index}>
						<SLoaderRadio></SLoaderRadio>
						<SLoaderText style={{ width: loading.textWidth }}></SLoaderText>
					</SLoaderContainer>
				))}
			</STodoListContainer>
		)
	}

	const unmarkedTodos = filteredTodos.filter(todo => {
		return todo.isDone === false
	})

	const markedTodos = filteredTodos.filter(todo => {
		return todo.isDone === true
	})

	if (filteredTodos.length === 0)
		return (
			<STodoListContainer>
				<STodoListEmpty>Not found any todo! Add new todos to track your daily tasks</STodoListEmpty>
			</STodoListContainer>
		)

	return (
		<STodoListContainer>
			{unmarkedTodos.map(todo => (
				<TodoItem
					stompClient={stompClient}
					key={todo.id}
					todo={todo}
				/>
			))}
			{markedTodos.map(todo => (
				<TodoItem
					stompClient={stompClient}
					key={todo.id}
					todo={todo}
				/>
			))}
		</STodoListContainer>
	)
}

export default Todos
