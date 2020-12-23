// Feedback click

$("#feedback").on('click', function(){
	$("#feedback-form").css("display", "flex").hide().fadeIn();	
});

$("#close-img").on('click', function(){
	$("#feedback-form").fadeOut("slow");
	//function() {$("#feedback-form").css("display", "none")});
	$("#fname").attr("placeholder", "");
	$("#fname").css("box-shadow","");
	$("#fname").css("border","1px solid #c3c3c3");
	$("#fname").val("");
	$("#fphone").attr("placeholder", "");
	$("#fphone").css("box-shadow","");
	$("#fphone").css("border","1px solid #c3c3c3");
	$("#fphone").val("");
	$("#femail").attr("placeholder", "");
	$("#femail").css("box-shadow","");
	$("#femail").css("border","1px solid #c3c3c3");
	$("#femail").val("");
});

// Slider events

var i = 0;

document.addEventListener('DOMContentLoaded', function(){
	var list = $('.slider-img');
	list.slice(1, list.length).css('display', 'none');
});

$("#left-arrow").on('click', slider_left);
$("#right-arrow").on('click', slider_right);

function slider_left(){
	var list = $('.slider-img');
	list.slice(i, i + 1).fadeOut("slow");
	if (i > 0){
		i--;
	}
	else{
		i = list.length - 1;
	}
	list.slice(i, i + 1).fadeIn("slow");
	clearInterval(timeSlide);
	timeSlide = setInterval(slider_right, 4000);
}

function slider_right(){
	var list = $('.slider-img');
	list.slice(i, i + 1).fadeOut("slow");
	if (i < list.length - 1){
		i++;
	}
	else{
		i = 0;
	}
	list.slice(i, i + 1).fadeIn("slow");
	clearInterval(timeSlide);
	timeSlide = setInterval(slider_right, 4000);
}

// Slider timer

var timeSlide = setInterval(slider_right, 4000);

// Form validate

function validation(){
	name_validate();
	phone_validate();
	email_validate();
	tmp = true;
}

// Name validate

function name_validate(){
	if (document.getElementById("fname").value.length <= 0)
	{
		$("#fname").attr("placeholder", "Поле обязательно для заполнения");
		$("#fname").css("box-shadow","inset 0 0 10px rgba(228, 106, 106, 0.75)");
		$("#fname").css("border","1px solid #ff8383");
	}
	else if (document.getElementById("fname").value.length > 0)
	{
		$("#fname").attr("placeholder", "");
		$("#fname").css("box-shadow","");
		$("#fname").css("border","1px solid #c3c3c3");		
	}
}

// Phone validate

function phone_validate(){
	if (document.getElementById("fphone").value.length <= 0)
	{
		$("#fphone").attr("placeholder", "Поле обязательно для заполнения");
		$("#fphone").css("box-shadow","inset 0 0 10px rgba(228, 106, 106, 0.75)");
		$("#fphone").css("border","1px solid #ff8383");
	}
	else if (document.getElementById("fphone").value.length > 0)
	{
		$("#fphone").attr("placeholder", "");
		$("#fphone").css("box-shadow","");
		$("#fphone").css("border","1px solid #c3c3c3");
	}
}

// Email validate

function email_validate(){
	if (document.getElementById("femail").value.length <= 0)
	{
		$("#femail").attr("placeholder", "Поле обязательно для заполнения");
		$("#femail").css("box-shadow","inset 0 0 10px rgba(228, 106, 106, 0.75)");
		$("#femail").css("border","1px solid #ff8383");
	}
	else if (document.getElementById("femail").value.length > 0)
	{
		$("#femail").attr("placeholder", "");
		$("#femail").css("box-shadow","");
		$("#femail").css("border","1px solid #c3c3c3");
	}
}

// Button validate

var tmp = false;

$("#fname").keyup(function(){
	if (tmp)
	{
		name_validate();
	}
});
$("#fphone").keyup(function(){
	if (tmp)
	{
		phone_validate();
	}
});
$("#femail").keyup(function(){
	if (tmp)
	{
		email_validate();
	}
});

$("#btn").on('click', validation);