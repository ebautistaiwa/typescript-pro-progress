interface A{ a: string }
interface B{ b: string }

const foo: A & B = {
    a: '',
    b: ''
}

const bar = {
    x: true
}

const foobar = Object.assign(foo, bar)