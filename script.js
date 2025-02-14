/* ZOMG. FUNCTION! */
/* I ALSO LEARNED HOW TO DO A LOT OF THIS BY CHANGING .CSS INSTEAD OF ADDING/REMOVING CLASSES, WHICH I LEARNED IS BETTER. I ALSO LEARNED THAT I SHOULD MAKE VARS FOR BODY AND IMAGE SINCE I'M USING THEM MORE THAN ONCE! */
var beardedBoo = function() {
    var body = $('body'),
        image = $("#image");
    body.removeClass("no").removeClass("maybe");
    image.removeClass("benefits").removeClass("certificate");

    var answer = prompt("Will you be my valentine? Yes, No, Maybe?").toLowerCase();
    
    /* .toLowerCase IS BEST PRACTICE! IT'S ALSO OK IF YOU TYPE THE FIRST LETTER INSTEAD OF THE WORD! */
    if (answer == "yes" || answer == 'y') {
        body.addClass("yes");
        image.addClass("certificate");
    } else if (answer == "maybe" || answer == 'm') {
        body.addClass("maybe");

        /* I WANTED THE BG TO CHANGE BEFORE THE ALERT AND THE IMAGE AFTER THE PROMPT AND THE NEXT PROMPT AFTER THAT! 
           I LEARNED THAT IF ALERT AND IMAGE ARE NOT IN THE setTimeout TOGETHER, IT DOES THEM AT THE SAME TIME. */
        setTimeout(beardedBoo, 6000);
        setTimeout(function() {
            alert("Perhaps you are not aware of the many benefits");
            image.addClass("benefits");
        }, 200);

    /* HEY!!! */
    } else {
        body.addClass("no");
        setTimeout(function() {
            alert("Say it isn't so. Please try again.");
            beardedBoo();
        }, 200);
    }
};

setTimeout(beardedBoo, 300);
/* ALL THESE ALERTS/PROMPTS COULD GET ANNOYING, IT'S BEST TO JUST BE MY VALENTINE */
