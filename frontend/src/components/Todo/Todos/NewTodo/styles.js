import styled from 'styled-components'
import { v } from '../../../../assets/styles/variables'
import { SButton } from '../../../UI/Button/styles'
import { SInput, STodoCategories } from '../../styles'

export const SNewTodoContainer = styled.div`
	margin-top: auto;
	position: relative;
`

export const SNewTodoForm = styled.form`
	width: 100%;
`

export const SFormDetails = styled.div`
	position: relative;
	bottom: 100%;
	z-index: 0;
	padding: ${v.smSpacing};
	background: ${({ theme }) => theme.bg};
	border-radius: ${v.borderRadius2};
	transition: ${v.tran4};
	margin-bottom: ${v.mdSpacing};
	${({ visible }) =>
		visible === 'true'
			? {}
			: {
					transform: 'translateY(100%)',
					visibility: 'hidden',
					opacity: 0,
					position: 'absolute',
					width: '100%',
			  }};
`

export const SCategoryMenu = styled(STodoCategories)`
	margin: ${v.smSpacing} ${v.mdSpacing} ${v.mdSpacing} ${v.mdSpacing};
`

export const SCategoriesBtn = styled(SButton)`
	transition: ${v.tran2};
	&:hover {
		color: ${({ theme }) => theme.primary};
	}
`

export const SDetailsBtn = styled(SButton)`
	transition: ${v.tran2};
	&:hover {
		color: ${({ theme }) => theme.primary};
	}
`

export const SNewTodo = styled.div`
	position: relative;
	z-index: 10;
	padding: ${v.smSpacing};
	border-radius: ${v.borderRadius2};
	background-color: ${({ theme }) => theme.bg};
	transition: ${v.tran4};
	box-shadow: ${v.boxShadow};
`

export const SDetailsMenu = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	span {
		font-size: 12px;
		color: ${({ theme }) => theme.primary};
		margin-right: ${v.mdSpacing};
	}
`

export const SFormInputContainer = styled.div`
	display: flex;
	align-items: center;
`

export const SFormInput = styled(SInput)``

export const SSubmitFormBtn = styled(SButton)`
	padding: ${v.smSpacing} ${v.mdSpacing};
	font-size: 24px;
	transition: ${v.tran2};
	cursor: pointer;
	&:hover {
		color: ${({ theme }) => theme.primary};
	}
`
