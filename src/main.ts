function log(msg: string){
    if(msg.length > 4){
        return null
    }
    console.log(msg)
    return undefined
}

function compare(arg: any){
    switch(typeof arg){
        case 'string':
            console.log('Fallthrough case')
            break
        default:
            console.log('Default case')
    }
}