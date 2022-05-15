import lowdb = require("lowdb");
import FileSync = require("lowdb/adapters/FileSync");

type Task = {
    id:string
    name: string
    description:string
}

type Dealer = {
    id:string
    name:string
    addres:string
    year:string
}

type Schema = {
    tasks:Task[]
    dealers:Dealer[]
}

let db: lowdb.LowdbSync<Schema>;

export const createConecction = () => {
    const adapter = new FileSync<Schema>('db.json')
    db = lowdb(adapter)
    db.defaults({tasks:[], dealers:[]}).write();
}

export const getConnection = () => db;

