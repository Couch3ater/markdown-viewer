import React from 'react';
import './css/Editor.css';

const Editor = (props) => {
	const contentChange = (event) => {
		props.onChange(event);
	}

	return(
		<div id='editor' className='has-background-primary column' contentEditable='true' onInput={contentChange}>
			
		</div>
	);
}

export default Editor;