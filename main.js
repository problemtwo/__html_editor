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

	id('input').onkeydown = e =>
	{
		if(e.keyCode === 9)
		{
			const start = e.target.selectionStart;
			const end = e.target.selectionEnd;
			const value = e.target.value;
			e.target.value = value.substring(0,start) + ' ' + value.substring(end);
			e.target.selectionStart = e.target.selectionEnd = start + 1;
			return false;
		}
	}
};
