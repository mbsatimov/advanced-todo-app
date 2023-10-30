import { useContext, useState } from 'react'
import { HiOutlinePlus } from 'react-icons/hi'
import { SCategoryMenu, SDetailsBtn, SDetailsMenu, SFormDetails, SFormInput, SFormInputContainer, SNewTodo, SNewTodoContainer, SNewTodoForm, SSubmitFormBtn } from './styles'
import { TodoContext } from '../../TodoContext'
import TextArea from '../../../UI/TextArea/TextArea'
import { SCategoryButton } from '../../../UI/Button/styles'
import { toast } from 'react-toastify'

const notify = () => {
	toast('Todo Created')
}

const TodoForm = () => {
	const { stompClient, todoCategories } = useContext(TodoContext)
	const [text, setText] = useState('')
	const [notes, setNotes] = useState('')
	const [showNotes, setShowNotes] = useState(false)
	const [categoryId, setCategoryId] = useState(0)

	const categoryClickHandler = id => {
		if (categoryId === id) {
			setCategoryId(0)
		} else {
			setCategoryId(id)
		}
	}

	const findCategoryNameById = categoryId => {
		const category = todoCategories.find(category => category.id === categoryId)
		return category ? category.name : ''
	}

	const submitHandler = event => {
		event.preventDefault()
		const todoData = {
			text: text,
			notes: notes,
			categoryId: categoryId,
		}
		stompClient.send('/app/create', {}, JSON.stringify(todoData))
		setShowNotes(false)
		setNotes('')
		setText('')
		setCategoryId(0)
		notify()
	}

	return (
		<SNewTodoContainer>
			<SNewTodoForm onSubmit={submitHandler}>
				<SFormDetails visible={showNotes ? 'true' : 'false'}>
					<SCategoryMenu>
						{Array.isArray(todoCategories) &&
							todoCategories.map(category => (
								<SCategoryButton
									key={category.id}
									type='button'
									selected={categoryId === category.id ? 'selected' : ''}
									onClick={() => categoryClickHandler(category.id)}>
									{category.name}
								</SCategoryButton>
							))}
					</SCategoryMenu>
					<TextArea
						type='text'
						placeholder='Add notes...'
						value={notes}
						onChange={event => setNotes(event.target.value)}
					/>
				</SFormDetails>
				<SNewTodo>
					<SDetailsMenu>
						<SDetailsBtn
							type='button'
							onClick={() => setShowNotes(!showNotes)}>
							<HiOutlinePlus />
							add details
						</SDetailsBtn>
						<span>{Array.isArray(todoCategories) && findCategoryNameById(categoryId)}</span>
					</SDetailsMenu>
					<SFormInputContainer>
						<SFormInput
							type='text'
							placeholder='New todo...'
							value={text}
							onChange={event => setText(event.target.value)}
							required
						/>
						<SSubmitFormBtn>
							<HiOutlinePlus type='submit' />
						</SSubmitFormBtn>
					</SFormInputContainer>
				</SNewTodo>
			</SNewTodoForm>
		</SNewTodoContainer>
	)
}

export default TodoForm
