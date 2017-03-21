movies = []

movies.push(
  {
    title: "Forrest Gump",
    directorList: ["Robert Zemeckis"],
    genre: ["Comedy", "Drama", "Romance"],
    year: "1994",
    actorList: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Mykelti Williamson"],
    rating: ["8.8/10", "82/100"]
  }
)

movies.push(
  {
    title: "Big Hero 6",
    directorList: ["Don Hall", "Chris Williams"],
    genre: ["Animation", "Action", "Adventure"],
    year: "2014",
    actorList: ["Ryan Potter", "Scott Adsit", "Jamie Chung", "T.J. Miller", "Damon Wayons Jr."],
    rating: ["7.9/10", "74/100"]
  }
)

movies.push(
  {
    title: "Se7en",
    directorList: ["David Fincher"],
    genre: ["Crime", "Drama", "Mystery"],
    year: "1995",
    actorList: ["Morgan Freeman", "Brad Pitt", "Kevin Spacey"],
    rating: ["8.6/10", "65/100"]
  }
)

movies.push(
  {
    title: "Once Upon a Time in China",
    directorList: ["Hark Tsui"],
    genre: ["Action", "Adventure", "Biography"],
    year: "1991",
    actorList: ["Jet Li", "Biao Yuen", "Rosamund Kwan", "Jacky Cheung"],
    rating: ["7.4/10", "N/A"]
  }
)

movies.push(
  {
    title: "The Lion King",
    directorList: ["Roger Allers", "Rob Minkoff"],
    genre: ["Animation", "Adventure", "Drama"],
    year: "1994",
    actorList: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
    rating: ["8.5/10",  "83/100"]
  }
)

function compare(a,b) {
  if (a.rating[0] < b.rating[0])
    return -1;
  if (a.rating[0] > b.rating[0])
    return 1;
  return 0;
}
console.log(movies)

movies.sort(compare);
console.log(JSON.stringify(movies))

element = document.getElementById('content')
element.innerHTML = "<h1>Favorite Movies</h1>"

element.innerHTML += "<table class=\"table\"><tbody></tbody></table>"
list = document.querySelector("#content table tbody")
list.innerHTML += "<tr><th>Title</th><th>Directors</th><th>Genre</th><th>Year</th><th>Actors</th><th>IMDB Rating</th><th>Metascore Rating</th></tr>"

movies.forEach(function(x){
  var row = ""
  row += "<tr><td>" + x.title + "</td>"
  row += "<td>" + x.directorList+ "</td>"
  row += "<td>" + x.genre + "</td>"
  row += "<td>" + x.year + "</td>"
  row += "<td>" + x.actorList + "</td>"
  row += "<td>" + x.rating[0] + "</td>"
  row += "<td>" + x.rating[1] + "</td></tr>"
  list.innerHTML += row
})
element.innerHTML += "<h1>Worst Movies</h1>"
element.innerHTML += "<table class=\"table\" id=\"worst\"><tbody></tbody></table>"
list = document.querySelector("#content #worst tbody")
list.innerHTML += "<tr><th>Title</th><th>Directors</th><th>Genre</th><th>Year</th><th>Actors</th><th>IMDB Rating</th><th>Metascore Rating</th></tr>"
