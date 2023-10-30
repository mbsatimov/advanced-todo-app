import styled from 'styled-components'
import { v } from '../../../assets/styles/variables'
import { STextArea } from '../../UI/TextArea/styles'
import { STodoCategories } from '../styles'
import { SPrimaryButton } from '../../UI/Button/styles'

export const STodoDetails = styled.div`
	flex: 1;
	padding: ${v.mdSpacing} ${v.smSpacing};
	display: flex;
	flex-direction: column;
	border-radius: ${v.borderRadius2};
	background-color: ${({ theme }) => theme.bg};
	transition: ${v.tran4};
	box-shadow: ${v.boxShadow};
	overflow-y: auto;
	label {
		text-transform: uppercase;
		display: block;
		font-size: 14px;
		color: ${({ theme }) => theme.sub_text};
		margin-left: ${v.mdSpacing};
	}
`

export const STodoListTitle = styled.h1`
	margin-left: ${v.mdSpacing};
	font-size: 14px;
	color: ${({ theme }) => theme.sub_text};
`

export const STodoDetailsInput = styled.input`
	width: 100%;
	font-size: 18px;
	font-weight: 500;
	padding: ${v.smSpacing} ${v.mdSpacing};
	margin: ${v.mdSpacing} 0;
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 12px;
	color: ${({ theme }) => theme.text};
	transition: ${v.tran2};
	&:hover,
	&:focus {
		border: 1px solid ${({ theme }) => theme.primary};
	}
	${({ disabled }) =>
		disabled
			? {
					'&:hover': {
						border: '1px solid rgba(0, 0, 0, 0)',
					},
			  }
			: {}}
`

export const SCategoryMenu = styled(STodoCategories)`
	margin: 0 ${v.mdSpacing} ${v.xxlSpacing} ${v.mdSpacing};
`

export const STodoDetailsNotes = styled(STextArea)`
	margin: ${v.mdSpacing} 0;
`

export const STodoDetailsDate = styled.div`
	margin: auto 0 0 ${v.mdSpacing};
	color: ${({ theme }) => theme.sub_text};
	font-size: 14px;
	line-height: 18px;
`

export const STodoListTitleLoading = styled.div`
	width: 25%;
	height: 10px;
	margin: 0 ${v.mdSpacing};
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

export const STodoDetailsInputLoading = styled.div`
	width: 70%;
	margin: ${v.lgSpacing} ${v.mdSpacing};
	height: 18px;
	animation: color-change 2s infinite;
`

export const STextAreaLoading = styled.div`
	margin: ${v.lgSpacing} 0;
	div {
		width: 75%;
		margin: ${v.mdSpacing};
		height: 12px;
		animation: color-change 2s infinite;
	}
`

export const SPrimaryButtonLoading = styled(SPrimaryButton)`
	margin-left: ${v.mdSpacing};
	width: 130px;
	span {
		display: inline-block;
		border: 4px solid ${({ theme }) => theme.bg};
		border-top: 4px solid rgba(0, 0, 0, 0);
		border-radius: 50%;
		width: 25px;
		height: 25px;
		animation: spin 1s linear infinite;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`

export const STodoDetailsDateLoading = styled.div`
	margin-top: auto;
	div {
		width: 60%;
		margin: ${v.mdSpacing} 0 0 ${v.mdSpacing};
		height: 10px;
		background: ${({ theme }) => theme.secondary};
		animation: color-change 2s infinite;
	}
`

export const CreatedDate = styled.div``
export const UpdatedDate = styled.div``
