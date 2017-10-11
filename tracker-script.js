/* snapecode mousetracker demo
event listener constantly monitoring event

1. set up two constants

2. get viewport

3. 3 event listeners a the bottom 
*/

const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const CIRCLE2= document.querySelector('.circle2');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition = windowWidth - e.clientX - 26;
    var verticalPosition= windowHeight - e.clientY - 26;
 
    var horizontalPosition2 = windowWidth + e.clientX - 26;
    var verticalPosition2= windowHeight + e.clientY - 26;

    // Set horizontal and vertical position.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';

    CIRCLE2.style.left = horizontalPosition2 + 'px';
    CIRCLE2.style.top = verticalPosition2 +'px';
}

function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "green";
    CIRCLE.style.borderColor = "green";

   // CIRCLE2.style.backgroundColor = "blue";
   // CIRCLE2.style.borderColor = "blue"
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);
//ssCIRCLE2.addEventListener('mouseenter2', changeColorOnTouch, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
//CIRCLE2.addEventListener('mouseleave2ss', function(){CIRCLE2.removeAttribute("style");}, false);


