import './assets/styles/globalStyle.js'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './assets/styles/theme'
import { GlobalStyle } from './assets/styles/globalStyle.js'
import Layout from './components/Layout/Layout'
import Switches from './Switches.js'
import { Flip, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ThemeContext = React.createContext(null)

const App = () => {
	const [theme, setTheme] = useState('dark')
	const themeStyle = theme === 'light' ? lightTheme : darkTheme

	return (
		<ThemeContext.Provider value={{ setTheme, theme }}>
			<ThemeProvider theme={themeStyle}>
				<GlobalStyle />
				<Layout>
					<Switches />
				</Layout>
				<ToastContainer
					position='top-right'
					autoClose={3000}
					limit={5}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					theme={theme === 'light' ? 'light' : 'dark'}
					transition={Flip}
				/>
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}

export default App
