class TaskManeger  {
   static id = 0
   constructor(TaskName, DueDate, Description, Status, AsignTo) {
      id = TaskManeger.id++;
      this._TaskName = TaskName,
      this._DueDate = DueDate,
      this._Status = Status,
      this._AsignTo = AsignTo,
      this._Description = Description
   }
   get TaskName() {
      return this._TaskName;
   }
   get DueDate() {
      return this._DueDate;
   }  
   get status() {
      return this._Status;
   }
   get AsignTo() {
      return this._AsignTo;
   }
   get Desc() {
      return this._Description;
   }
static addTask(task) {
   console.log('in add task')
   task._id = TaskManeger.getId()
   //const allTasks = JSON.parse(window.localStorage.getItem('Tasks')) || []
   const allTasks= TaskManeger.getTaskList()
   allTasks.push(task)
   window.localStorage.setItem('Tasks', JSON.stringify(allTasks))
}
};

   //console.log(TaskManeger._TaskName);
   //console.log(TaskManeger._DueDate);
   //console.log(TaskManeger._Satus);
   //console.log(TaskManeger._AsignTo);
   //console.log(TaskManeger._Desc);
