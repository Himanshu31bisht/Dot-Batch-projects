console.log('lets start');

// object create

const rectangle = {
    length: 1,
    breadth:2,

    draw: function(){         // method of rectangle object
        console.log('draw');
    }
};

console.log(rectangle.draw());

// object cloning

//iteration

// let src={
//     a:10,
//     b:20,
//     c:30
// };

// let dest={};

// for(let key in src){
//     dest[key]=src[key];
// }

// console.log(dest);

//Assign

let src={
    a:10,
    b:20,
    c:30
};

let dest=Object.assign({}, src);

console.log(dest);

src.a++;

console.log(dest);