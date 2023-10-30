import { IoRadioButtonOff, IoRadioButtonOnOutline } from 'react-icons/io5'
import { SDeleteBtn, SRadioButton, STodoItemContainer, STodoText } from './styles'
import React, { useContext, useEffect } from 'react'
import { TodoContext } from '../../TodoContext'
import { BiTrashAlt } from 'react-icons/bi'
import { toast } from 'react-toastify'

const notify = () => {
	toast('Todo deleted')
}

const Todo = props => {
	const { todo, stompClient } = props
	const { selectedTodo, setSelectedTodo, todoCategories } = useContext(TodoContext)
	const markAsDone = () => {
		stompClient.send(`/app/mark-todo`, {}, todo.id)
	}

	const deleteTodoHandler = () => {
		stompClient.send(`/app/delete`, {}, todo.id)
		notify()
	}

	const findCategoryNameById = categoryId => {
		if (!todoCategories) return ''
		const category = todoCategories.find(category => category.id === categoryId)
		return category ? category.name : ''
	}

	useEffect(() => {
		if (selectedTodo.id === todo.id) {
			setSelectedTodo(todo)
		}
	}, [selectedTodo, setSelectedTodo, todo])

	return (
		<STodoItemContainer
			selected={selectedTodo?.id === todo.id ? 'selected' : ''}
			onClick={() => setSelectedTodo(todo)}>
			<SRadioButton onClick={markAsDone}>
				{todo.isDone && <IoRadioButtonOnOutline />}
				<IoRadioButtonOff />
			</SRadioButton>
			<STodoText marked={todo.isDone ? 'marked' : ''}>
				<div>{todo.text}</div>
				<span>{findCategoryNameById(todo.categoryId)}</span>
			</STodoText>
			{todo.isDone && (
				<SDeleteBtn onClick={deleteTodoHandler}>
					<BiTrashAlt />
				</SDeleteBtn>
			)}
		</STodoItemContainer>
	)
}

export default Todo
