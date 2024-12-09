var league = document.getElementById("league");
var siege = document.getElementById("siege")
var valorant = document.getElementById("val")
var fortnite = document.getElementById("fortnite")
var tekken = document.getElementById("tekken")
var popup = document.getElementById("display-game-things");

league.addEventListener("click", function() {
    popup.innerHTML = "My league username is: hwoarang#natty<br><br>My Riot ID is:<br>hwoarang#natty"

})

siege.addEventListener("click", function() {
    popup.innerHTML = "My Rainbow Six Siege/Ubisoft username is:<br>Shikonori"

})

valorant.addEventListener("click", function() {
    popup.innerHTML = "My Valorant username is: hwoarang#natty<br><br>My Riot ID is:<br>hwoarang#natty"

})

fortnite.addEventListener("click", function() {
    popup.innerHTML = "My Fortnite username is: hwoaraangg"

})

tekken.addEventListener("click", function() {
    popup.innerHTML = "My Tekken 8 username is:<br>Shigenori"

})