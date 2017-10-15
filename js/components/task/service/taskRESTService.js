angular.module('task-module')
.service('taskRESTService',taskRESTService);

function taskRESTService(){

    return {
        createTask : createTask,
                   readTask : readTask
    };

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
}
