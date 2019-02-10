
window.onload = function(){
	
	var image = document.getElementsByClassName("right-picture")[0];
	var content = document.getElementById("content");
	var post = document.getElementsByClassName("post")[0];
	var menu = document.getElementById("menu");
	var pagination = document.getElementById("pagination");
	
	var picEls = document.getElementsByClassName("full-picture");
	var viewerPagination = document.getElementById("viewer-pagination");
	var nextBtn = document.getElementById("next-image-button");
	var prevBtn = document.getElementById("prev-image-button");
	
	var currentPic = 0;
	var totalPics = image ? 1 + picEls.length : 0;
	var pics = [image.style.backgroundImage];
	// Keep urls
	for(var i=0;i < picEls.length; i++){
		pics.push(picEls[i].style.backgroundImage);
	}
	
	if(image){
		image.onclick = function(e){
			if(!image.classList.contains("fullsize")){
				enterViewer();
			}else{
				exitViewer();
			}
		}
		if(nextBtn) nextBtn.onclick = nextPic
		if(prevBtn) prevBtn.onclick = prevPic
	}
	
	function enterViewer(){
		image.classList.add("fullsize");
		content.classList.add("fullheight");
		post.classList.add("hidden");
		menu.classList.add("hidden");
		document.body.classList.add("image-view");
		if(pagination) pagination.classList.add("hidden");
		if(viewerPagination) viewerPagination.classList.remove("hidden");
	}
	
	function exitViewer(){
		image.classList.remove("fullsize");
		content.classList.remove("fullheight");
		menu.classList.remove("hidden");
		post.classList.remove("hidden");
		document.body.classList.remove("image-view");		
		if(pagination) pagination.classList.remove("hidden");
		if(viewerPagination) viewerPagination.classList.add("hidden");
	}
	
	function nextPic(){
		if(currentPic < totalPics - 1){
			currentPic++;
			image.style.backgroundImage = pics[currentPic];
		}
	}
	
	function prevPic(){
		if(currentPic > 0){
			currentPic--;
			image.style.backgroundImage = pics[currentPic];
		}
	}
	
	document.onkeydown = function(evt) {
		evt = evt || window.event;
		var isEscape = false;
		if ("key" in evt) {
			isEscape = (evt.key === "Escape" || evt.key === "Esc");
		} else {
			isEscape = (evt.keyCode === 27);
		}
		if (isEscape) {
			exitViewer();
		}else{
			if(evt.key === "ArrowRight"){
				nextPic();
			}else if(evt.key === "ArrowLeft"){
				prevPic();
			}
		}
	};
		
}