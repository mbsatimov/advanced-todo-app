import styled from 'styled-components'
import { v } from '../../../assets/styles/variables'

export const SButton = styled.button`
	display: flex;
	align-items: center;
	text-transform: uppercase;
	padding: ${v.smSpacing} ${v.mdSpacing};
	border-radius: ${v.borderRadius};
	color: ${({ theme }) => theme.text};
`

export const SPrimaryButton = styled(SButton)`
	color: ${({ theme }) => theme.light_text};
	background: ${({ theme }) => theme.primary};
`

export const SSecondaryButton = styled(SButton)`
	background: ${({ theme }) => theme.secondary};
`

export const SCategoryButton = styled.button`
	font-size: 12px;
	padding: 3px ${v.smSpacing};
	border-radius: ${v.borderRadius};
	transition: ${v.tran2};
	background: ${({ selected }) => (selected === 'selected' ? ({ theme }) => theme.primary : ({ theme }) => theme.secondary)};
	color: ${({ selected }) => (selected === 'selected' ? ({ theme }) => theme.light_text : ({ theme }) => theme.text)};
	${({ loading }) =>
		loading === 'true'
			? {
					width: '65px',
					height: '24px',
					animation: 'color-change 2s infinite',
			  }
			: {}};
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
