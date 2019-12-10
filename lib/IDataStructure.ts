export interface IDataScructure {
    size(): number;
    add(item : any);
    peek(): any;
    poll(): any;
    isEmpty(): boolean;
}