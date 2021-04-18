// function price( dollar ){
//     this.price1 = dollar;
//     this.one = mohasebe;
    
// }

// let result =  new price(22000 );
// document.write(result.one());

// //Method
// function mohasebe(){
//     let dollars = 60 * this.price1;
    
//     return dollars;
//     //return euros ;

// }

// //array contaninate
// let boys = new Array("Mehrshad", "mehdi","yaser");
// let girls = new Array("maral", "nahal", "sara");

// let people = boys.concat(girls);

// document.write(people[0]);

// //method join & pop 
// let films = new Array("lord of the ring", "the godfather", "titanic","terminator");

// document.write(films[3] + "<br />");
// films.pop();
// document.write(films[3] + "<br />");

// films.push();

//push & sort & reverse
// let ab = new Array("sar", "shone", "zano", "angosht");
// ab.reverse();
// ab.push("zabon", "dast");
// ab.sort();
// document.write(ab);

//extend element to array by for
// let  pie = prompt("please enter your name:", "");
// document.write("Hello " + pie);
// ///////
// let crap = new Array(3);
// for(let i = 0; i < 3; i++){
//     crap[i] = prompt("Add Something","");
// }
// document.write(crap[0] + " " + crap[1] + " " + crap[2]);

// let stuff = new Array("apple","pears" ,"orange", "banana", "kiwi","peach");
// stuff.sort();

// for(i = 0; i < stuff.length; i++){
//     document.write(stuff[i] + "<br/>");
// }

// //associated array
// let mehi = new Array();
// mehi["color"]= "green";
// mehi["food"]= "Pizza";
// document.write("Behtarin ghaza baraye mehrshad " + mehi["food"] + " hast.");

// //math
// let n = prompt("Enter a number: ", "");
// let answer = Math.sqrt(n);
// alert("jazre adade "+ n + " hast: "+answer);

// setInterval
// function doSomething(){
//     document.write("SAlam");
// }

// // setInterval("doSomething()", 1000);

//date object

// function printTime(){
//     let now =new Date();
//     let hours = now.getHours();
//     let mins = now.getMinutes();
//     let sec = now.getSeconds();
//     document.write(hours + ":" + mins + ":" + sec  + "<br/>");
// }
// setInterval("printTime()", 1000);

//forms

function validator(){
    if(document.mehi.thebox.checked){
        alert("Yess good, it's checked!");
    }else {
        alert("No it's not cheched");
    }
}
