var aboutClick = document.getElementById("about-click");
var aboutSection = document.getElementById("about");

aboutClick.addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('about').scrollIntoView({
    behavior: 'smooth',
    block: "end",
    inline: "nearest"
  });
});

var eventsClick = document.getElementById("events-click");
var eventsSection = document.getElementById("events");

eventsClick.addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('events').scrollIntoView({
    behavior: 'smooth',
    block: "end",
    inline: "nearest"
  });
});

var involvedClick = document.getElementById("involved-click");
var involvedSection = document.getElementById("involved");

involvedClick.addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('involved').scrollIntoView({
    behavior: 'smooth',
    block: "start",
    inline: "nearest"
  });
});
