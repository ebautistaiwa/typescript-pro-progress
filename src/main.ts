declare enum Foo{
    Bar = 1
}

const enum CDS{
    OnPush,
    Default
}

function isDefaultCDS(cds: CDS): boolean{
    return cds == null || cds === CDS.Default
}