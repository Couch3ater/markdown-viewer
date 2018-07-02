import React from 'react';
import './css/Viewer.css';

const Viewer = (props) => {
	const parseContent = (content) => {
		return(content);
	}
	return(
		<div id='viewer' className='has-background-info column'>
			{parseContent(props.content)}
		</div>
	);
}

export default Viewer;