import styled from 'styled-components'
import { v } from '../../../assets/styles/variables'

export const SBarChart = styled.div`
	margin-top: ${v.lgSpacing};
	width: 100%;
	display: grid;
	grid-template: auto fit-content(40px) / fit-content(100px) auto;
	grid-template-areas:
		'axis-y bar-chart-items'
		'. axis-x';
`

export const SBarChartItems = styled.div`
	position: relative;
	z-index: 2;
	display: flex;
	align-items: end;
	justify-content: space-between;
	padding: ${v.smSpacing};
	grid-area: bar-chart-items;
`

export const SBarChartItem = styled.div`
	position: relative;
	z-index: 2;
	width: 45px;
	background: ${({ theme }) => theme.primary};
`

export const SAxisY = styled.div`
	grid-area: axis-y;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-right: ${v.mdSpacing};
	color: ${({ theme }) => theme.text};
	span {
		font-size: 14px;
		text-align: right;
	}
`

export const SAxisX = styled.div`
	grid-area: axis-x;
	display: flex;
	justify-content: space-between;
	padding: ${v.smSpacing} ${v.smSpacing} 0;
	color: ${({ theme }) => theme.text};
	span {
		font-size: 14px;
		width: 45px;
		text-align: center;
	}
`

export const Lines = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`
export const Line = styled.span`
	width: 100%;
	height: 1px;
	margin: ${v.smSpacing} 0;
	background: ${({ theme }) => theme.disable_text};
`
