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

var resultBet=[
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

function showMyBet(){
  var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
 for (var i = 0; i < yourBet.length ; i++) {
   var newRow = tbodyRef.insertRow();
   var newCell1 = newRow.insertCell();
   var newText1 = document.createTextNode(yourBet[i].team1);
  newCell1.appendChild(newText1);
   var newCell2 = newRow.insertCell();
   var newText2 = document.createTextNode(yourBet[i].team2);
  newCell2.appendChild(newText2);
   var newCell3 = newRow.insertCell();
   var newText3 = document.createTextNode(yourBet[i].bet);
  newCell3.appendChild(newText3);
}
}

var bet=["1","x","2"];
function resultOfTheMatches(){
  var tbodyRef = document.getElementById('myTable2').getElementsByTagName('tbody')[0];
 for (var i = 0; i < resultBet.length ; i++) {
  var randomBet=Math.floor(Math.random()*3);
   resultBet[i].bet=bet[randomBet]
   var newRow = tbodyRef.insertRow();
   var newCell1 = newRow.insertCell();
   var newText1 = document.createTextNode(yourBet[i].team1);
  newCell1.appendChild(newText1);
   var newCell2 = newRow.insertCell();
   var newText2 = document.createTextNode(yourBet[i].team2);
  newCell2.appendChild(newText2);
   var newCell3 = newRow.insertCell();
   var newText3 = document.createTextNode(bet[randomBet]);
  newCell3.appendChild(newText3);
 }
}




function f1(val){  
  
for (var i = yourBet.length-1; i >=0; i--) {
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



//make a function that generates an array of 1 x 2
// the length of the array == the length of the array of matches

//  array generated [1,x,2,1,...] and your array or bets

// for each elements of both array  you gonna compare all the elements
// if it reachs the last elements return alert('congrats')
// if el !== bet alert('loss')
