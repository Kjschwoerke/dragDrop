function allowDrop(ev) {
    ev.preventDefault();
    console.log(ev.target.id)
    console.log((ev.target.id === 'div1') ? 'this is div1':'this is not div1')
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }