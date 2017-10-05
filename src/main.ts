interface Person{
    name: string,
    age: number
}

type keys = keyof Person
type personName = Person['name']

const foo = {
    x: true
}

function getProperty<T, K extends keyof T>(obj: T, key: K){
    return obj[key]
}

getProperty(foo, 'x')