var upgrades = new Array();
var news= new Array();
var algos = new Array();
var cookies=0;
var cookieCLick = 1;
var newsitem=-1;
var prices = new Array();
window.onload = playGame();

function playGame(){
	init();
	playLoop();
	
	var myVar=setInterval(function(){playLoop()},1000);
}

function playLoop(){
	cookies = cookies+getclicksps();
	if(timeForNews()){
		setNews();
	}
	setCookies();	
}

function setCookies(){
	var cookie = document.getElementById("cookies");
	cookie.innerHTML = cookies;
	cookie = document.getElementById("cookiesps");
	cookie.innerHTML = getclicksps();
}

function setNews(){
	document.getElementById("newsclass").innerHTML = getnextnews();
}

function clickCookie(){
	cookies = cookieCLick + cookies;
}

function init(){
	var val =10;
	for(i=0;i<8;i++){
		upgrades[i] =0;
		algos[i] = (i+1)*2;
		prices[i] =  Math.pow(val, i + 1);
	}
	inittable();
	allnews();
}

function getnextnews(){
	newsitem++;
	if(newsitem<news.length){
	return news[newsitem];}
	else {return news[news.length]}
}

function getRandomNews(){
	return news[Math.floor((Math.random()*news.length))];
}

function allnews(){
	news[0] = "No news today!";
	news[1] = "I'm not creative!";
	news[2] = "Newspapers report: again no news today!";
	news[3] = "BCC reports: grandma's cookies on the rise";
	news[4] = "There is not much news";
	news[5] = "more than a thousand cacoa plants destroyed by new plague!";
	news[6] = "Cure found for the new cacoa plague!";
	news[7] = "Cure for the cacoa plagua appears to also destroy the rest of the plants";
	news[8] = "Do we need any other plants than cacoa?";
	news[9] = "What did other plants ever do for us?!";
	news[10] = "The news report ran out of news!";
	news[11] = "Will there ever be more news? News on this after the news!";
	news[12] = "News shuts down after months of no news!";
	news[13] = "...";
	news[14] = "First new: single cookie drops on the ground!";
	news[15] = "News: first news in ages!";
	news[16] = "Should news be back after single news item? Later more in the news";
	news[17] = "Later on the news: More news items!";
}

function timeForNews(){
	var i = Math.floor((Math.random()*60));
	return i<2;
}

function getclicksps(){
	var cps=0;
	for(i=0;i<upgrades.length;i++){
		cps = (upgrades[i]*algos[i])+cps;
	}
	return cps;
}

function buyNewItem(newItem,buttonid,tableid){
	if(cookies >=prices[newItem]){
		cookies = cookies - prices[newItem];
		prices[newItem] = prices[newItem] *2;
		upgrades[newItem] = upgrades[newItem]+1;
		var curs = document.getElementById(buttonid);
		curs.innerHTML = "Koop voor: " + prices[newItem];
		var cursaant = document.getElementById(tableid);
		cursaant.innerHTML = upgrades[newItem];
	} else {
		var ls = document.getElementById("errorbox");		
		ls.innerHTML = 'Not enough cookies! <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>';
		ls.className = "alert alert-danger alert-dismissable";
		$("#errorbox").fadeOut( 2600, empty );

	}
}

function empty(){
	var ls = document.getElementById("errorbox");
	ls.innerHTML="";
	ls.className="";
	$("#errorbox").fadeIn(100);
}

function newCursor(){
	buyNewItem(0,"buycursor","cursors");
}

function inittable(){
	var curs = document.getElementById("buycursor");
	curs.innerHTML = "Koop voor: " + prices[0];
	var curs = document.getElementById("buygrandma");
	curs.innerHTML = "Koop voor: " + prices[1];
	var curs = document.getElementById("buyfarm");
	curs.innerHTML = "Koop voor: " + prices[2];
	var curs = document.getElementById("buyfactory");
	curs.innerHTML = "Koop voor: " + prices[3];
	var curs = document.getElementById("buymine");
	curs.innerHTML = "Koop voor: " + prices[4];
	var curs = document.getElementById("buyshipment");
	curs.innerHTML = "Koop voor: " + prices[5];
	var curs = document.getElementById("buylab");
	curs.innerHTML = "Koop voor: " + prices[6];
	var curs = document.getElementById("buyportal");
	curs.innerHTML = "Koop voor: " + prices[7];
}

function newGrandma(){
	buyNewItem(1,"buygrandma","grandmas");
}

function newFarm(){
	buyNewItem(2,"buyfarm","farms");
}

function newFactory(){
	buyNewItem(3,"buyfactory","factories");
}

function newMine(){
	buyNewItem(4,"buymine","mines");
}

function newShipment(){
	buyNewItem(5,"buyshipment","shipments");
}

function newLab(){
	buyNewItem(6,"buylab","labs");
}

function newPortal(){
	buyNewItem(7,"buyportal","portals");
}