import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css';

import Editor from './Editor';
import Viewer from './Viewer';
import Info from './Info';

let appInfo = 'This application does some shit to view some shit';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: this.props.info,
			input: ''
		}
	}

	updateEditor = (event) => {
		this.setState({
			input: event.target.innerHTML,
		});
	}

  render() {
    return (
    	<div className='container'>
	      <div className='columns'>
	      	<Info info={this.state.info}/>
	      </div>
	      <div className='columns is-gapless'>
	      	<Editor onChange={this.updateEditor} />
	      	<Viewer content={this.state.input} />
	      </div>
      </div>
    );
  }
}


ReactDOM.render(<App info={appInfo} />, document.getElementById('root'));