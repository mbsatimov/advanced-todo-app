import { SCard, STitle } from '../styles'
import { Line, Lines, SAxisX, SAxisY, SBarChart, SBarChartItem, SBarChartItems } from './styles'

const BAR_CHART_DATA = [
	{
		date: 'Jan 1',
		todos: 2,
	},
	{
		date: 'Jan 2',
		todos: 1,
	},
	{
		date: 'Jan 3',
		todos: 1,
	},
	{
		date: 'Jan 4',
		todos: 1,
	},
	{
		date: 'Jan 5',
		todos: 2,
	},
	{
		date: 'Jan 6',
		todos: 1,
	},
	{
		date: 'Jan 7',
		todos: 3,
	},
	{
		date: 'Jan 8',
		todos: 2,
	},
	{
		date: 'Jan 9',
		todos: 1,
	},
	{
		date: 'Jan 10',
		todos: 3,
	},
]

const BarChart = props => {
	const getMaxTodosValue = () => {
		let maxTodos = 4
		BAR_CHART_DATA.forEach(item => {
			if (item.todos > maxTodos) {
				maxTodos = item.todos
			}
		})
		return maxTodos
	}

	const calculateChartValues = () => {
		const a = getMaxTodosValue()
		let arr = []
		let d = a / 4
		for (let i = 0; i < 5; i++) {
			arr.push(Math.round((a - i * d) * 10) / 10)
		}
		return arr
	}

	return (
		<SCard className={props.className}>
			<STitle>Bar chart</STitle>
			<SBarChart style={{ flexGrow: 1 }}>
				<SAxisY>
					{calculateChartValues().map((item, index) => (
						<span key={index}>{item}</span>
					))}
				</SAxisY>
				<SBarChartItems>
					{BAR_CHART_DATA.map((item, index) => (
						<SBarChartItem
							key={index}
							style={{ height: `${(item.todos / getMaxTodosValue()) * 100}%` }}
						/>
					))}
					<Lines>
						<Line></Line>
						<Line></Line>
						<Line></Line>
						<Line></Line>
						<Line></Line>
					</Lines>
				</SBarChartItems>
				<SAxisX>
					{BAR_CHART_DATA.map((item, index) => (
						<span key={index}>{item.date}</span>
					))}
				</SAxisX>
			</SBarChart>
		</SCard>
	)
}

export default BarChart
