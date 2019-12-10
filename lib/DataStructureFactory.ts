import { DataStructures } from "./DataStructures";
import { Queue } from "./Queue";
import { Stack } from "./Stack";

export class DataStructureFactory{

    public static create(typ: DataStructures){
        if (typ === DataStructures.Queue){
            return new Queue();
        }else{
            return new Stack();
        }
    }
}