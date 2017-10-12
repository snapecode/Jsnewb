//controller to hold data

//scope object is a data processor, everything in the ToDoList
// program can talk too. The (view) index.html can see whats in 
//scope, the (data) controller can set the data thats in the scope


//add the list attribute to the scope object
//set the value of list attribute as an array with "To Do List" Items
app.controller('MainController', ['$scope', function($scope){
	$scope.list = ["Make Bed", "Make Coffee", "Get to the Market"];
	$scope.addItem = function() {         //new attribute : addItem
		$scope.list.push($scope.addToDo);
	}
}])