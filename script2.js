function add(){
    console.log(todoList); 
    document.getElementById('todoList').insertAdjacentHTML('afterend', `<li>${document.getElementById("todo").value} <button id="remove" onclick="delete_row(this)">Remove</button></li>`);
}

function delete_row(e)
{
    e.parentNode.remove();
}