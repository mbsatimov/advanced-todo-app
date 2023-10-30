import TodoForm from './NewTodo/TodoForm'
import TodoFilter from './TodoFilter/TodoFilter'
import TodoList from './TodoList/TodoList'
import { STodosContainer } from './styles'

const Todos = () => {
	return (
		<STodosContainer>
			<TodoFilter />
			<TodoList />
			<TodoForm />
		</STodosContainer>
	)
}

export default Todos
