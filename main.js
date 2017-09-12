window.onload = () =>
{
  const id = document.getElementById;
  const tag = document.getElementsByTagName;
  
  id('run').onclick = () =>
  {
    const doc = id('output').contentWindow.document;
    doc.open();
    doc.write(id('input').value);
    doc.close();
  };
  
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
