import { useEffect, useState } from 'react'
import { CreatedDate, SCategoryMenu, STodoDetails, STodoDetailsDate, STodoDetailsInput, STodoListTitle, UpdatedDate } from './styles'
import { toast } from 'react-toastify'
import TextArea from '../../UI/TextArea/TextArea'
import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import { SCategoryButton, SPrimaryButton } from '../../UI/Button/styles'
import TodoDetailsPlaceholder from './TodoDetailsPlaceholder'

const notify = () => {
	toast('Todo updated')
}

const TodoDetails = () => {
	const { todoCategories, selectedTodo, setSelectedTodo, stompClient, todos } = useContext(TodoContext)
	const [updatedText, setUpdatedText] = useState('')
	const [updatedNotes, setUpdatedNotes] = useState('')
	const [updatedCategoryId, setUpdatedCategoryId] = useState(0)

	const textChangeHandler = event => {
		setUpdatedText(event.target.value)
	}

	const notesChangeHandler = event => {
		setUpdatedNotes(event.target.value)
	}

	const categoryClickHandler = id => {
		if (updatedCategoryId === id) {
			setUpdatedCategoryId(0)
		} else {
			setUpdatedCategoryId(id)
		}
	}

	const findCategoryNameById = categoryId => {
		const category = todoCategories?.find(category => category.id === categoryId)
		return category ? category.name : ''
	}

	const submitHandler = event => {
		event.preventDefault()
		if (updatedText !== selectedTodo.text || updatedNotes !== selectedTodo.notes || updatedCategoryId !== selectedTodo.categoryId) {
			stompClient.send(
				`/app/update`,
				{},
				JSON.stringify({
					id: selectedTodo.id,
					text: updatedText,
					notes: updatedNotes,
					categoryId: updatedCategoryId,
				})
			)
			notify()
		}
	}

	const findTodoById = todoId => {
		return todos?.find(todo => todo.id === todoId)
	}

	useEffect(() => {
		if (todos && (selectedTodo === null || findTodoById(selectedTodo?.id) === undefined)) {
			setSelectedTodo(todos[0])
		}
	})

	useEffect(() => {
		if (selectedTodo) {
			setUpdatedText(selectedTodo.text)
			setUpdatedNotes(selectedTodo.notes)
			setUpdatedCategoryId(selectedTodo.categoryId)
		}
	}, [selectedTodo])

	if (todos?.length === 0) {
		return (
			<STodoDetails>
				<h1>Add new todos to track your daily tasks</h1>
			</STodoDetails>
		)
	}

	if (!selectedTodo) {
		return <TodoDetailsPlaceholder />
	}

	return (
		<STodoDetails>
			<STodoListTitle>{findCategoryNameById(updatedCategoryId)} Todo</STodoListTitle>
			<form onSubmit={submitHandler}>
				<STodoDetailsInput
					disabled={selectedTodo.isDone}
					placeholder='Rename todo...'
					type='text'
					value={updatedText}
					onChange={textChangeHandler}
					required
				/>
				<SCategoryMenu>
					{Array.isArray(todoCategories) &&
						todoCategories.map(category => (
							<SCategoryButton
								key={category.id}
								onClick={() => categoryClickHandler(category.id)}
								selected={updatedCategoryId === category.id ? 'selected' : ''}
								type='button'>
								{category.name}
							</SCategoryButton>
						))}
				</SCategoryMenu>
				<label>Notes</label>
				<TextArea
					disabled={selectedTodo.isDone}
					style={{ margin: '16px 0' }}
					value={updatedNotes}
					placeholder='Insert your notes here...'
					onChange={notesChangeHandler}
				/>
				<SPrimaryButton
					style={{ marginLeft: '16px' }}
					onClick={submitHandler}>
					Save Changes
				</SPrimaryButton>
			</form>

			<STodoDetailsDate>
				<CreatedDate>
					Created on {selectedTodo.createdDate} at {selectedTodo.createdTime}
				</CreatedDate>
				{selectedTodo.updatedDate && (
					<UpdatedDate>
						Updated on {selectedTodo.updatedDate} at {selectedTodo.updatedTime}
					</UpdatedDate>
				)}
			</STodoDetailsDate>
		</STodoDetails>
	)
}

export default TodoDetails
