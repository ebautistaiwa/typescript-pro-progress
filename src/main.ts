// <input id="myInput">
const el1 = <HTMLInputElement>document.getElementById('myInput')
const el2 = document.getElementById('myInput') as HTMLInputElement

if(el1){
    el1.autocomplete
}

const x = {}

const y1 = (x as any).foo.bar.qux
const y2 = ((x as any).foo as any).bar.qux