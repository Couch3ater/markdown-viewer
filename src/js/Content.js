let Line = require('./Line.js');

class Content{
	constructor() {
		this.data = [];
	}

	addLine(data) { 
		this.data.push(data);
	}

	getContent() {
		return this.data;
	}
}

export default Content;