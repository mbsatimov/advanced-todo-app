import React, { useEffect, useRef } from 'react'
import { STextArea } from './styles'

const TextArea = props => {
	const textAreaRef = useRef(null)

	const textChangeHandler = event => {
		props.onChange(event)
	}
	const styles = props.style

	useEffect(() => {
		if (textAreaRef.current.scrollHeight < 200) {
			textAreaRef.current.style.height = 'auto'
			textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 5 + 'px'
		}
	})
	return (
		<STextArea
			disabled={props.disabled}
			style={styles}
			ref={textAreaRef}
			onChange={textChangeHandler}
			value={props.value}
			placeholder={props.placeholder}></STextArea>
	)
}

export default TextArea
