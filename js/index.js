
console.log('lolz');

//Remove and complete icons in SVG format
// var removeSVG ="add svg here";
// var completeSVG ="add svg here";



//user clicked on the add button
//if there is any text inside the item field, add that text to the todo list
document.getElementById('add').addEventListener('click', function(){
  var value = document.getElementById('item').value;
  if(value) addItemTodo(value);
});


//adds a new item to the todo list
function addItemTodo(text){
  var list = document.getElementById('todo');
  
  var item = document.createElement('li');
  item.innerText= text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');
  
  
  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;
  
  
  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeSVG;
  
  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  list.appendChild(item);
}
