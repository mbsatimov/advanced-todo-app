import { SCategoryButton } from './styles'
import { useState } from 'react'

const CategoryButton = props => {
	const [isSelected, setIsSelected] = useState(props.isSelected)

	const changeSelectionHandler = () => {
		console.log(isSelected)
		setIsSelected(prev => !prev)
	}

	return (
		<SCategoryButton
			selected={isSelected}
			onClick={changeSelectionHandler}>
			{props.children}
		</SCategoryButton>
	)
}

export default CategoryButton
