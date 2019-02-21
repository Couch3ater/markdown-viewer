import React from 'react';

const Editor = (props) => {
	const contentChange = (event) => {
		props.onChange(event);
	}

	return(
		<div className='column col-4 col-mx-auto'>
			<p className='text-bold'>Enter markdown here</p>
			<div id='editor' className='panel' contentEditable='true' onInput={contentChange}>

			</div>
		</div>
	);
}

export default Editor;