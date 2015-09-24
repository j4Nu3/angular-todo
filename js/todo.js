/**
 * Instatiation du module todoApp. C'est ici que angular cherchera le code a exécuter
 *  pour notre application todoApp puisque c'est le nom qu'on lui a donné dans notre directive
 */
var todoApp = angular.module('todoApp', []);

/**
 * Chainage du controller au module avec le même nom qu'on lui a donné dans notre vue.
 */
todoApp.controller('TodoListController', function($scope) {

    //Instanciation du todoList avec la valeur $scope
    var todoList = $scope;

    // Ajout de la propriété todos à todoList
    // Le todos est un tableau contenant des objets todos
    todoList.todos = [
        {
            text : 'Learn javascript',
            done : false
        },
        {
            text : 'Learn angular',
            done : false
        }
    ];
});