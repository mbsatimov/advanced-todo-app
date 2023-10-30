import { BiSolidData, BiSolidFlask, BiSolidTimeFive } from 'react-icons/bi'
import KPICard from './KPICard/KPICard'
import { SDashboard } from './styles'
import BarChart from './BarChart/BarChart'
import Table from './Table/Table'
import PieChart from './PieChart/PieChart'

const KPICardData = [
	{
		grid: 'a',
		title: 'Title',
		metric: '456',
		description: 'Lorem ipsum dolor sit amet.',
		icon: <BiSolidTimeFive />,
	},
	{
		grid: 'b',
		title: 'Something',
		metric: '4632',
		description: 'Lorem ipsum dolor sit amet.',
		icon: <BiSolidData />,
	},
	{
		grid: 'c',
		title: 'Anything',
		metric: '1434.32',
		description: 'Lorem ipsum dolor sit amet.',
		icon: <BiSolidFlask />,
	},
]

const Dashboard = () => {
	return (
		<SDashboard>
			{KPICardData.map((data, index) => (
				<KPICard
					className={data.grid}
					key={index}
					data={data}
				/>
			))}
			<BarChart className='bar' />
			<PieChart className='pie'></PieChart>
			<Table className='table' />
		</SDashboard>
	)
}

export default Dashboard
