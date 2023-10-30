import styled from 'styled-components'
import { v } from '../../../assets/styles/variables'

export const STextArea = styled.textarea`
	resize: none;
	overflow: auto;
	width: 100%;
	font-size: 16px;
	padding: ${v.smSpacing} ${v.mdSpacing};
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 12px;
	color: ${({ theme }) => theme.text};
	transition: ${v.tran2};
	&:focus,
	&:hover {
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
