let count = 0;

let firstDiv = document.createElement("div");
document.body.appendChild(firstDiv);
firstDiv.className = "container";

let secDiv = document.createElement("div");
firstDiv.appendChild(secDiv);

let h3 = document.createElement("h3");
secDiv.appendChild(h3);
h3.innerHTML="Supermarket List.";

let thirdDiv = document.createElement("div");
firstDiv.appendChild(thirdDiv);

let label = document.createElement("label");
thirdDiv.appendChild(label);
label.innerHTML = "Type items and click the submit button to create a list:";

let fourthDiv = document.createElement("div");
firstDiv.appendChild(fourthDiv);

let fifthDiv = document.createElement("div");
firstDiv.appendChild(fifthDiv);
fifthDiv.setAttribute("id","blockContainer");

let input = document.createElement("input");
input.className = "myInput";
input.setAttribute("type", "text");
fourthDiv.appendChild(input);

let createList = function(){
	let inputCatch =  document.querySelector(".myInput").value;
		if(!inputCatch==" "){
		count++;
		let block = document.createElement("blockquote");
		fifthDiv.appendChild(block);
		block.innerHTML = count+": "+inputCatch;
		}
		else{
		input.setAttribute("placeholder","enter something on your list.");
		}
};

let sixthDiv = document.createElement("div");
firstDiv.appendChild(sixthDiv);

let submit = document.createElement("button");
sixthDiv.appendChild(submit);
submit.innerHTML = "Submit";
submit.setAttribute("id", "submitBtn");


submit.onclick = createList;

