const output = document.querySelector('output')

document.querySelectorAll('input').forEach(input => {
	input.addEventListener('click', function(){
		calc( transform(this.value) )
	})
})

function calc(value) {
	if(value === '='){
		output.innerHTML = eval(output.innerHTML)
	}
	else if(value === '^2'){
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
