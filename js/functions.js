const printMessage = function(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}

const printRoundResult = function(msg){
	let div1 = document.createElement('div');
	div1.innerHTML = msg;
	document.getElementById('round_result').appendChild(div1);
}

const printFinalResult = function(msg){
	let div1 = document.createElement('div');
	div1.innerHTML = msg;
	document.getElementById('final_result').appendChild(div1);
}