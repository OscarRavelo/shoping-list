//1. If you click on the list item, it toggles the .done  class on and off.
//2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var buttons = document.querySelectorAll("button");

function inputLength() {
	return input.value.length;
}

function newItem(){
	li = document.querySelectorAll("li");
	var newbie = li[li.length - 1]
	newbie.addEventListener("click", function(){
		newbie.classList.toggle("done");
	});
	var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("Delete"));
		newbie.appendChild(deleteButton);
		newbie.children[0].addEventListener("click", function(){
			newbie.parentNode.removeChild(newbie);
		})
	
}



function createDeleteElement(){
	
	li.forEach(function(item){
		var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("Delete"));
		item.appendChild(deleteButton);
		item.children[0].addEventListener("click", function(){
			item.parentNode.removeChild(item);
		})
		
	})
}

function listEventListener(){
	li.forEach(function(item, index){
		item.addEventListener("click", function(){
			item.classList.toggle("done");
		})
	})
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		newItem();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		newItem();
		
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

listEventListener();
createDeleteElement();


