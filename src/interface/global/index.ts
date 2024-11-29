export interface Games {
    gid: number,
    name: string,
    eName: string,
    path: string,
    description?: string
    image?: string
}

export interface Types {
    cid: number,
    gid: number,
    typeName: string,
    typeList?: Array<string>
}