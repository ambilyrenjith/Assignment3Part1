//STEP 1
/*var movies = ["Titanic", "Terminator2
              ", "Jurassic Park", "Fast and furious", "Shawshank Redemption"];
window.console.log(movies[1]);*/

//STEP 2
/*var movies = [];
movies[0] = "Titanic";
movies[1] = "Terminator2";
movies[2] = "Jurassic Park";
movies[3] = "Mummy";
movies[4] = "Shawshank Redemption";
window.console.log(movies[0]);*/

//STEP 3
/*var movies = [];
movies[0] = "Titanic";
movies[1] = "Terminator";
movies[2] = "Jurassic Park";
movies[3] = "Mummy";
movies[4] = "Shawshank Redemption";
movies[3] = "Speed";
movies[movies.length] = "Mummy";
window.console.log(movies.length);*/

//STEP 4
/*var movies = [];
movies[0] = "Titanic";
movies[1] = "Terminator 2";
movies[2] = "Jurassic Park";
movies[3] = "Mummy";
movies[4] = "Shawshank Redemption";
delete movies[0];
window.console.log(movies);*/

//STEP 5
/* 
 var movies = [];
 var i;
 movies[0] = "Titanic";
 movies[1] = "Terminator";
 movies[2] = "Jurassic Park";
 movies[3] = "Mummy";
 movies[4] = "Shawshank Redemption";
 movies[5] = "Jungle Book";
 movies[6] = "Basha and the bear ";
for(i = 0 ;i < movies.length ; i = i+1)
    {window.console.log(movies[i]);}
*/


//STEP 6
/*var movies = ["Titanic", "Terminator2", "Jurassic Park", "Mummy returns", "Shawshank Redemption", "Avatar", "Taxi Driver"];
for (var index in movies) {
  window.console.log(movies[index]);
}*/


//STEP 7
/*var movies = ["Titanic", "Terminator2", "Jurassic Park", "Mummy returns", "Shawshank Redemption", "Avatar", "Taxi Driver"];
for (var index in movies) {
    movies.sort();
    console.log(movies[index]);
}*/

/*
STEP 8

var movies = ["Titanic", "Terminator2", "Jurassic Park", "Mummy returns", "Shawshank Redemption", "Avatar", "Taxi Driver"];
var leastFavmovies = [];
leastFavmovies[0] = "Gladiator";
leastFavmovies[1] = "Almost Famous";
leastFavmovies[2] = "Traffic";

window.console.log("Movies I like:\n\n");
for (var i=0; i<movies.length; i++) {
    window.console.log(movies[i]);
}

window.console.log("\nMovies I regert watching:\n\n");
for (var i=0; i<leastFavmovies.length; i++) {
    window.console.log(leastFavmovies[i]);
}
*/



//STEP 9
/*
var movies = ["Titanic", "Terminator2", "Jurassic Park", "Mummy returns", "Shawshank Redemption", "Avatar", "Taxi Driver"];
var leastFavmovies = [];
var newmovies;
leastFavmovies[0] = "Gladiator";
leastFavmovies[1] = "Almost Famous";
leastFavmovies[2] = "Traffic";
movies = movies.concat(leastFavmovies);
newmovies = movies.sort();
window.console.log(newmovies.reverse());
*/


//STEP 10
/*
var movies = ["Titanic", "Terminator2", "Jurassic Park", "Mummy returns", "Shawshank Redemption", "Avatar", "Taxi Driver"];
var leastFavmovies = [];
var newmovies;
var revnewmovies;
var n;
leastFavmovies[0] = "Gladiator";
leastFavmovies[1] = "Almost Famous";
leastFavmovies[2] = "Traffic";
movies = movies.concat(leastFavmovies);
newmovies = movies.sort();
revnewmovies = newmovies.reverse();
n = revnewmovies[revnewmovies.length - 1];
window.console.log(n);
*/


