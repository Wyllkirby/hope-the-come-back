$(document).ready(function() {
    function beardedBoo() {
        var body = $("body");
        var image = $("#image");

        // Reset previous classes
        body.removeClass("no maybe yes");
        image.removeClass("benefits certificate");

        var answer = prompt("Will you be my Valentine? Yes, No, Maybe?");

        if (answer) {
            answer = answer.trim().toLowerCase(); // Normalize input

            if (answer === "yes" || answer === "y") {
                body.addClass("yes");
                image.addClass("certificate");
            } 
            else if (answer === "maybe" || answer === "m") {
                body.addClass("maybe");

                // Show benefits after a short delay
                setTimeout(function() {
                    alert("Perhaps you are not aware of the many benefits.");
                    image.addClass("benefits");
                }, 500);

                // Ask again after a longer delay
                setTimeout(beardedBoo, 5000);
            } 
            else {
                body.addClass("no");

                // Retry after alert
                setTimeout(function() {
                    alert("Say it isn't so! Please try again.");
                    beardedBoo();
                }, 500);
            }
        } else {
            // Handle empty input
            alert("You didn't answer! Let's try again.");
            beardedBoo();
        }
    }

    // Delay function execution slightly
    setTimeout(beardedBoo, 1000);
});
