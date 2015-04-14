var page = tabris.create("Page", {
  title: "Hello, World!",
  topLevel: true
});

 
var textView = tabris.create("TextView", {
  font: "24px",
  layoutData: {centerX: 0, top: 100},
  text: "Hello World 123"
}).appendTo(page);

// Create a push button and add it to the page
var button = tabris.create("Button", {
  text: "Ein Button 50 pix unter textview",
  layoutData: {centerX: 0, top: [textView, 50]}
}).appendTo(page);
 
// Change the text view's text when the button is pressed
button.on("selection", function() {
  textView.set("text", "Totally Rock!");
});


 
 page.open();