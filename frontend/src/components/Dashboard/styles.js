import styled from 'styled-components'
import { v } from '../../assets/styles/variables'

export const SDashboard = styled.div`
	display: grid;
	max-width: 1080px;
	height: 100%;
	margin: auto;
	grid-template: repeat(5, 1fr) / repeat(3, 1fr);
	grid-gap: ${v.xlSpacing};
	grid-template-areas:
		'a b c'
		'bar bar bar'
		'bar bar bar'
		'pie table table'
		'pie table table';

	.a {
		grid-area: a;
	}
	.b {
		grid-area: b;
	}
	.c {
		grid-area: c;
	}
	.bar {
		grid-area: bar;
	}
	.pie {
		grid-area: pie;
	}
	.table {
		grid-area: table;
	}
`

export const SCard = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: ${v.lgSpacing};
	border-radius: ${v.borderRadius2};
	background: ${({ theme }) => theme.bg};
	box-shadow: ${v.boxShadow};
`

export const STitle = styled.h2`
	font-size: 18px;
	font-weight: 500;
	color: ${({ theme }) => theme.text};
`
