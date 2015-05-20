var time = Date.now();
var round = 0;
var bestclick = 1000;

var page = tabris.create("Page", {
  title: "Spiel für Lina",
  topLevel: true
});


var text = tabris.create("TextView", {
  layoutData: {left: 10, top: 20, right: 10},
  text: "Hallo Lina, sobald der Button erscheint, drücke ihn so schnell Du kannst. Das Spiel sagt Dir wie schnell Du warst und merkst sich Deine Bestzeit. Viel Spaß!",
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

/*
tabris.create("Button", {
  layoutData: {left: 10, top: 10},
  text: "Button"
}).on("select", function() {
  this.set("text", "Pressed " + (++round) + " times");
}).appendTo(page);
*/

var button = tabris.create("Button", {
  layoutData: {centerX: 0, centerY: 0},
  text: "Press me!"
}).on("select", function() {
  calculateRespone();
}).appendTo(page);


// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function calculateRespone() {
  var clicktime = Date.now() - time;
  text2.set("text", "Aktuelle Reaktionszeit: " + clicktime);
  if (clicktime < bestclick) {
  bestclick = clicktime;
  text.set("text", "Bestzeit: " + bestclick);
  }
  button.dispose();
  setTimeout(function() {
    time = Date.now();
  
  button = tabris.create("Button", {
  layoutData: {centerX: getRandomInt(-100, 100), centerY: getRandomInt(-200, 200)},
  text: "GoGoGo!"
}).on("select", function() {
  calculateRespone();
}).appendTo(page);

  }.bind(text2), 2000);

}

page.open();