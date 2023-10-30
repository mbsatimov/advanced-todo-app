import styled from 'styled-components'
import { SInput, STodoCategories } from '../../styles'
import { v } from '../../../../assets/styles/variables'
import { SButton } from '../../../UI/Button/styles'

export const SFilterContainer = styled.div`
	position: relative;
	z-index: 10;
	padding: ${v.smSpacing};
	border-radius: ${v.borderRadius2};
	background-color: ${({ theme }) => theme.bg};
	transition: ${v.tran4};
	box-shadow: ${v.boxShadow};
`

export const SSearchContainer = styled.div`
	display: flex;
	align-items: center;
`

export const SSearchInput = styled(SInput)``

export const SSearchBtn = styled(SButton)`
	svg {
		font-size: 20px;
	}
`

export const SCategoryMenu = styled(STodoCategories)`
	margin: 0 ${v.mdSpacing};
`
