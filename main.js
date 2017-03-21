movies = []

movies.push(
  {
    title: "Forrest Gump",
    directorList: ["Robert Zemeckis"],
    genre: ["Comedy", "Drama", "Romance"],
    year: "1994",
    actorList: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Mykelti Williamson"]
  }
)

movies.push(
  {
    title: "Big Hero 6",
    directorList: ["Don Hall", "Chris Williams"],
    genre: ["Animation", "Action", "Adventure"],
    year: "2014",
    actorList: ["Ryan Potter", "Scott Adsit", "Jamie Chung", "T.J. Miller", "Damon Wayons Jr."]
  }
)

movies.push(
  {
    title: "Se7en",
    directorList: ["David Fincher"],
    genre: ["Crime", "Drama", "Mystery"],
    year: "1995",
    actorList: ["Morgan Freeman", "Brad Pitt", "Kevin Spacey"]
  }
)

movies.push(
  {
    title: "Once Upon a Time in China",
    directorList: ["Hark Tsui"],
    genre: ["Action", "Adventure", "Biography"],
    year: "1991",
    actorList: ["Jet Li", "Biao Yuen", "Rosamund Kwan", "Jacky Cheung"]
  }
)

movies.push(
  {
    title: "The Lion King",
    directorList: ["Roger Allers", "Rob Minkoff"],
    genre: ["Animation", "Adventure", "Drama"],
    year: "1994",
    actorList: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"]
  }
)

function compare(a,b) {
  if (a.title < b.title)
    return -1;
  if (a.title > b.title)
    return 1;
  return 0;
}
console.log(movies)

movies.sort(compare);
console.log(JSON.stringify(movies))

element = document.getElementById('content')
element.innerHTML = "<h1>Favorite Movies</h1>"

element.innerHTML += "<table><tbody></tbody></table>"
list = document.querySelector("#content table tbody")
list.innerHTML += "<tr><th>Title</th><th>Directors</th><th>Genre</th><th>Year</th><th>Actors</th>"

movies.forEach(function(x){
  var row = ""
  row += "<tr><td>" + x.title + "</td>"
  row += "<td>" + x.directorList+ "</td>"
  row += "<td>" + x.genre+ "</td>"
  row += "<td>" + x.year+ "</td>"
  row += "<td>" + x.actorList+ "</td></tr>"
  list.innerHTML += row
})
element.innerHTML += "<h1>Worst Movies</h1>"
element.innerHTML += "<table id=\"worst\"><tbody></tbody></table>"
list = document.querySelector("#content #worst tbody")
list.innerHTML += "<tr><th>Title</th><th>Directors</th><th>Genre</th><th>Year</th><th>Actors</th>"
