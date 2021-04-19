$(document).ready(function(){
  $('a').each(function(i,el){
    var tLeft = Math.floor(Math.random()*(window.innerWidth) - 80),
        tTop  = Math.floor(Math.random()*(window.innerHeight) - 80),
        fSize = Math.floor(Math.random()*(60-40)+40);
        $(el).css({
          fontSize: fSize + "px" 
      });
    $(el).css({position:'absolute', left: tLeft, top: tTop,});
    });
});
