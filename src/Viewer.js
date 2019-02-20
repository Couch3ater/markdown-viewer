import React from 'react';
import Showdown from 'showdown';

const Viewer = (props) => {
	const parseContent = (content) => {
    let converter = new Showdown.Converter();
    let html = converter.makeHtml(content);
		return(html);
	}
	return(
		<div id='viewer' className='column col-8' dangerouslySetInnerHTML={{ __html: parseContent(props.content) }}>
			{/* preview will show up here */}
		</div>
	);
}

export default Viewer;