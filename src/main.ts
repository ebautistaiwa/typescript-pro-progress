enum Shapes{
    Circle,
    Square,
    Triangle
}

function numCorners(shape: Shapes){
    switch(shape){
        case Shapes.Circle:
            return 0
        case Shapes.Square:
            return 4
        case Shapes.Triangle:
            return 3
        default:
            impossibleShape(shape)
    }
}

function impossibleShape(shape: never): never{
    throw new Error('Unhandled ${shape}')
}