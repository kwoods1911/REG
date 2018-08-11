
$(document).ready(function(){

	$('.menuIcon').click(function(){
	$('.mobileContent').slideToggle(400,'swing');
	
})

// On hover display border around employee card.
var employeeHover = $('.employeeFocus');
employeeHover.hover(function(){
	$(this).animate({borderTopColor:" rgba(249,173,10,1)",
		borderBottomColor:"rgba(249,173,10,1)",
		borderRightColor:'rgba(249,173,10,1)',
		borderLeftColor:'rgba(249,173,10,1)'},
		'5000');
}, function(){
	$(this).animate({borderTopColor:'none',
		borderBottomColor:'none',
		borderRightColor:'none',
		borderLeftColor:'none'},
		'5000');
});

});

// Manual Slide Show
var slideIndex =1;

showImage(slideIndex);

function plusIndex(n){
	slideIndex = slideIndex + n;
	showImage(slideIndex);
}

function currentSlide(n){
	showImage(slideIndex = n);
}





function showImage(n){
	var slide = document.getElementsByClassName("slide");
// At the end of the slide. Slide will reset when clicking right
	if(n> slide.length){
		slideIndex=1
	}
// Slide will reset when clicking left
	if(n<1){
		slideIndex = slide.length
	}
// Initialize slider
// Loop through all slides and set display to none.
	for(var i= 0; i<slide.length; i++){
		slide[i].style.display = "none";
	};
	//Initialize slider by finding the first slide and setting it to display block.
	slide[slideIndex-1].style.display = "block";
}

// End of slide show code

