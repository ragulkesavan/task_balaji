function progress(percent, $element) {
	var progressBarHeight = (100-percent) * $element.height() / 100;
	var colorpercent = (255*(percent/100)).toFixed(0);
	var color = null;
	
	if (percent <=50) {
		color = "rgba(255," + colorpercent*2 + ",0,1)";
	} else {
		color = "rgba(" + (255-colorpercent)*3 + ",255,0,1)";
	}
	
	$element.animate({ backgroundColor: color }, 500).find('div').animate({ height: progressBarHeight }, 500);
}

	var delay = (function(){
	  var timer = 0;
	  return function(callback, ms){
	    clearTimeout (timer);
	    timer = setTimeout(callback, ms);
	  };
	})();
var l1=[[10,40,20,30,50,60,70,80,90,100,50,20,80,45,87,65,54,34,76,46],[23,34,45,56,67,78,89,90,47,58,79,63,96,25,79,24,68,54,86,34],[92,73,56,47,24,58,47,70,46,57,69,08,36,58,36,96,84,25,85,36]];
var i=0;
function func() {
		var j=0;
    for (j = 1; j < 21; j++) {
		progress(l1[i][j-1], $('#progressBar'+j));
    }
    i=i+1;
	}
 var k=1;
 for (k = 1; k < 21; k++)  {
 $(function() {
	progress(100, $('#progressBar'+k));
  });
  }
setInterval(func, 1000);
	
