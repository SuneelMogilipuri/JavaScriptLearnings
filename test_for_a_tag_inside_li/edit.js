function createListItem(text){
  var li = document.createElement('li');
  li.style = "list-style:none";
  li.textContent = text;
  var image = document.createElement('img');
  image.src = 'test.png';
  image.style.height = '50px';
  image.style.width = '50px';
  image.setAttribute('onclick','imgClick(this)');
  image.style.cursor = "pointer";
  li.appendChild(image);
  return li;
}

var list = [
  createListItem('C'),
  createListItem('Java'),
  createListItem('php'),
  createListItem('C#'),
  createListItem('ADO.net'),
  createListItem('Entity frameWork'),
  createListItem('ROR')
]

function appendChildren(parent, children){
  children.forEach(function (child) {
    parent.appendChild(child);
  });
}
function imgClick(ele){
  document.getElementById('selected-lang').value = ele.parentElement.textContent;
  // console.log(ele);
}
var myLearning = document.getElementById('my-learnings');
appendChildren(myLearning, list);