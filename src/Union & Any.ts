//union
let subs: string | number = '1M';

let airlineSeat: 'aisel' | 'middle' | 'window' = 'window';
airlineSeat = 'aisel'

let apiRequest: 'pending' | 'success' | 'error' = 'success'

let name;

//any
const orders = ['10', '15', '25' , '30'];

// TIP -: Don't use any

let currentOrder: string | undefined;

for (const order of orders) {
    if (order === '30') {
        currentOrder = order;
    }
}

console.log(currentOrder);