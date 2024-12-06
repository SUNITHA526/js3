var a={
    firstname:"sita",
    lastname:"desai",
    age:24
}
console.log(a.firstname)
a.city="newyork";
console.log(a)


var product={
    name:"sita",
    pric:80,
    instock:12

}
console.log(product)
product.pric=100;
console.log(product)
delete product.instock;
console.log(product)

var library={
    mystery:["my1","my2"],
    fantasy:["fa1","fa2" ] 
}
    
    library.scfiction=["sc1","sc2"]
    console.log(library)
    delete library.mystery;
    console.log(library)

var user={
    name:"sita",
    email:"s@email.com",
    adress:{
        city:"hyd",
        state:"ts",
        zip:500085,
    }
}
console.log(user.freeze())
user.isfrozen()
console.log(user)


var car={
    make:"abs",
    model:"tesla",
    price:"1cr"
}
console.log(car.seal())
car.isSealed()
console.log(car)


var a=[   "sita"];
var b=["gita"   ];
var c=a.concat(b);
console.log(c);
console.log(c.toString().trim().toUpperCase());


var t="sita";
console.log(t.slice(1,3));
var f=t.slice(1,3);
console.log(f.length-1)

var d=[];
var s="sita";
var g=d.concat(s)
console.log(d.concat(s))
console.log(s.toUpperCase().slice(2,3))

var m="sita";
var s="arya";
console.log(m.slice(0,3));
console.log(s.slice(0,3));
console.log(m.concat(s).toUpperCase())

var t=[  "sita"  ];
console.log(t.toString());
var j=t.toString();
console.log(j.at(0).toUpperCase()+j.slice(1,j.length-1)+j.at(j.length-1).toUpperCase());


var o="hello there , how are you";
console.log(o.split(" ").indexOf("are"));




