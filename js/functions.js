function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printResult(msg){
	let div1 = document.createElement('div');
	div1.innerHTML = msg;
	document.getElementById('result').appendChild(div1);
}

function printGameOver(msg){
	let div1 = document.createElement('div');
	div1.innerHTML = msg;
	document.getElementById('game_over').appendChild(div1);
}

