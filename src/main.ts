interface Person{
    name: string,
    age: number
}

type partialPerson = Partial<Person>
//Pick
//Record

function makePersonReadOnly(p: Person): Readonly<Person>{
    return Object.freeze(p)
}

type Stringified<T> = {
    [P in keyof T]: string
}

const stringifiedPerson: Stringified<Person> = {
    name: 'John',
    age: '45'
}