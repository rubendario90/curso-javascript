var asistantManager = {
    movement : 3,   
    SocialSkill : 30,
    streetSmarts : 30,
    health : 40
}


//alternativa para escribir objetos en javascript
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2.color); 

//evaluar expresiones
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}