function makeChai (type: string, cup:number) {
    console.log(`making ${cup} cups of ${type}..`)
}
makeChai ("masala chai", 2);

// return type
function returnNumber ():number {
    return 4
}

// function makeOrder (order:string):string{
//     if(!order) return null
//     return order
// }

function logChai ():void {
    console.log("chai is ready..")
}

// function orderchai (type?:string){

// }
function orderchai (type:string = "masala chai"){}


function makeAnotherChai (chai:{
    type:string;
    sugar:number;
    size:"small" |"large"
}):Number{
    console.log(chai);
    return 4
}