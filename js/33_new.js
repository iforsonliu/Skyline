$(document).ready(function(){


	var divWidth=$('#slideBoard').width();  //先抓外面盒子的寬度
	var imgCount=$('#content li').length;   //複數都是陣列,用length來抓
	// alert(divWidth);

	$('#content').width(divWidth * imgCount);
	$('#content li').width(divWidth);

	for (var i = 1; i < imgCount ; i++) {
		$('#contentButton').append('<li></li>');
	} //用for迴圈製造


	$('#contentButton li:nth-child(1)').addClass('clickMe');

	var index = 0;
	$('#contentButton li').click(function(){
		index = $(this).index();
		//  alert(index);
		$('#content').animate({
			left:divWidth * index * -1
		});

		//會動

		$(this).addClass('clickMe');
		$('#contentButton li').not(this).removeClass('clickMe');
	});



});