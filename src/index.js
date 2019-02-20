import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';

import Editor from './Editor';
import Viewer from './Viewer';
import Info from './Info';

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
			input: event.target.innerText,
		});
	}

  render() {
    return (
    	<div className='container'>
	      <div className='row'>
	      	<Info info={this.state.info}/>
	      </div>
	      <div className='row'>
	      	<Editor onChange={this.updateEditor} />
	      	<Viewer content={this.state.input} />
	      </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));