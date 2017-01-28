document.addEventListener('DOMContentLoaded', function(){

	function httpGetAsync(theUrl, callback)
	{
	    var xmlHttp = new XMLHttpRequest();
	    xmlHttp.onreadystatechange = function() { 
	        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
	            callback(xmlHttp.responseText);
	    }
	    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
	    xmlHttp.send(null);
	}

	var checkPageButton = document.getElementById('checkPage');
	checkPageButton.addEventListener('click', function(){
		chrome.tabs.getSelected(null, function(tab){
				var url = 'http://127.0.0.1:5000/api/download_images/?url='+tab.url;
				var url_clean = url.replace(/&/gi, '%26').replace(/\+/g, "%2B");
				httpGetAsync(url_clean, function(){
					alert("call is done.")
				});
		});
	},false);
},false);