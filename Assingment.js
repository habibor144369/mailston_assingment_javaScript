// feet to miles convert by function....
function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var total = feetToMile(5280)
console.log(total)


//make a woodCalculator....
function woodCalculator(chair, table, bed){
    var chairs = 1;    // i think so 1 cubic of wood is needed to make a chair.
    var chairesResult = chairs * chair;

    var tables = 3;    // i think so 3 cubic of wood is needed to make a table.
    var tablesResult = tables * table;
  
    var beds = 5;  // i think so 3 cubic of wood is needed to make a bed.
    var bedsResult = beds * bed;
    
    var totalWoodSum = chairesResult + tablesResult + bedsResult;
    return totalWoodSum;
}
var totalWoodNeeds = woodCalculator(3, 4, 5);
console.log(totalWoodNeeds);



// make a brickCalculator......
function brickCalculator(Bricks){
    if(Bricks <= 10){
        var result5 = 15 * Bricks;
        var result2 = result5 * 1000
        return result2
        
    }

    if(Bricks > 10 && Bricks <= 20){
        var result6 = 12 * Bricks;
        var result3 = result6 * 1000;
        return result3
    }
    
    if(Bricks > 20){
        var result7 = 10 * Bricks;
        var  result4 = result7 * 1000;
        return result4
    }
     
}

var totalResult = brickCalculator(25);
console.log(totalResult);



// find to small charecter in array....
function tinyFriend(names){
    var bigName = names [0];
    for(var i = 0; i < names.length; i++){
        var element = names[i];
        if(element < bigName){
            bigName = element;
        }
    }
    return bigName;
}

var names = ["Habibor", "Tarek", "Soron", "Mahaboob", "Baby", "mayan"]

var lergestName = tinyFriend(names);
console.log(lergestName);