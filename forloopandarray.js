let oz = [8,12,16,20,24,32];
let sizes = ["xs","s","m","l",'xl'];
let prices = [4.99,9.99,19.99,49.99];
let speeds = [93,99,95,96,97,99];
let pings = [45,60,120,80,155,160,220,110];
let bits = [1,1,0,1,0,0,1,0,0,1];

function smallDrink(list){
  let small=[];
  for(let s=0; s <= list.length; s++){
    if(list[s]<=20){
      small.push(list[s]);
    }
  }
  return small;
}

function example2(){
    let total=0;
    for(let b=0;b<bits.length;b++){
        total = total+ bits[b];
        //new = old + current #
    }
    return total;
}

function averagePing(list){
  let average = 0;
  for(a = 0; a<list.length; a++){
    average = average+ list[a];

  }
  average= average / list.length;
return average;
}



function speed(list){

for(let i=0; i<list.length; i++){
  if(list[i]>95){
    return i;
  }
}
}

//Creating test code
function main(){
    console.log(smallDrink(oz));
    console.log("The total # of bits is "+example2());
    console.log("Your average ping for internet is "+averagePing(pings));
    console.log("The first pitch thrown above 95 was pitch-index "+speed(speeds));
}
//run test code with CTRL + SHIFT + B
main();
