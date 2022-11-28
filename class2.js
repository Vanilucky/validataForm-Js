const TaskManeger = {
    TaskName: 'Task1',
    Status: 'INProgress',
    DueDate: '28/11/22',
    AsignTo: 'Vijaya',
    Description: 'Still Working',
get NewTask(){
    return this.TaskName
},
get Newstatus(){
  return this.Status
},
get NewDueDate(){
    return this.DueDate
  },
  get NewAsignTI(){
    return this.AsignTo
  },
  get NewDesc(){
    return this.Description
  }
}; 





console.log(TaskManeger.TaskName);
console.log(TaskManeger.Status);
console.log(TaskManeger.DueDate);
//console.log(TaskManeger.AsignTo);
//console.log(TaskManeger.Description);