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
    // checking if edit mode is true or false

    // function exposed to template
    vm.createTask = createTask;



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
}
