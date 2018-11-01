
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

