
window.onload = function(){

	var image = document.getElementsByClassName("right-picture")[0];
	var post = document.getElementsByClassName("post")[0];
	var menu = document.getElementById("menu");
	
	if(image){
		image.onclick =  function(e){
			if(!image.classList.contains("fullsize")){
				image.classList.add("fullsize");
				post.classList.add("hidden");
				menu.classList.add("hidden");
				document.body.classList.add("image-view");
			}else{
				image.classList.remove("fullsize");
				menu.classList.remove("hidden");
				post.classList.remove("hidden");
				document.body.classList.remove("image-view");
			}
		}
	}
		
}