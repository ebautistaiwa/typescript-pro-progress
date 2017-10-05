function addTo(x?: number){
    x = x || 0
    return function add(y: number){
        return x! + y
    }
    //x = x || 0
    //return add
}

const addTo1 = addTo(1)
addTo1(4)// 5