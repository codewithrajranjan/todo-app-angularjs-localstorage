angular.module('task-module')
    .controller('taskReadController', taskReadController);

function taskReadController($scope, taskRESTService, $state) {

    var vm = this;

    // variable exposed to template
    vm.uiConfig = {
        allTaskList: null
    };

    // function exposed to template
    vm.editTaskById = editTaskById;
    vm.deleteTaskById = deleteTaskById;

    // initialization
    init();


    // defining functions
    function init() {
        taskRESTService.readTask()
            .then(function (data) {
                vm.uiConfig.allTaskList = data;
            })
            .catch(function (err) {
                console.log(err);
                alert('Task read error occured');
            });
    }
    function editTaskById(taskId) {
        $state.go('app.task.edit', { id: taskId });
    }
    function deleteTaskById(taskId) {
        taskRESTService.deleteTaskById(taskId)
            .then(function (data) {
                $state.reload()
            }).catch(function (error) {
                console.log(error);
            })
    }
}
