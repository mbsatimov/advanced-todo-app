import styled from 'styled-components'
import { v } from '../../../../assets/styles/variables'
import { SButton } from '../../../UI/Button/styles'

export const STodoListContainer = styled.ul`
	display: flex;
	flex-direction: column;
	gap: ${v.smSpacing};
	padding: ${v.smSpacing};
	border-radius: ${v.borderRadius2};
	color: ${({ theme }) => theme.text};
	background-color: ${({ theme }) => theme.bg};
	transition: ${v.tran4};
	box-shadow: ${v.boxShadow};
	overflow-y: auto;
`

export const SLoaderContainer = styled.div`
	display: flex;
	align-items: center;
	padding: ${v.smSpacing};
	gap: ${v.mdSpacing};
`

export const SLoaderText = styled.p`
	height: 12px;
	background: ${({ theme }) => theme.secondary};
	animation: color-change 2s infinite;
	@keyframes color-change {
		0% {
			background: ${({ theme }) => theme.secondary};
		}
		50% {
			background: ${({ theme }) => theme.bg2};
		}
		100% {
			background: ${({ theme }) => theme.secondary};
		}
	}
`

export const SLoaderRadio = styled.div`
	height: 18px;
	width: 18px;
	background: ${({ theme }) => theme.secondary};
	border-radius: 50%;
	animation: color-change 2s infinite;
	@keyframes color-change {
		0% {
			background: ${({ theme }) => theme.secondary};
		}
		50% {
			background: ${({ theme }) => theme.bg2};
		}
		100% {
			background: ${({ theme }) => theme.secondary};
		}
	}
`
export const STodoListEmpty = styled.div`
	padding: ${v.smSpacing};
	font-size: 16px;
	font-weight: 500;
	line-height: 25px;
`

export const STodoItemContainer = styled.li`
	display: flex;
	align-items: center;
	gap: 16px;
	padding: ${v.smSpacing};
	border-radius: 6px;
	cursor: pointer;
	transition: ${v.tran4};
	background: ${({ selected }) => (selected === 'selected' ? ({ theme }) => theme.secondary : 'none')};
	&:hover {
		background-color: ${({ theme }) => theme.secondary};
	}
`

export const SRadioButton = styled.button`
	position: relative;
	min-width: 20px;
	height: 20px;
	padding: 0;
	background: none;
	cursor: pointer;
	svg {
		position: absolute;
		left: 0;
		top: 0;
		font-size: 20px;
		color: ${({ theme }) => theme.text};
		transition: ${v.tran4};
	}
`

export const STodoText = styled.div`
	flex-grow: 1;
	div {
		position: relative;
		font-size: 16px;
		font-weight: 500;
		color: ${({ theme }) => theme.text};
		${({ marked }) => (marked === 'marked' ? { color: 'rgba(100, 100, 100, 0.5)' } : {})}
		&::before {
			content: '';
			${({ marked }) =>
				marked === 'marked'
					? {
							content: '',
							position: 'absolute',
							top: '50%',
							left: '-5px',
							right: '-5px',
							height: '1px',
							backgroundColor: 'rgba(100, 100, 100, 0.5)',
					  }
					: {}}
		}
	}
	span {
		margin-top: 2px;
		font-size: 12px;
		color: ${({ theme }) => theme.sub_text};
	}
`

export const SDeleteBtn = styled(SButton)`
	padding: 0;
	color: red;
	font-size: 18px;
`
