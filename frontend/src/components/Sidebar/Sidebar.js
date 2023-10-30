import { BiLogoMeta, BiSearch, BiHomeAlt, BiListUl, BiLineChart, BiCog, BiLogOut, BiMoon, BiChevronLeft } from 'react-icons/bi'
import { SHeader, SLink, SLinkContainer, SLinkLabel, SLogo, SMenuContainer, SSearch, SSidebar, STheme, SThemeToggler, STitle, SToggle, STogglerThumb } from './styles'
import { useContext, useState } from 'react'
import { ThemeContext } from './../../App'
import { useLocation } from 'react-router-dom'
import { SDivider } from '../UI/styles'

const linksArray = [
	{
		label: 'Home',
		icon: <BiHomeAlt />,
		to: '/',
	},
	{
		label: 'Todos',
		icon: <BiListUl />,
		to: '/todos',
	},
	{
		label: 'Dashboard',
		icon: <BiLineChart />,
		to: '/dashboard',
	},
	{
		label: 'Settings',
		icon: <BiCog />,
		to: '/settings',
	},
]

const Sidebar = () => {
	const { setTheme, theme } = useContext(ThemeContext)
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const { pathname } = useLocation()

	return (
		<SSidebar open={sidebarOpen}>
			<SHeader>
				<SLogo>
					<BiLogoMeta />
				</SLogo>
				<STitle open={sidebarOpen}>Todo App</STitle>
				<SToggle
					open={sidebarOpen}
					onClick={() => setSidebarOpen(prev => !prev)}>
					<BiChevronLeft />
				</SToggle>
			</SHeader>
			<SDivider />
			<SMenuContainer>
				<SSearch open={sidebarOpen}>
					<label
						onClick={() => setSidebarOpen(true)}
						htmlFor='search'>
						<BiSearch />
					</label>
					<input
						open={sidebarOpen}
						id='search'
						type='search'
						placeholder='Search...'
						autoComplete='off'
					/>
				</SSearch>
				<SLinkContainer>
					{linksArray.map(link => (
						<SLink
							key={link.label}
							active={pathname === link.to ? 'true' : 'false'}
							open={sidebarOpen}
							to={link.to}>
							{link.icon}
							<SLinkLabel open={sidebarOpen}>{link.label}</SLinkLabel>
						</SLink>
					))}
				</SLinkContainer>
			</SMenuContainer>
			<SDivider />
			<SLinkContainer>
				<SLink to={'/logout'}>
					<BiLogOut />
					<SLinkLabel open={sidebarOpen}>Logout</SLinkLabel>
				</SLink>
				<STheme>
					<BiMoon />
					<SLinkLabel open={sidebarOpen}>Dark Mode</SLinkLabel>
					<SThemeToggler onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}>
						<STogglerThumb style={theme === 'dark' ? { left: '21px' } : { left: '3px' }}></STogglerThumb>
					</SThemeToggler>
				</STheme>
			</SLinkContainer>
		</SSidebar>
	)
}

export default Sidebar
