import styled from 'styled-components'

export const SKPICard = styled.div`
	display: flex;
	justify-content: space-between;
	svg {
		font-size: 40px;
		color: ${({ theme }) => theme.primary};
	}
`

export const STitle = styled.div`
	font-size: 14px;
	color: ${({ theme }) => theme.sub_text};
`

export const SMetric = styled.div`
	font-size: 40px;
	font-weight: 500;
	margin-top: 10px;
	color: ${({ theme }) => theme.primary};
`

export const SDescription = styled.p`
	font-size: 14px;
	color: ${({ theme }) => theme.sub_text};
	margin-top: 10px;
`
