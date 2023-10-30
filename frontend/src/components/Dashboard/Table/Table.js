import React from 'react'
import { SCard, STitle } from '../styles'
import { STBody, STHead, STable, STableContainer, STd, STh, STr } from './styles'

const Table = props => {
	return (
		<SCard className={props.className}>
			<STitle>Table</STitle>
			<STableContainer>
				<STable>
					<STHead>
						<STr>
							<STh>Name</STh>
							<STh>Status</STh>
							<STh>Category</STh>
							<STh>Created Date</STh>
							<STh>Updated Date</STh>
						</STr>
					</STHead>
					<STBody>
						<STr>
							<STd>Row 1 Data 1</STd>
							<STd>Done</STd>
							<STd>Personal</STd>
							<STd>Row 1 Data 3</STd>
							<STd>Row 1 Data 4</STd>
						</STr>
						<STr>
							<STd>Row 2 Data 1</STd>
							<STd>Done</STd>
							<STd>Work</STd>
							<STd>Row 2 Data 3</STd>
							<STd>Row 2 Data 4</STd>
						</STr>
						<STr>
							<STd>Row 3 Data 1</STd>
							<STd>None</STd>
							<STd>Study</STd>
							<STd>Row 3 Data 3</STd>
							<STd>Row 3 Data 4</STd>
						</STr>
						<STr>
							<STd>Row 4 Data 1</STd>
							<STd>None</STd>
							<STd>Row 4 Data 3</STd>
							<STd>Row 4 Data 4</STd>
						</STr>
						<STr>
							<STd>Row 4 Data 1</STd>
							<STd>None</STd>
							<STd>Row 4 Data 3</STd>
							<STd>Row 4 Data 4</STd>
						</STr>
						<STr>
							<STd>Row 4 Data 1</STd>
							<STd>None</STd>
							<STd>Row 4 Data 3</STd>
							<STd>Row 4 Data 4</STd>
						</STr>
					</STBody>
				</STable>
			</STableContainer>
		</SCard>
	)
}

export default Table