//STEP 11
/*var movies = ["Titanic", "Terminator2", "Jurassic Park", "Mummy returns", "Shawshank Redemption", "Avatar", "Taxi Driver"];
var leastFavmovies = [];
var newmovies;
var revnewmovies;
var n;
leastFavmovies[0] = "Gladiator";
leastFavmovies[1] = "Almost Famous";
leastFavmovies[2] = "Traffic";
movies = movies.concat(leastFavmovies);
newmovies = movies.sort();
revnewmovies = newmovies.reverse();
window.console.log(revnewmovies[0]);*/


//STEP 12
/*var movies = ["Titanic", "Terminator2", "Jurassic Park", "Mummy returns", "Shawshank Redemption", "Avatar", "Taxi Driver"];
var leastFavmovies = [];
leastFavmovies[0] = "Gladiator";
leastFavmovies[1] = "Almost Famous";
leastFavmovies[2] = "Traffic";
movies = movies.concat(leastFavmovies);
movies.splice(7, 8, "Avengers", "The Graduate", "The Godfather");
window.console.log(movies);*/

//STEP 13
/*var employee1 = [];
var employee = [];
var i;
employee1["id"] = 4537;
employee1["name"] = "Sally";
employee1["title"] = "Web developer";
employee1["Department"] = "Engineering";
employee1["isCurrent"] = true;
employee.push(employee1);
var employee2 = [];
employee2["id"] = 1234;
employee2["name"] = "George";
employee2["title"] = "Web developer";
employee2["Department"] = "Engineering";
employee2["isCurrent"] = true;
employee.push(employee2);
window.console.log(employee.length);
window.console.log(employee[1].name);*/


//STEP 14
/*var employee1 = [];
var employee = [];
var i;
employee1["id"] = 4537;
employee1["name"] = "Sally";
employee1["title"] = "Web developer";
employee1["Department"] = "Engineering";
employee1["isCurrent"] = true;
employee.push(employee1);
var employee2 = [];
employee2["id"] = 1234;
employee2["name"] = "George";
employee2["title"] = "Web developer";
employee2["Department"] = "Engineering";
employee2["isCurrent"] = true;
employee.push(employee2);
window.console.log(employee.length);
for (i = 0; i < employee.length; i = i + 1) {
    window.console.log(employee[i].name);
}*/

//STEP 15
/*var employee1 = [];
var employee = [];
var i;
employee1["id"] = 4537;
employee1["name"] = "Sally";
employee1["title"] = "Web developer";
employee1["Department"] = "Engineering";
employee1["isCurrent"] = true;
employee.push(employee1);

var employee2 = [];
employee2["id"] = 1234;
employee2["name"] = "George";
employee2["title"] = "Web developer";
employee2["Department"] = "Engineering";
employee2["isCurrent"] = true;
employee.push(employee2);

var employee3 = [];
employee3["id"] = 1234;
employee3["name"] = "Stella";
employee3["title"] = "Buissness Analyst";
employee3["Department"] = "Engineering";
employee3["isCurrent"] = false;
employee.push(employee3);
window.console.log(employee.length);
for (i = 0; i < employee.length; i = i + 1) {
    if (!(employee[i].isCurrent == false)) window.console.log(employee[i].name);
}*/

//STEP 16
/*
var movies = [["Titanic", 5], ["Gladiator", 4], ["Almost Famous", 3], ["Traffic", 2], ["Jurassic Park", 1]];
for (var i=0; i< movies.length; i++) {
    var rating = movies[i];
    var moviename = rating.filter(function (item) {
        if (typeof item === "string")
            return item;
    });
    
    window.console.log(moviename);
}
*/

//PRACTICE WITH FUNCTIONS*/

//STEP 1
/*"use strict";
var displayMessage = function (name) {
    window.console.log(name);
}
displayMessage("Sally");*/

//STEP 2
/*function calculate(a, b) {
    return (a % b);
}
var output = calculate(50, 3);
window.console.log(output);

//STEP 3
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
var i;
var showEmployee = function (name) {
    for (i = 0; i < name.length; i++) {
        window.console.log(name[i]);
    }
}
showEmployee(employees);*/