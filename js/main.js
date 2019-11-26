//remove and complete icons 
let removeSvg = '<img src="./img/remove_icon.svg">';
let completeSvg = '<img src="./img/done_icon.svg" alt="">';

document.getElementById('add').addEventListener('click', addTask);



function addTask(){
    let newTask = document.getElementById('addToDo').value;

    if(newTask){
    document.getElementById('addToDo').value = '';
    let list = document.getElementById('todo');
    
    let item  = document.createElement('li');
    item.innerHTML = newTask;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var removeBtn = document.createElement('button');
    removeBtn.classList.add('remove');
    removeBtn.innerHTML = removeSvg;
    //add click event
    removeBtn.addEventListener('click', removeItem);

    var completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = completeSvg;
    //add click event
    completeBtn.addEventListener('click', completeitem);

    buttons.appendChild(removeBtn);
    buttons.appendChild(completeBtn);

    item.appendChild(buttons);
    list.insertBefore(item, list.childNodes[0]);
    }
    console.log(list)

}
function removeItem(){
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    parent.removeChild(item);
 }
 function completeitem(){
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let id = parent.id;

    let target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}