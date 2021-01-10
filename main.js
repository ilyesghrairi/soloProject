var yourBet=[
{
	id:1,
    team1:'Esperance Sportive De Tunis',
    team2:'Club Africain',
	bet:""
},{
	id:2,
    team1:'Etoile Du Sahel',
    team2:'Club Sportive Sfaxien',
	bet:""
},{
	id:3,
    team1:'Stade Tunisien',
    team2:'Club athlétique Bizertain',
	bet:""
},{
	id:4,
    team1:'Olympique Beja',
    team2:'Etoile Sportive De Metlaoui',
	bet:""
},{
	id:5,
    team1:'Union Sportive De Tataouine',
    team2:'Union Sportive De Benguerdane',
	bet:""
},{
	id:6,
    team1:'Union Sportive De Monastir',
    team2:'Jeunesse Sportive Kairouanaise',
	bet:""
},{
	id:7,
    team1:'Avenie Sportive De Soliman',
    team2:'Avenir Sportive De Rejiche',
	bet:""
}
]
function showResult(){
var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
for (var i = yourBet.length - 1; i >= 0; i--) {
	// Insert a row at the end of table
var newRow = tbodyRef.insertRow();

// Insert a cell at the end of the row
var newCell1 = newRow.insertCell();
// Append a text node to the cell
var newText1 = document.createTextNode(yourBet[i].team1);
newCell1.appendChild(newText1);

// Insert a cell at the end of the row
var newCell2 = newRow.insertCell();
// Append a text node to the cell
var newText2 = document.createTextNode(yourBet[i].team2);
newCell2.appendChild(newText2);

// Insert a cell at the end of the row
var newCell3 = newRow.insertCell();
// Append a text node to the cell
var newText3 = document.createTextNode(yourBet[i].bet);
newCell3.appendChild(newText3);
}
}


function f1(val){  
  
for (var i = yourBet.length - 1; i >= 0; i--) {
	if(yourBet[i].id==val.id){
		yourBet[i].bet=val.bet;
		break;
	}
}
}


$(function(){
 $(".close-btn").click(function(){
    $(".menu").toggleClass("menu-open");
    $(this).toggleClass("open-btn");
 });
});


$('ul#father>li').hover(function(){
    $(this).find('ul#son').show(400); 
},function(){
	$(this).find('ul#son').hide(400);        
});