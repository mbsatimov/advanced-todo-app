import styled from 'styled-components'

import { v } from '../../assets/styles/variables'

export const SLayout = styled.div`
	display: flex;
	height: 100vh;
	background: ${({ theme }) => theme.bg_body};
	transition: ${v.tran5};
	padding: ${v.mdSpacing};
`
export const SMain = styled.main`
	position: relative;
	width: 100%;
	margin: ${v.mdSpacing} ${v.xlSpacing};
`
