//window.addEventListener("load",  () => loadPage());
//date and Time//
setInterval(show, 1000);
function show() {
let  date = new Date();
    let current_date = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+ date.getDate();
    let current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
    let date_time = 'Date: '+current_date+' '+current_time;	
    document.getElementById("show").innerHTML = date_time;
};


//Window.addEventListener("load", () => {
const form = document.querySelector("#form");
const TaskName= document.querySelector("#tname");

const DueDate = document.querySelector("#ddate");
const Status = document.querySelector("#status");
const AsignTo = document.querySelector("#asignTo");
const Description = document.querySelector("#desc");

const messagecontainer = document.querySelector("#message-container");
const message = document.querySelector("#message");
//});

function validateForm() {
    if (TaskName.value === "") {
        message.textContent = "Please fill task name";
        message.style.color = "blue";
        return;
    }
    if (DueDate.value === "") {
        message.textContent = "Please fill Date";
        message.style.color = "blue";
        return;
    }
    if (Status.value === "") {
        message.textContent = "Please fill status";
        message.style.color = "blue";
        return;
    }
    if (AsignTo.value === "") {
        message.textContent = "Please fill the name";
        message.style.color = "blue";
        return;
    }
    if (Description.value === "") {
        message.textContent = "Please write Description";
        message.style.color = "blue";
        return;
    }
    message.textContent = "To Do List Success";
    message.style.color = "green";
};


function getFormData(event) {
    event.preventDefault();
    //form validation//
    validateForm();
};
// enter listener//
form.addEventListener("submit", getFormData);



form.addEventListener('submit',(event) => {
    console.log("Click submit button");
    event.preventDefault();
    if(!validateForm()) {
       console.log("validate fails");
        return;
    }
    const formData = new FormData(form);
    console.log(`formdata:${form}`);
    const task = new TaskManeger()
    task._TaskName = form[`tname`].value
    task._DueDate = form[`ddate`].value
    task._status = form[`status`].value,
    task._AsignTo = form[`asignTo`].value,
    task._Description = form[`desc`].value,
    console.log('tname: ${task._tname}');
    //console.log(task);
    TaskManeger.addTask(task)
    const allTasks = task.getTasklist();
    task.taskListBystatus("To Do");
})
//Adding classes
//function form(){
    //const TaskName = document.getElementById("tname").value;
    //const DueDate = document.getElementById("ddate").value;
    //const status = document.getElementById("status").value;
    //const AsignTo = document.getElementById("asignto").value;
    //const Description = document.getElementById("desc").value;

    //document.writeln("TaskName:"+TaskName );  

//}


