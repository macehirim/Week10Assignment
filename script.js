// created function to add row to table by element ID. Row will add after 3 default rows
// each cell is set to take in the prompt functions.

function addTeam () {
    var table = document.getElementById("nbaTable");
    var row = table.insertRow(4);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = enterTeam();
    cell2.innerHTML = enterPg();
    cell3.innerHTML = enterSg();
    cell4.innerHTML = enterSf();
    cell5.innerHTML = enterPf();
    cell6.innerHTML = enterC();
}
function enterTeam () {
    return prompt (`Enter Team Name`)
}
function enterPg () {
    return prompt (`Enter Point Guard`)
}
function enterSg () {
    return prompt (`Enter Shooting Guard`)
}
function enterSf () {
    return prompt (`Enter Small Forward`)
}
function enterPf () {
    return prompt (`Enter Power Forward`)
}
function enterC () {
    return prompt (`Enter Center`)
}