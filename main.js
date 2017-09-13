window.onload = () =>
{
	function id(i){return document.getElementById(i);}
	function tag(t){return document.getElementsByTagName(t);}

	id('run').onclick = () =>
	{
		const doc = id('output').contentWindow.document;
		doc.open();
		doc.write(id('input').value);
		doc.close();
	};

	id('save').onclick = () =>
	{
		localStorage.setItem(
		 '__html_editor_' + id('flname').value,
		 id('input').value);
	}

	id('load').onclick = () =>
	{
		id('input').value = 
			localStorage.getItem('__html_editor_' + id('flname').value);
	}
};
