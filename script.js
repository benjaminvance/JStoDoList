let todoList = [];

function add(){
    let  task = document.getElementById("todo").value;
    todoList.push(task);
    console.log(todoList);
    showTasks();
}

function showTasks(){
    let ullist = document.getElementById('todoList');
    ullist.innerHTML = "";
    let bodyList = "";

    for(let i=0; i<todoList.length; i++){
        bodyList += `<li>${todoList[i]} <button id="remove" onclick="delete_row(this)">Remove</button></li>`;    
        // bodyList = bodyList + `<li>${todList[i]}</li>`;   
    }

    //add feature to remove items from list
    //add CSS styling

    ullist.innerHTML = bodyList;
}

function delete_row(e)
{
    e.parentNode.remove();
}