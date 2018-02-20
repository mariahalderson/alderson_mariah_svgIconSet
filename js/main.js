(() => {
	console.log('svg script file');

	let svgs = document.querySelectorAll('svg');

	//log id on click
	function logThisSVG(){
		console.log(this.id);
	}

	//zoom in 1.5x on mouseover 
	function zoom(){
		document.getElementById(this.id).classList.add('zoom');
	}

	//return to normal zoom on mouseout
	function removeZoom(){
		document.getElementById(this.id).classList.remove('zoom');
	}




	svgs.forEach(svg => svg.addEventListener('click', logThisSVG));
	svgs.forEach(svg => svg.addEventListener('mouseover', zoom));
	svgs.forEach(svg => svg.addEventListener('mouseout', removeZoom));

})();
