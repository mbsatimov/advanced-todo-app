import styled from 'styled-components'
import { v } from '../../assets/styles/variables'

export const STodoWrapper = styled.div`
	position: relative;
	display: flex;
	max-width: 1080px;
	margin: 0 auto;
	height: 100%;
	justify-content: center;
	gap: ${v.xlSpacing};
`

export const STodoCategories = styled.ul`
	display: flex;
	gap: ${v.smSpacing};
	flex-wrap: wrap;
`

export const SInput = styled.input`
	flex-grow: 1;
	font-size: 16px;
	padding: ${v.smSpacing} ${v.mdSpacing};
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 12px;
	transition: ${v.tran2};
	&:focus {
		border: 1px solid ${({ theme }) => theme.primary};
	}
	&:hover {
		border: 1px solid ${({ theme }) => theme.primary};
	}
`
