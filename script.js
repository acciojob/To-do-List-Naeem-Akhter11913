//your code here
function onClick() {
	let text = document.getElementById("newTodoInput").value;

	if(text == "")
		return;

	document.getElementById("todoList").innerHTML += "<li>"+text+"</li>";
}
addTodoBtn.addEventListener('click',onClick);
