
function TodoModel(){

	var todos = [];
	const xhr = new XMLHttpRequest();

	return {
		/**
		 * This function returns all todo task data.
		 * @returns {array of object}.
		 */
		get: function(){
			return todos;
		},
		/**
		 * This function gets all todo task from server and assigns to {todos}.
		 * @param {callback} function
		 */
		getAll: function(callback){
			xhr.onload = function () {
				if (xhr.status >= 200 && xhr.status < 300) {
					todos = JSON.parse(xhr.response).data;
					callback(todos);
				} else {
					callback({'error': 'Unable to retrive todo data.'});
				}
			};

			xhr.open('GET', 'https://todo-simple-api.herokuapp.com/todos');
			xhr.send();
		},
		/**
		 * This function adds new todo task to the server.
		 * @param {text} tood text, {callback} function
		 */
		add: function(text, callback){
			var data = JSON.stringify({'title': text, 'description': text, 'isComplete': false});
			xhr.onload = function () {
				if (xhr.status >= 200 && xhr.status < 300) {
					todos.push(JSON.parse(xhr.response).data);
					callback(JSON.parse(xhr.response).data);
				} else {
					callback({'error': 'Todo could not be save. Try again or contact administrator.'});
				}
			};
			xhr.open('POST', 'https://todo-simple-api.herokuapp.com/todos');
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.send(data);
		},
		/**
		 * This function removes todo task from the server.
		 * @param {id} of todo task, {callback} function.
		 */
		remove: function(id, callback){
			var index = todos.findIndex(lst => lst.id == id);
			xhr.onload = function () {
				if (xhr.status >= 200 && xhr.status < 300) {
					todos.splice(index, 1);
					callback(todos);
				} else {
					callback({'error': 'Unable to remove todo data.'});
				}
			};

			xhr.open('DELETE', 'https://todo-simple-api.herokuapp.com/todos/'+id);
			xhr.send();
		},
		/**
		 * This function updates the status of the todo task.
		 * @param {id} of todo task, {isComplete} old status, {callback} function.
		 */
		taskStatus: function(id, isComplete, callback){
			var newStatus = !(isComplete === "true");
			var index = todos.findIndex(lst => lst.id == id);
			var data = JSON.stringify({'title': todos[index].title, 'description': todos[index].description, 'isComplete': newStatus});
			xhr.onload = function () {
				if (xhr.status >= 200 && xhr.status < 300) {
					todos[index].isComplete = newStatus;
					callback(JSON.parse(xhr.response).data);
				} else {
					callback({'error': 'Unable to change the status of todo data.'});
				}
			};

			xhr.open('PUT', 'https://todo-simple-api.herokuapp.com/todos/'+id);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.send(data);
		}
	}

}



