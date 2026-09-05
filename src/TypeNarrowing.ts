function getChai (kind: string | number){
    if( typeof kind === 'string'){
        return `making ${kind} chai...`
    }
    return`order ${kind} chai...`
}

function serveChai(msg?:string){
    if (msg) {
        return`serving the ${msg} chai..`
    }
    return `serving default masala special chai..`
}

function orderChai(order:'small' | 'medium' | 'large' | number){
    if ( order === 'small') {
        return`small cup of chai..`
    }
    if( order === 'medium' || order === 'large'){
        return `extra cup of chai..`
    }
    return`order ${order} cup of chai..`
}


class masalaChai{
    serve(){
        return `masala chai..`
    }
}
class cuttingChai{
    serve(){
        return `cutting chai..`
    }
}
type chaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj:any):obj is chaiOrder{
    return(
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number' 
    )
}

function servingChai (item: chaiOrder | string){
    if(isChaiOrder(item)){
        return `make chai ${item.type} with ${item.sugar} sugar`
    }
    return `serving custom chai ${item}`
}
