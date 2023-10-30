import { SKPICard, SDescription, SMetric, STitle } from './styles'
import { SCard } from '../styles'

const KPICard = props => {
	const { title, metric, description, icon } = props.data
	return (
		<SCard className={props.className}>
			<SKPICard>
				<div>
					<STitle>{title}</STitle>
					<SMetric>{metric}</SMetric>
					<SDescription>{description}</SDescription>
				</div>
				<div>{icon}</div>
			</SKPICard>
		</SCard>
	)
}

export default KPICard
