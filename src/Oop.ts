class chai {
    flavour:string;
    price:number;

    constructor(flavour:string, price:number){
        this.flavour = flavour,
        this.price = price
    }

}
const makeChai = new chai("masala", 20);
makeChai.flavour = "ginger"


// public and private
class userAccount {
    public userName:string = "Bhavishya";

    private balance:number = 1000000;
    showBalance(){
        return this.balance;
    }
}
const user = new userAccount();
console.log(user.showBalance());


// protected
class shop {
    protected shopName:string = "Mega shop";
}

class branch extends shop{
    getShopName(){
        return this.shopName 
    }
}
new branch().getShopName();

// "#" is also used for private
class wallet {
    #balance:number = 100000;

    showbalance(){
        return this.#balance 
    }
}
const w = new wallet()
w.showbalance();

// readOnly
class cup {
    readonly capacity:number = 250;

    constructor(capacity:number){
        this.capacity = capacity;
    }
}
const oneChai = new cup(300);

// getter and setter
class modernChai {
    private _sugar:number = 2;

    get sugar(){
        return this._sugar;
    }

    set sugar(value:number){
        value > 5 ? "too sweet" : this._sugar = value;
    }
}
const c = new modernChai()
c.sugar = 4

// static -: can access direct thorugh class no need to make object
class staticEg {
    static userName:string = "ironaman";
}
console.log(staticEg.userName);


//abstract
abstract class drink {
    abstract make():void
}

class myChai extends drink{
    make() {
        console.log('brewing chai...');
    }
}

// composition
class heater{
    heat(){}
}

class chaiMaker {
    constructor(private Heater:heater){}
    make(){
        this.Heater.heat()
    }
}