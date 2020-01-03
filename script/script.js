// helps in sleep...
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// function Animate the Text.
async function animateText(){
	let append = ' ';
	const skills = ['Designer.','Developer.','Engineer.'];

	const timeWrite = 200;
	const timeDelete = 120;

	const element = document.getElementById('animate');

	for(let index in skills){
		const skill = skills[index];
		const start = 0;
		const stop = skill.length - 1;
		// Forward...
		for(let x = start; x <= stop; x++){
			element.innerHTML = append + skill.substr(start, x + 1);
			await sleep(timeWrite);
		}
		// Reverse...
		for(let x = stop ; x>=0 ; x--){
			element.innerHTML = append + skill.substr(start, x );
			await sleep(timeDelete);
		}


	} 

	// Recursion Effect... 
	animateText();
}

// Call animateText function after 1 seconds. 
setTimeout(animateText,1000);
