angular.module('task-module')
.controller('taskCreateController',taskCreateController);

function taskCreateController($scope,taskRESTService,$state,editMode,taskDataResolved){

    var vm = this;

    // variable exposed to template
    vm.uiConfig = {
        editMode : editMode,
        model : {
            taskMessage : null
        }
    };

    // initialization
    if(vm.uiConfig.editMode===true){
        vm.uiConfig.model = taskDataResolved;
    }
    // checking if edit mode is true or false

    // function exposed to template
    vm.createTask = createTask;
    vm.updateTask = updateTask;



    // defining functions
    function createTask(taskModel){
        taskRESTService.createTask(taskModel)
            .then(function(data){
                $state.go('app.task.read');
            })
            .catch(function(error){
                console.log(error);
                alert('Task create failed');
            });
    }
    function updateTask(taskModel){
        var taskId = taskModel.id;
        taskRESTService.updateTaskById(taskId,taskModel.taskMessage)
            .then(function(data){
                $state.go('app.task.read');
            })
            .catch(function(error){
                console.log(error);
                alert('Task create failed');
            });
    }
}
