import React from 'react';
import Showdown from 'showdown';

const Viewer = (props) => {
	const parseContent = (content) => {
    let converter = new Showdown.Converter();
    let html = converter.makeHtml(content);
		return(html);
	}
	return(
		<div className='column col-7 col-mx-auto'>
			<p className='text-bold'>Preview document here</p>
			<div id='viewer' className='panel' dangerouslySetInnerHTML={{ __html: parseContent(props.content) }}>
				
			</div>
		</div>
	);
}

export default Viewer;