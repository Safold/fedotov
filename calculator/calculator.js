const output = document.querySelector('output')
let old

document.querySelectorAll('input').forEach(input => {
	input.addEventListener('click', function(){
		calc( transform(this.value) )
	})
})

function calc(value) {
	if(output.innerHTML == '' && !Number.isInteger(value)) {
		alert('Error')
		return
	}
	else if(String(output.innerHTML).slice(-1) == '*'|'/'|'+'|'-' && !Number.isInteger(value)){
		alert('Error')
		return
	}
	if(value == '='){
		output.innerHTML = eval(output.innerHTML)
	}
	else if(value == '^2' && output.innerHTML != ' '){
		output.innerHTML = Math.pow(eval(output.innerHTML), 2)
	}
	else{
		output.innerHTML += value
	}

}
function transform(string){
	if(!Number.isInteger(parseInt(string))){
		return(string)
	} 
	else{
		return(parseInt(string))
	}
}
