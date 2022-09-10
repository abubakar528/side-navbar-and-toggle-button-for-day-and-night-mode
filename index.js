
// function sum (a){
//     var total = 0;

//     console.log(Object.values(a))
//     var z = Object.values(a);
//     console.log("this is z",z)

//     for (var i =0; i<=z.length-1; i++){
//         total +=z[i];
//     }
//     console.log( "tottal of values is",total)
// }

// sum({a:3, b:8,c:9});\

function merge(a,b){
    var c = {...a,...b , d:8};
    console.log("this is",c);
}
merge({a:1,b:3},{c:3,d:4})




// function myFunction(x, y){
//     y.g = y.b;
//       let obj = Object.assign(x,y)
//       console.log(obj)
//     }
//     myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })
