// Clicking the button
// select the .instructions div class
let instruct = document.querySelector(".instructions");

// select the button element to be clicked
let button = document.querySelector("button");


// Add event listener for clicking the button - this replaces the text. Adding unicode for line breaks, bullets, and tab.
button.addEventListener("mouseover", () => {
  
  // change the CSS styles through JavaScript
  instruct.style.color="#fff";
 instruct.style.backgroundColor="#444";
  
  // changing the content of the website using .innerText
  instruct.innerText = "1. Include personal and professional information about yourself, including:\n \u000b\u2022 Full name\n  \u000b\u2022 Working link to your email\n   \u000b\u2022 At least one fun or interesting fact about you\n  2. Use headers or different font sizes to break out content into different sections\n  3. Use CSS to implement at least three different colors (through text, shapes, borders, backgrounds, etc.)\n   4. Include at least one appropriately sized image. If you need to upload photos, use a free hosting site like imgur.com. You cannot link to photos from your computer directly.\n  5. Not have any “broken” HTML that appears on the site or the appearance of any text on the page that is not human readable. Any text on the page that looks like HTML, means there is broken HTML. \n\n...I wonder what happens if you click the button instead of hovering over it?"
});


// what happens when you click the button
button.addEventListener("click", () => {
  
// changing the content of the website using .innerText
  instruct.innerText = "Hey! You clicked the button. Mouse over the button to get the project instructions back."
  
//   change the CSS styles through JavaScript
  instruct.style.color="blue"; instruct.style.backgroundColor="yellow";
});