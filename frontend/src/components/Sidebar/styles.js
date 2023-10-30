import styled from 'styled-components'
import { v } from '../../assets/styles/variables'
import { Link } from 'react-router-dom'

export const SSidebar = styled.div`
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	${({ open }) => (open ? { width: v.sidebarWidth } : { width: '84px' })};
	padding: ${v.mdSpacing};
	border-radius: ${v.borderRadius2};
	background: ${({ theme }) => theme.bg};
	transition: ${v.tran5};
	box-shadow: ${v.boxShadow};
`

export const SHeader = styled.header`
	position: relative;
	display: flex;
	align-items: center;
`

export const SLogo = styled.div`
	min-width: 40px;
	height: 40px;
	margin-right: ${v.mdSpacing};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: ${v.borderRadius};
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.light_text};
	svg {
		font-size: 30px;
	}
`

export const STitle = styled.span`
	font-size: 20px;
	font-weight: 600;
	white-space: nowrap;
	color: ${({ theme }) => theme.text};
	${({ open }) => (open ? {} : { visibility: 'hidden', opacity: 0 })};
	transition: ${v.tran4};
`
export const SToggle = styled.div`
	position: absolute;
	top: 50%;
	right: -28px;
	height: 25px;
	width: 25px;
	background: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.light_text};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	cursor: pointer;
	transition: ${v.tran5};
	transform: translateY(-50%) ${({ open }) => (!open ? 'rotate(180deg)' : '')};
	svg {
		font-size: 22px;
	}
`

export const SMenuContainer = styled.div`
	flex-grow: 1;
`

export const SSearch = styled.li`
	display: flex;
	margin-bottom: 10px;
	padding: ${v.mdSpacing};
	border-radius: ${v.borderRadius};
	list-style: none;
	background: ${({ theme }) => theme.secondary};
	color: ${({ theme }) => theme.text};
	transition: ${v.tran4};

	label {
		height: 20px;
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	svg {
		font-size: 20px;
	}
	input {
		margin-left: ${v.mdSpacing};
		width: 100%;
		border-radius: ${v.borderRadius};
		font-size: 14px;
		color: inherit;
	}
`

export const SLinkContainer = styled.ul`
	display: flex;
	flex-direction: column;
	gap: ${v.smSpacing};
	overflow: hidden;
`

export const SLink = styled(Link)`
	position: relative;
	border-radius: ${v.borderRadius};
	padding: ${v.mdSpacing};
	display: flex;
	align-items: center;
	transition: ${v.tran4};
	cursor: pointer;
	color: ${({ theme }) => theme.text};
	background: ${({ active }) => (active === 'true' ? ({ theme }) => theme.secondary : 'rgba(0, 0, 0, 0)')};
	svg {
		font-size: 20px;
		position: absolute;
		left: ${v.mdSpacing};
		top: 50%;
		transform: translateY(-50%);
	}
	&:hover {
		background: ${({ theme }) => theme.primary};
		color: ${({ theme }) => theme.light_text};
	}
`

export const SLinkLabel = styled.span`
	font-size: 16px;
	font-weight: 500;
	white-space: nowrap;
	margin-left: ${v.xlSpacing};
	transition: opacity 0.4s;
	${({ open }) => (open ? {} : { opacity: 0 })};
`

export const STheme = styled.li`
	position: relative;
	border-radius: ${v.borderRadius};
	display: flex;
	padding: ${v.mdSpacing};
	background-color: ${({ theme }) => theme.secondary};
	color: ${({ theme }) => theme.text};
	transition: ${v.tran4};
	svg {
		font-size: 20px;
		position: absolute;
		left: ${v.mdSpacing};
		top: 50%;
		transform: translateY(-50%);
	}
`

export const SThemeToggler = styled.button`
	position: absolute;
	height: 22px;
	width: 40px;
	right: 6px;
	top: 50%;
	transform: translateY(-50%);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 25px;
	background: ${({ theme }) => theme.text};
	cursor: pointer;
`

export const STogglerThumb = styled.div`
	position: absolute;
	height: 16px;
	width: 16px;
	left: 3px;
	top: 50%;
	transform: translateY(-50%);
	background: ${({ theme }) => theme.bg};
	transition: ${v.tran4};
	border-radius: 50%;
`
