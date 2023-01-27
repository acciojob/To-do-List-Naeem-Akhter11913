//your code here

function change() {
	let text = document.getElementById("inp").value;
	if(text == "")
		return;
	let gaintext = document.getElementById("todoList").innerHTML += "<li>"+text+"</li>";
}