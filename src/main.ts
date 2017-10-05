interface Bar{
    bar: any
}

function isBar(arg: any): arg is Bar{
    return arg.bar !== 'undefined'
}

function isString(arg: any): arg is string{
    return typeof arg === 'string'
}

function foo(x: number | string){
    if(isString(x)){
        x.substr
    }
}