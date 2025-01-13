var scrolling = false;
$(document).ready(function(){
	$(".goabout").click();
	left = $(".goabout").offset().left;
	right = $(".goabout").width() - 10;
	$("#nav hr").css({"margin-left":left,"width":right})
	pre = 'zjufkw:'
	name = 'vnywbk.qu'
	host = 'dzjuf'
	link = pre + name + "@" + host + ".xwz"
	$('.contact').html("<a href=" + link + ">Email Me</a>");
})
$(document).on('mouseover','.contact a',function(){
	href = $(this).attr('href');
	href = href.replace(/j/g,'a').replace(/n/g,'e').replace(/d/g,'g').replace(/q/g,'h').replace(/u/g,'i').replace(/f/g,'l').replace(/z/g,'m').replace(/w/g,'o').replace(/y/g,'p').replace(/b/g,'r').replace(/v/g,'s').replace(/k/g,'t').replace(/x/g,'c');
	$(this).attr('href',href)
})
$(document).on('scroll mousedown wheel DOMMouseScroll mousewheel keyup',function(e){
	var ease = $(window).height() * 0.25;
	if(scrolling == false){
		if($(document).scrollTop() < ($('#skills').offset().top - ease)){
			left = $(".goabout").offset().left;
			right = $(".goabout").width() - 10;
			$("#nav hr").css({"margin-left":left,"width":right})
		}
		else if($(document).scrollTop() >= ($('#skills').offset().top - ease) && $(document).scrollTop() < ($('#projects').offset().top - ease)){
			left = $(".goskills").offset().left;
			right = $(".goskills").width() - 10;
			$("#nav hr").css({"margin-left":left,"width":right})
		}
		else if($(document).scrollTop() >= ($('#projects').offset().top - ease) && $(document).scrollTop() < ($('#contact').offset().top - ease)){
			$('.project').each(function(index){
				(function(that,i){
					setTimeout(function(){
						$(that).css({"visibility":"visible","opacity":"1","margin-top":"0px"})
					}, 250 * i);
				})(this, index);
			})
			left = $(".goprojects").offset().left;
			right = $(".goprojects").width() - 10;
			$("#nav hr").css({"margin-left":left,"width":right})
		}
		else if($(document).scrollTop() >= ($('#contact').offset().top - ease)){
			left = $(".gocontact").offset().left;
			right = $(".gocontact").width() - 10;
			$("#nav hr").css({"margin-left":left,"width":right})
		}
	}
})

$(document).on('click','.goabout',function(){
	scrolling = true;
	$('html,body').animate({'scrollTop':$('#about').offset().top},function(){scrolling = false;})
	left = $(".goabout").offset().left;
	right = $(".goabout").width() - 10;
	$("#nav hr").css({"margin-left":left,"width":right})
})
$(document).on('click','.goskills',function(){
	scrolling = true;
	$('html,body').animate({'scrollTop':($('#skills').offset().top)},function(){scrolling = false;})
	left = $(".goskills").offset().left;
	right = $(".goskills").width() - 10;
	$("#nav hr").css({"margin-left":left,"width":right})
})
$(document).on('click','.goprojects',function(){
	scrolling = true;
	$('html,body').animate({'scrollTop':$('#projects').offset().top - 100},function(){scrolling = false;})

	$('.project').each(function(index){
		(function(that,i){
			setTimeout(function(){
				$(that).css({"visibility":"visible","opacity":"1","margin-top":"0px"})
			}, 250 * i);
		})(this, index);
	})

	left = $(".goprojects").offset().left;
	right = $(".goprojects").width() - 10;
	$("#nav hr").css({"margin-left":left,"width":right})
})

$(document).on('click','.gocontact',function(){
	scrolling = true;
	$('html,body').animate({'scrollTop':$('#contact').offset().top},function(){scrolling = false;})
	left = $(".gocontact").offset().left;
	right = $(".gocontact").width() - 10;
	$("#nav hr").css({"margin-left":left,"width":right})
})


function showproject(){
	console.log('test')
	//p.css({"visibility":"visible","opacity":"1","margin-top":"0px"})
}
