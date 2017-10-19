angular.module('task-module')
.service('taskRESTService',taskRESTService);

function taskRESTService(){

    return {
        createTask : createTask,
        readTask : readTask,
        readTaskById : readTaskById,
        updateTaskById : updateTaskById,
        deleteTaskById : deleteTaskById
    };
    // function to create task 
    function createTask(taskModel){
        return new Promise(function(resolve,reject){
            var allTask = localStorage.getItem('task');
            if(allTask === null || allTask === undefined){
                allTask = [];
            }else {
                allTask = JSON.parse(allTask);
            }
            taskModel.id = allTask.length + 1;
            taskModel.createdAt = new Date();
            taskModel.updatedAt = new Date();
            allTask.push(taskModel);
            window.localStorage.setItem('task',JSON.stringify(allTask));
            resolve();
        });

    }

    function readTask(){
        return new Promise(function(resolve,reject){
            var allTask = window.localStorage.getItem('task');
            if(allTask === null || allTask === undefined){
                allTask = [];
            }else {
                allTask = JSON.parse(allTask);
            }
            resolve(allTask);
        });
    }
    // read task by id
    function readTaskById(taskId){
        return new Promise(function(resolve,reject){
            var allTask = window.localStorage.getItem('task');
            if(allTask === null || allTask === undefined){
                allTask = [];
            }else {
                allTask = JSON.parse(allTask);
            }
            // now since all the task has been retrieved from the localstorage
            //finding the task
            var taskFoundData = null;
            allTask.forEach(function(element){
                console.log(element.id +":"+taskId);
                if(element.id==taskId){
                    taskFoundData = element;
                }
            });
            resolve(taskFoundData);
        });
    }
    function updateTaskById(taskId,taskMessage){
        return new Promise(function(resolve,reject){
            var allTask = window.localStorage.getItem('task');
            if(allTask === null || allTask === undefined){
                allTask = [];
            }else {
                allTask = JSON.parse(allTask);
            }
            //finding the task
            var taskFoundData = null;
            allTask.forEach(function(element){
                console.log(element.id +":"+taskId);
                if(element.id==taskId){
                    element.taskMessage = taskMessage;
                    element.updatedAt = new Date();
                }
            });
            window.localStorage.setItem('task',JSON.stringify(allTask));
            resolve(taskFoundData);
        });
    }
    function deleteTaskById(taskId){
        return new Promise(function(resolve,reject){
            var allTask = window.localStorage.getItem('task');
            if(allTask === null || allTask === undefined){
                allTask = [];
            }else {
                allTask = JSON.parse(allTask);
            }
            // now since all the task has been retrieved from the localstorage
            //finding the task
            var indexToDelete = null;
            allTask.forEach(function(element,$index){
                if(element.id==taskId){
                    indexToDelete = $index;
                }
            });
            allTask.splice(indexToDelete,1);
            window.localStorage.setItem('task',JSON.stringify(allTask));
            resolve(allTask);
        });
    }

}
