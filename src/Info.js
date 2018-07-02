import React from 'react';
import './css/Info.css';

const Info = (props) => {
	return(
		<div id='info' className='column section has-text-centered'>
			<div className='content'>
				{props.info}
			</div>
		</div>
	);
}

export default Info;