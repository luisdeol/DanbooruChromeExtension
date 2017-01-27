document.addEventListener('DOMContentLoaded', function(){
	var checkPageButton = document.getElementById('checkPage');
	checkPageButton.addEventListener('click', function(){
		chrome.tabs.getSelected(null, function(tab){
				var i = document.createElement("img");
				var url = 'http://127.0.0.1:8000/DanbooruAPI/downloadImagesUrl/?url='+tab.url;
				//var url_clean = url.replace(/&/gi, '%26');
				var url_clean = url.replace(/&/gi, '%26').replace(/\+/g, "%2B");
				//var second_url_clean = url_clean.replace("/\+"gi, '%2B');
				i.src = url_clean
				alert(i.src);	
		});
	},false);
},false);