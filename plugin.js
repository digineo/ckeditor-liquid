CKEDITOR.plugins.add('liquid', {
	onLoad: function()
	{
		CKEDITOR.addCss('liquidVariable, liquidBlock' +
		'{' +
			'color: #000;' +
			'background-color: #ffc;' +
			'border: 1px solid #ccc;' +
			'padding: 2px;' +
			'white-space:nowrap;' +
		'}\n' +
		'liquidBlock' +
		'{' +
			'background-color: #fcc;' +
		'}');
	},
	init: function(editor)
	{
		var dataProcessor = editor.dataProcessor,
			dataFilter = dataProcessor && dataProcessor.dataFilter,
			htmlFilter = dataProcessor && dataProcessor.htmlFilter;
		
		// html to data conversion
		if (dataFilter) {
			dataFilter.addRules({
				text: function(text) {
					text = text.replace(/\{\{([\w\.]+)\}\}/g, "<liquidVariable>{{$1}}</liquidVariable>");
					text = text.replace(/\{%(.+)%\}/g, "<liquidBlock>{%$1%}</liquidBlock>");
					return text;
				}
			});
		}
		
		// data to html conversion
		if (htmlFilter) {
			htmlFilter.addRules({
				elements: {
					liquidvariable: function(element, b, c){
						// Drop the wrapper element. 
						delete element.name;
						
						if (element.children.length > 0) {
							element.children[0].value = element.children[0].value;
						}
					},
					liquidblock: function(element, b, c){
						// Drop the wrapper element. 
						delete element.name;
						
						if (element.children.length > 0) {
							element.children[0].value = element.children[0].value;
						}
					}
				}
			});
		}
	}
});
