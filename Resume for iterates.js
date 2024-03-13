var json = [{
    "id"  : "Padmanaban007", 
    "msg" : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "mail": "padmanaban007@gmail.com"
},
{
    "id"  : "Pad-coder", 
    "msg" : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "mail": "padmanaban@gmail.com"
}];


//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.mail);

}

//for Each
json.forEach(function(obj) { console.log(obj.msg); });


//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].msg);
 
}
}

//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);