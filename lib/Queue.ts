import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {
    public quene = [];

    add(item: any): void {
        this.quene.push(item);
    }
    peek(): any {
       if  (this.quene.length != 0){
        return this.quene[0];
        }
        return null;
    }
    poll(): any[] {
        return this.quene.shift();
    }
    isEmpty(): boolean {
        return this.quene.length <= 0;
    }
    public size(): number {
        return this.quene.length;
    }
}