function TodoView(model){
	return {
		/**
		 * This function updates the DOM for the todo task list after every API request.
		 */
		updateDOM: function(){
			var todo_list = model.get();
			var html = '';
			for (var i = 0; i < todo_list.length; i++) {
				var checked_class = "color-dark";
				var checked = '';
				if(todo_list[i].isComplete){
					checked_class = "color-light";
					checked = 'checked';
				}
				html = html + '<tr class="list ' + checked_class + '">' +
			  					'<td class="handle checkers">' +
			  						'<label class="custom-checkbox">' +
				  						'<input '+checked+' type="checkbox" name="">' +
				  						'<span class="checkmark" data-id="'+todo_list[i].id+'" data-status="'+todo_list[i].isComplete+'"></span>' +
			  						'</label>' +
			  					'</td>' +
			  					'<td>' + todo_list[i].title + '</td>' +
			  					'<td class="actions"><i class="pointer fas fa-trash-alt remove"></i></td>' +
			  				   '</tr>';
			}

			// hide error message
			var error_elm = document.querySelector('.message');
			error_elm.classList.add('hidden');

			// remove old list
			var old_list = document.querySelectorAll('.list');
			old_list.forEach(el => el.remove());

			// get referenceNode to update
			var referenceNode = document.querySelector('.title');

			document.querySelector('.todo-input').value = "";
			document.querySelector('.add-btn').classList.remove('color-dark');
			document.querySelector('.add-btn').classList.add('color-light');
			document.querySelector('.add-icon').classList.remove('pointer');

			referenceNode.insertAdjacentHTML('afterend', html);
		},
		// This function displays error
		errorDOM: function(message){
			var error_elm = document.querySelector('.message');

			error_elm.classList.remove('hidden');

  			error_elm.innerHTML = message;

		},
		// remove specific element from DOM
		removeDOM: function(element){
			element.remove();
		},
		// add new data to DOM
		addDOM: function(data){
				var checked_class = "color-dark";
				var checked = '';
				if(data.isComplete){
					checked_class = "color-light";
					checked = 'checked';
				}
				html = '<tr class="list ' + checked_class + '">' +
			  					'<td class="handle checkers">' +
			  						'<label class="custom-checkbox">' +
				  						'<input '+checked+' type="checkbox" name="">' +
				  						'<span class="checkmark" data-id="'+data.id+'" data-status="'+data.isComplete+'"></span>' +
			  						'</label>' +
			  					'</td>' +
			  					'<td>' + data.title + '</td>' +
			  					'<td class="actions"><i class="pointer fas fa-trash-alt remove"></i></td>' +
			  				   '</tr>';

			// hide error message
			var error_elm = document.querySelector('.message');
			error_elm.classList.add('hidden');

			// get referenceNode to update the list
			var referenceNode = document.querySelector('.new-todo');

			document.querySelector('.todo-input').value = "";
			document.querySelector('.add-btn').classList.remove('color-dark');
			document.querySelector('.add-btn').classList.add('color-light');
			document.querySelector('.add-icon').classList.remove('pointer');

			referenceNode.insertAdjacentHTML('beforebegin', html);
		},
		// change status of DOM
		statusDOM: function(element, data){
			element.classList.remove('color-dark');
			element.classList.remove('color-light');
			if(data.isComplete){
				element.classList.add('color-light');
				element.querySelector('input').checked = true;
			}else{
				element.classList.add('color-dark');
				element.querySelector('input').checked = false;
			}
			element.querySelector('.checkmark').setAttribute('data-status', data.isComplete);

		}
	}
}


function TodoCtrl(view, model){

	// init load and display data
	model.getAll(function(data){
		if(data.hasOwnProperty('error')){
			view.errorDOM(data.error);
		}else{
			view.updateDOM();

		}
		dragable();
	});

	// listen for click event for specific activity
	document.addEventListener('click', function(e){
		
		// change status of the todo task	
		if(e.target && e.target.classList.contains('checkmark')){
			model.taskStatus(e.target.dataset.id, e.target.dataset.status, function(data){
				if(data.hasOwnProperty('error')){
					view.errorDOM(data.error);
				}else{
					view.statusDOM(e.target.parentNode.parentNode.parentNode, data);
				}
			});
		}

		// remove todo task
		if(e.target && e.target.classList.contains('remove')){
			var id = e.target.parentNode.parentNode.querySelector('.checkmark').getAttribute('data-id');
			model.remove(id, function(data){
				if(data.hasOwnProperty('error')){
					view.errorDOM(data.error);
				}else{
					view.removeDOM(e.target.parentNode.parentNode);
				}
			});
		}

		// add new todo task but make sure the first check input is valid
		if(e.target && e.target.classList.contains('add-icon') && e.target.classList.contains('pointer')){
			var text = e.target.parentNode.parentNode.querySelector('input').value;
			
			model.add(text, function(data){
				if(data.hasOwnProperty('error')){
					view.errorDOM(data.error);
				}else{
					view.addDOM(data);
				}
				dragable();
			});
		}

 	});

	document.addEventListener('keyup', function(e){
		
		// check if there is input
		if(e.target && e.target.classList.contains('todo-input')){
			var text = e.target.value;
			var root = e.target.parentNode.parentNode;
			root.querySelector('.add-btn').classList.remove('color-dark');
			root.querySelector('.add-btn').classList.add('color-light');
			root.querySelector('.add-icon').classList.remove('pointer');
			if(text != ""){
				root.querySelector('.add-btn').classList.remove('color-light');
				root.querySelector('.add-btn').classList.add('color-dark');
				root.querySelector('.add-icon').classList.add('pointer');
			}
		}
	});

}


function dragable(){
	var el = document.getElementById('table');
	var dragger = tableDragger(el, {
	  mode: 'row',
	  dragHandler: '.handle',
	  onlyBody: true,
	  animation: 300
	});
	dragger.on('drop',function(from, to){
	  console.log(from);
	  console.log(to);
	});
}

// initialize
const model = TodoModel(),
      view = TodoView(model),
      ctrl = TodoCtrl(view, model);