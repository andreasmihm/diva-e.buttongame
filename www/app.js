var time = Date.now();
var round = 0;
var bestclick = 1000;

var page = tabris.create("Page", {
  title: "diva-e Game",
  topLevel: true
});


var text = tabris.create("TextView", {
  layoutData: {left: 10, top: 20, right: 10},
  text: "Hallo diva, sobald das Bild erscheint, drücke es so schnell Du kannst. Das Spiel sagt Dir wie schnell Du warst und merkt sich Deine Bestzeit. Viel Spaß!",
  alignment: "left"
}).appendTo(page);


var text = tabris.create("TextView", {
  layoutData: {left: 10, top: 120, right: 10},
  text: "Bestzeit:",
  alignment: "left"
}).appendTo(page);

var text2 = tabris.create("TextView", {
  layoutData: {left: 10, top: 140, right: 10},
  text: "Aktuelle Reaktionszeit:",
  alignment: "left"
}).appendTo(page);



var imagebutton;

createnewbutton();


// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createnewbutton(){
  var buttonx = getRandomInt(10, 200);
  var buttony = getRandomInt(160, 460);
  var imagenumber = getRandomInt(1, 10);

imagebutton = tabris.create("ImageView", {
  layoutData: {left: buttonx, top: buttony},
  image: {src: "images/" + imagenumber + ".JPG"},
  highlightOnTouch: true
}).on("tap", function() {
   imagebutton.dispose();
   calculateTouchTime();
}).appendTo(page);

}

function calculateTouchTime(){
  var clicktime = Date.now() - time;
  text2.set("text", "Aktuelle Reaktionszeit: " + clicktime);
  if (clicktime < bestclick) {
  bestclick = clicktime;
  text.set("text", "Bestzeit: " + bestclick);
  }
  setTimeout(function() {
    time = Date.now();
    createnewbutton();
  }.bind(page), 2000);
}

page.open();