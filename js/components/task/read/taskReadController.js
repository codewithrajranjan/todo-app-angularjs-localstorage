angular.module('task-module')
.controller('taskReadController',taskReadController);

function taskReadController($scope,taskRESTService,$state){

    var vm = this;

    // variable exposed to template
    vm.uiConfig = {
        allTaskList : null
    };


    // function exposed to template
    vm.editTaskById = editTaskById;

    // initialization
    taskRESTService.readTask()
        .then(function(data){
            vm.uiConfig.allTaskList = data;
        })
        .catch(function(err){
            console.log(err);
            alert('Task read error occured');
        });

    // defining functions
    function editTaskById(taskId){
        $state.go('app.task.edit',{id:taskId});
    }
}
