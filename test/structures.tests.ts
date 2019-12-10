import { expect } from "chai";
import { Queue } from "../lib/Queue";
import { Stack } from "../lib/Stack";
import { DataStructures} from "../lib/DataStructures"
import { DataStructureFactory } from "../lib/DataStructureFactory";

describe("Data structures", () => {
    describe("Queue", () => {
        it("has size", () => {
            const testee = new Queue();
            const result = testee.size();
            expect(result).to.equal(0);
        })

        it("is Empty", () => {
            const testee = new Queue();
            const result = testee.isEmpty();
            expect(result).to.equal(true);
        })

        it("can add item", () => {
            const testee = new Queue();
            testee.add("Test-item");
            const result = testee.size();
            expect(result).to.equal(1);
        })

        it("can poll item", () => {
            const testee = new Queue();
            testee.add("Test-item 1");
            testee.add("Test-item 2");
            const polledItem = testee.poll();
            const result = testee.size();
            expect(result).to.equal(1);
            expect(polledItem).to.equal("Test-item 1");
        })

        it("can peek item", () => {
            const testee = new Queue();
            const addedItem = "Test-item";
            testee.add(addedItem);
            const peekedItem = testee.peek();
            const result = testee.size();
            expect(peekedItem).to.be.equal(addedItem);
            expect(result).to.be.equal(1);
        })
    })


    describe("Stack", () => {
        it("has size", () => {
            const testee = new Stack();
            const result = testee.size();
            expect(result).to.equal(0);
        })

        it("is Empty", () => {
            const testee = new Stack();
            const result = testee.isEmpty();
            expect(result).to.equal(true);
        })

        it("can add item", () => {
            const testee = new Stack();
            testee.add("Test-item");
            const result = testee.size();
            expect(result).to.equal(1);
        })

        it("can poll item", () => {
            const testee = new Stack();
            testee.add("Test-item 1");
            testee.add("Test-item 2");
            const polledItem = testee.poll();
            const result = testee.size();
            expect(result).to.equal(1);
            expect(polledItem).to.equal("Test-item 2");
        })

        it("can peek item", () => {
            const testee = new Stack();
            const addedItem = "Test-item";
            testee.add(addedItem);
            const peekedItem = testee.peek();
            const result = testee.size();
            expect(peekedItem).to.be.equal(addedItem);
            expect(result).to.equal(1);
        })
    })

    describe("Factory", () => {
         it("can create Queue", () => {
             const structureType = DataStructures.Queue;
             const result = DataStructureFactory.create(structureType);
             expect(result).to.be.an.instanceOf(Queue);
         })

         it("can create Stack", () => {
            const structureType = DataStructures.Stack;
            const result = DataStructureFactory.create(structureType);
            expect(result).to.be.an.instanceOf(Stack);
        })
     })
})