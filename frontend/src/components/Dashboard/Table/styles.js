import styled from 'styled-components'
import { v } from '../../../assets/styles/variables'

export const STableContainer = styled.div`
	margin-top: ${v.mdSpacing};
	flex-grow: 1;
	overflow-y: auto;
`

export const STable = styled.table`
	width: 100%;
	max-height: 100px;
`

export const STHead = styled.thead`
	text-align: left;
	color: ${({ theme }) => theme.text};
	font-weight: 500;
	font-size: 14px;
`

export const STh = styled.th`
	padding: 0 ${v.smSpacing} ${v.mdSpacing};
`

export const STBody = styled.tbody`
	color: ${({ theme }) => theme.sub_text};
	font-size: 14px;
`

export const STr = styled.tr`
	border-bottom: 1px solid ${({ theme }) => theme.disable_text};
`

export const STd = styled.td`
	padding: ${v.mdSpacing} ${v.smSpacing};
`
