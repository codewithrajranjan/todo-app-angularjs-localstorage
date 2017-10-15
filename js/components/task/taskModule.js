angular.module('task-module',[])
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {
    $stateProvider
    .state('app.task', {
        url: "/task",
        abstract: true,
        template: '<ui-view></ui-view>',
        ncyBreadcrumb: {
            label: 'Task'
        }
    }).state('app.task.create', {
        url: '/create',
        templateUrl: 'js/components/task/create/create.html',
        ncyBreadcrumb: {
            label: 'Create'
        },
        controller : 'taskCreateController',
        controllerAs : 'vm',
        resolve : {
            editMode : function(){
                return false;
            },
            taskDataResolved : function(){
                return {};
            }

        }
    }).state('app.task.edit', {
        url: '/edit/id/:id',
        templateUrl: 'js/components/task/create/create.html',
        ncyBreadcrumb: {
            label: 'Create'
        },
        controller : 'taskCreateController',
        controllerAs : 'vm',
        resolve : {
            editMode : function(){
                return true;
            },
            taskDataResolved:function(taskRESTService,$stateParams){
                var taskId = $stateParams.id;
                return taskRESTService.getTaskById(id);
            }
        }
    }).state('app.task.read', {
        url: '/read',
        templateUrl: 'js/components/task/read/read.html',
        ncyBreadcrumb: {
            label: 'Read'
        },
        controller : 'taskReadController',
        controllerAs : 'vm'
    })
;
}]);

