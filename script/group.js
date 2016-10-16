var timeout;
function scrollToTop(){
	if(document.body.scrollTop !=0 || document.documentElement.scrollTop !=0){
		window.scrollBy(0,-30);
		timeout = setTimeout('scrollToTop()',10);
	}
	else{
		clearTimeout(timeout);
	}
}


function popUpSlider(pos){
	


	var menubarHeight = document.getElementById("menu_bar").offsetHeight;
	var welcomeHeight = document.getElementById("welcome").offsetHeight;
	var memberHeight = document.getElementById("member").offsetHeight;

	var sum = menubarHeight + welcomeHeight + memberHeight / 8 ;
	
	var x = document.getElementById("frame").style.display = "block";
	x = document.getElementById("frame").style.top = sum;
	var iframeWidth = document.getElementById("frame").offsetWidth;
	var bodyWidth = document.getElementById("top").offsetWidth;

	
	var rightOfCloseButton = bodyWidth - iframeWidth;
	
	var close = document.getElementById("exit");
	close.style.display = "block";
	close.style.top = sum + 20;
	close.style.right = rightOfCloseButton - 20;
	close.style.opacity = 0.5;
	
	

	var frame = document.getElementById("frame");
	if(pos == 1){

		sessionStorage.setItem('mem' , 'MinhLuan');
		
	}
	if(pos == 2){

		sessionStorage.setItem('mem' , 'NgocThien');
			
	}
	frame.src = "members.html";
	
	
	
}

function exit(){
	

	var frame = document.getElementById("frame");
	var close = document.getElementById("exit");

	frame.style.display = "none";
	close.style.display = "none";

}