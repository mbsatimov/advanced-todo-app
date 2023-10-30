import { SFilterContainer, SSearchBtn, SSearchContainer, SSearchInput, SCategoryMenu } from './styles'
import { BiSearch } from 'react-icons/bi'
import { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../../TodoContext'
import { SCategoryButton } from '../../../UI/Button/styles'

const TodoFilter = () => {
	const { todoCategories, todos, setFilteredTodos } = useContext(TodoContext)
	const [text, setText] = useState('')
	const [categoryId, setCategoryId] = useState(0)

	const categoryClickHandler = id => {
		if (categoryId === id) {
			setCategoryId(0)
		} else {
			setCategoryId(id)
		}
	}

	useEffect(() => {
		if (!todos) return
		const filteredTodo = todos.filter(todo => todo.text.toLowerCase().includes(text.toLowerCase()) && (todo.categoryId === categoryId || categoryId === 0))
		setFilteredTodos(filteredTodo)
	}, [todos, text, categoryId, setFilteredTodos])

	return (
		<>
			<SFilterContainer>
				<SSearchContainer>
					<SSearchInput
						type='text'
						placeholder='Search...'
						value={text}
						onChange={event => setText(event.target.value)}
					/>
					<SSearchBtn>
						<BiSearch />
					</SSearchBtn>
				</SSearchContainer>
			</SFilterContainer>
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
				{!todoCategories && (
					<>
						<SCategoryButton loading='true'></SCategoryButton>
						<SCategoryButton loading='true'></SCategoryButton>
						<SCategoryButton loading='true'></SCategoryButton>
					</>
				)}
			</SCategoryMenu>
		</>
	)
}

export default TodoFilter
