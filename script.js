var addSectionBtn = document.getElementsByClassName('addSection')[0];
addSectionBtn.addEventListener("click",()=>{
    var title = document.getElementsByClassName("newGroupTitle")[0];
    addGroup(title.value);
    title.value="";
});
function addGroup(title="Hello 1"){
    var groupDiv = document.createElement("div");
    groupDiv.className="taskList";
    var groupContent = `
        <input class="taskText" cols="10" rows="1" placeholder="New Idea!!!"></input>
        <button class="addTask btn">Add</button> 
        <h2>${title}</h2>
        <ol>
        </ol>
    `;
    groupDiv.innerHTML = groupContent;
    document.getElementsByClassName("taskGroups")[0].appendChild(groupDiv);

    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    groupDiv.style.backgroundColor = randomColor;
    //Adding Event Listener to 
    var addTask = groupDiv.getElementsByClassName('addTask');
    addTask[0].addEventListener('click', addTaskPart1);
}


// //Add Event Listener to Add Task Buttons
var addTask = document.getElementsByClassName('addTask');
for(let i=0;i<addTask.length;i++){
    addTask[i].addEventListener('click',addTaskPart1);
}

//Utility Function for Adding the Task
function addTaskPart1(event){
    var groupElement = event.target.parentElement.getElementsByTagName('h2')[0];
    var groupName="Un-Grouped Ideas";
    if(groupElement)
        groupName = groupElement.innerHTML;
    var taskDetail = event.target.parentElement.getElementsByClassName('taskText')[0];
    addTaskToGroup(taskDetail.value,groupName);
    taskDetail.value="";
}

//Final Function to Add the Task
function addTaskToGroup(taskDetail,groupName="Un-Grouped Ideas"){
    var groups = document.getElementsByClassName('taskList');
    var task = document.createElement('li');
    var taskContent =`
        <span>${taskDetail}</span>
        <input class="checkbox" type="checkbox">
    `;
    task.innerHTML = taskContent;
    for(var i=0;i<groups.length;i++){
        if(groups[i].getElementsByTagName('h2')[0].innerHTML==groupName){
            groups[i].getElementsByTagName('ol')[0].appendChild(task);
        }
    }

    //Adding Event to CheckBoxes
    var checkbox= task.getElementsByClassName("checkbox");
    checkbox[0].addEventListener('click', strikeOut1);
}


// //Adding Event Listener to CheckBoxes.
function strikeOut1(event){
    var click = 0;
    var textElement = event.target.parentElement.getElementsByTagName('span')[0];
    if(click%2==0)
        textElement.style = "text-decoration: line-through";
    else
        textElement.style = "text-decoration: none";
    click++;
    event.target.parentElement.getElementsByClassName('checkbox')[0].style = "display: none";
}
