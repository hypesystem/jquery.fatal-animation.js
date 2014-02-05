Animations that remove the element after completion
===================================================

It's very simple. You want to fade out an element, and then forget about it. You don't
want it to clutter your DOM. You just want it to go away. Great! Use this lib!

    $("#element").fadeOutRemove();
    
The API is the same as `fadeOut` and `slideUp` - just add `Remove` to the end, and you're
good to go!

    $("#element").slideUpRemove(function() {
        console.log("Removed #element");
    });
    
Yep.