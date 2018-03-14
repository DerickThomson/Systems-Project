var images = ["./bg1.jpg",
    "./bg2.jpg"];

var currimg = 0;

$(document).ready(function () {

    function loadimg() {

        $('body').animate({ opacity: 1 }, 500, function () {

            //finished animating, minifade out and fade new back in           
            $('body').animate({ opacity: 1 }, 500, function () {

                currimg++;

                if (currimg > images.length - 1) {

                    currimg = 0;

                }

                var newimage = images[currimg];

                //swap out bg src                
                $('body').css("background-image", "url(" + newimage + ")");

                //animate fully back in
                $('body').animate({ opacity: 1 }, 500, function () {

                    //set timer for next
                    setTimeout(loadimg, 3000);

                });

            });

        });

    }
    loadimg();

});