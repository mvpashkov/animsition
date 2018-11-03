
// Let's create a new file in the JS folder, named main.js
//and add our programming.

$(".animsition").animsition({
    inClass: 'fade-in-right-lg',
    outClass: 'fade-out-right-lg',
    inDuration: 1000, //1 sec
    outDuration: 500,
    //linkElement: 'header a:not([href^="#"])', // meaning any links except ones that start with a #
    linkElement: 'a:not([target="_blank"]):not([href^="#"])'
//http://git.blivesta.com/animsition/

});


//First, we select the outer div for the page, the one we added the class name to.
//Then we call the plugin on that selection.
//This runs the special programming in the plugin, and yes, that's it!
//That's all we need for now.

$(".header").sticky(/*{topSpacing:0}*/{
  //navigation
  //container - our wrapper navigation
  getWidthFrom: '.container',
  responsiveWidth: true
  //tell our pluging be responsive
  });


/*we just need to select the element on the page that we want to stick, and
call the stick plugin
looks like we can also set the placement of the sticky item thth the topSpacing option.
So 0 means the top of the browser window, I guess*/

$('.header').on('sticky-start', function () {
  //do somthing when stick beging
  $('.description').html('We build <strong>great</strong> apps');

});

//sticky-start: When the element becomes sticky.
//прочел в readme

$('.header').on('sticky-end', function () {
  //do somthing when stick beging
  // const heder =
  $('.description').html('We build apps');

});


$('.work').sticky({
  topSpacing: 60,
  // номер эксперементальным путем
  getWidthFrom: '.container',
  responsiveWidth: true
  // tells our stuff be responsive
})
//<h5 class="work">Want us to work on your project?</h5>


$('.work').on('sticky-start', function () {
  //do somthing when stick beging
  // Whatever i place inside the braces will run when this text block sticks
  $(this).append(' <a href="mailto:email@website.com" class="email-text">Email&nbsp;us</a>');

});

$('.work').on('sticky-end', function () {
  //do somthing when stick beging
  // const heder =
  $('.email-text').remove();

});
