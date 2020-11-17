function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printScore(msg){
	let div1 = document.createElement('div');
	div1.innerHTML = msg;
	document.getElementById('result').appendChild(div1);
}

