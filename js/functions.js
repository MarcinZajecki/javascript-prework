function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printRoundResult(msg){
	let div1 = document.createElement('div');
	div1.innerHTML = msg;
	document.getElementById('round_result').appendChild(div1);
}

function printFinalResult(msg){
	let div1 = document.createElement('div');
	div1.innerHTML = msg;
	document.getElementById('final_result').appendChild(div1);
}