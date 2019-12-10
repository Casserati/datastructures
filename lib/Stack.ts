import { IDataScructure } from "./IDataStructure";

export class Stack implements IDataScructure {
    public stack = [];
    
    add(item: any){
        this.stack.push(item);
    }
    peek(): any {
       if  (this.stack.length != 0){
        return this.stack[this.stack.length -1];
        }
        return null;
    }
    poll(): any[] {
        return this.stack.pop();
    }
    isEmpty(): boolean {
        return this.stack.length <= 0;
    }
    public size(): number {
        return this.stack.length;
    }
}