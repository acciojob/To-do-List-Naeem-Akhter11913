//your code here

function addTodoBtn() {
	let text = document.getElementById("newTodoInput").value;
	if(text == "")
		return;
	let gaintext = document.getElementById("todoList").innerHTML += "<li>"+text+"</li>";
}