import React from 'react';

const Editor = (props) => {
	const contentChange = (event) => {
		props.onChange(event);
	}

	return(
		<div id='editor' contentEditable='true' onInput={contentChange}>

		</div>
	);
}

export default Editor;