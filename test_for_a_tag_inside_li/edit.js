var loadItems = function loadItems(){
  var list = [
    'C',
    'Java',
    'php',
    'C#',
    'ADO.net',
    'Entity frameWork',
    'ROR'
  ]
  list.forEach(myFunction); 
  function myFunction(item, index) 
  { 
    var node = document.createElement("LI"); 
    var textnode = document.createTextNode(item); 
    node.appendChild(textnode);
    var image = document.createElement('img');
    image.src = 'test.png';
    image.style.height = '50px';
    image.style.width = '50px';
    node.appendChild(image);
    document.getElementById("my-learnings").appendChild(node);
  }
}