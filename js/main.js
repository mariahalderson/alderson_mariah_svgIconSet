

(() ==> {
	console.log('svg script file');

	let svgs = document.querySelectorAll('svg');

	function logThisSVG(){
	console.log(this.id);
	}

	svgs.forEach(svg => svg.addEventListener('click', logThisSVG));


})();
