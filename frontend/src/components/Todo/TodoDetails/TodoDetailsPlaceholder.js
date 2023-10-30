import { SCategoryButton } from '../../UI/Button/styles'
import { SCategoryMenu, SPrimaryButtonLoading, STextAreaLoading, STodoDetails, STodoDetailsDateLoading, STodoDetailsInputLoading, STodoListTitleLoading } from './styles'
const TodoDetailsPlaceholder = () => {
	return (
		<STodoDetails>
			<STodoListTitleLoading />
			<STodoDetailsInputLoading />
			<SCategoryMenu>
				<SCategoryButton loading='true' />
				<SCategoryButton loading='true' />
				<SCategoryButton loading='true' />
			</SCategoryMenu>
			<label>Notes</label>
			<STextAreaLoading>
				<div style={{ width: '75%' }} />
				<div style={{ width: '75%' }} />
				<div style={{ width: '60%' }} />
			</STextAreaLoading>
			<SPrimaryButtonLoading>
				<span />
			</SPrimaryButtonLoading>
			<STodoDetailsDateLoading>
				<div />
				<div />
			</STodoDetailsDateLoading>
		</STodoDetails>
	)
}

export default TodoDetailsPlaceholder
