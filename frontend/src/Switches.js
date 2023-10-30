import TodoPage from './pages/TodoPage'
import { Routes, Route } from 'react-router-dom'
import SettingsPage from './pages/SettingsPage'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'

const Switches = () => {
	return (
		<Routes>
			<Route
				exact
				path='/'
				element={<HomePage />}
			/>
			<Route
				exact
				path='/todos'
				element={<TodoPage />}
			/>
			<Route
				exact
				path='/dashboard'
				element={<DashboardPage />}
			/>
			<Route
				exact
				path='/settings'
				element={<SettingsPage />}
			/>
		</Routes>
	)
}

export default Switches
