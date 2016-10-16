function showMember(){	
	var mem = sessionStorage.getItem('mem');
	document.getElementById(mem).style.display = "block";
		
	if (mem == "NgocThien"){
		loadingNgocThien();
	}		
}

function move(number,BarName,labelName) {
	  var elem = document.getElementById(BarName);
	  var width = 0;
	  var id = setInterval(frame, 12);
	  function frame() {
		if (width >= number) {
		  clearInterval(id);
		} else {
		  width++;
		  elem.style.width = width/3 + '%';
		  document.getElementById(labelName).innerHTML = width * 1  + '%';
		}
	  }
}

function loadingNgocThien(){
	move(100,'BarSkill','label');
	move(100,'BarSkill_1','label_1');
	move(100,'BarSkill_2','label_2');
}