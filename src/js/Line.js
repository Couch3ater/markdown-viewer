class Line{
	constructor(data, type, html) {
		this.data = data;
		let types = ['header', 'emphasis', 'list', 'link', 'image', 'code', 'table', 'blockquote', 'inline-html', 'hr', 'line', 'youtube'];
		if (types.includes(type) ? this.type : console.error(this));
		this.html = html;
	}
}