var gameopen = false;
var gamestart = false;
var form = 'mobi';
var score = 0;
var advancegame;
var lastObjPos = 0;
var level = 1;
$('.score').text(score);

$(document).on('click','.startbutton',function(){
  $('.startbutton').remove();
  $('.game').css({"width":$(window).width(),"height":"300px"});
  $('.howtoplay').css({"display":"block"})
  gameopen = true;
})

$(document).on('keydown',function(e){
  if(gamestart){
    if(e.which == 38){
      e.preventDefault();
      form = 'desk';
      $('.player').removeClass('mobi');
      $('.player').addClass('desk');
      $('.player').css({"animation-name":"deskwalk"})
    }
    if(e.which == 40){
      e.preventDefault();
      form = 'mobi';
      $('.player').removeClass('desk');
      $('.player').addClass('mobi');
      $('.player').css({"animation-name":"mobiwalk"})
    }
  }
  if(e.keyCode == 32){
    if(gameopen){
      e.preventDefault();
    	if(gamestart == false){
      	$('.scenery').children().each(function(){
        	$(this).remove();
        })
        $('.scenery').css({"left":"0px"});
        lastObjPos = 0;
        score = 0;
        $('.score').text(0)
      	gameset();
        gamestart = true;
        $('.gameover').css({"display":"none"});
        $('.howtoplay').remove();
        $('.player').css({"animation-name": form + "walk","animation-duration":"1s","animation-iteration-count":"infinite"})
        advancegame = setInterval(advance, 5);
      }
    }
  }
})

function advance(){
	left = $('.scenery').css("left");
	left = left.slice(0, -2);
  left-=level;
  left = left + "px";
	$('.scenery').css({"left":left});
	$('.scenery').children().each(function(){
  collision($(this))
  });
}

function collision(el){
  if(el.offset().left <= $('.player').offset().left + $('.player').width() && el.offset().left >= $('.player').offset().left && el.offset().top >= $('.player').offset().top){
    if(el.hasClass('coin')){
      el.remove();
      addObject();
      score++;
      level = 1 + (0.5 * Math.floor(score/5))
      $('.score').text(score);
    }
    else if(el.hasClass('obstacle')){
    	gamestart = false;
      clearInterval(advancegame);
      $('.player').css({"animation-name":""});
      $('.gameover').css({"display":"block"});
      $('.endmessage').text("GAME OVER!!!");
      $('.finalscore').text("Score: " + score);
    }
    else if(el.hasClass('end')){
      gamestart = false;
      clearInterval(advancegame);
      $('.player').css({"animation-name":""});
      $('.gameover').css({"display":"block"});
      $('.endmessage').text("WINNER!!!");
      $('.finalscore').text("Score: " + score);
    }
  }

	if(el.offset().left < 0){
  	el.remove()
    addObject();
  }
}

function gameset(){
	addObject();
  addObject();
  addObject();
  addObject();
  addObject();
}

function addObject(){
  which = Math.random();
  console.log(which)
  if(which >= 0.3){
    //add a coin
    var newCoin = document.createElement('div');
    $(newCoin).addClass('coin');
    height = Math.random();
    if(height >= 0.5){
      $(newCoin).css({"top":"100px"});
    }
    else{
      $(newCoin).css({"top":"200px"});
    }
    dist = Math.random() * 500 + lastObjPos + 200;
    lastObjPos = dist;
    dist = dist + "px"
    $(newCoin).css({"left":dist});
    $('.scenery').append(newCoin)
  }
  else{
  	//add obstacle
    var newObstacle = document.createElement('div');
    $(newObstacle).addClass('obstacle');
    $(newObstacle).css({"top":"100px"});
    dist = Math.random() * 500 + lastObjPos + 200;
    lastObjPos = dist;
    dist = dist + "px";
    $(newObstacle).css({"left":dist});
    $('.scenery').append(newObstacle);
  }
}