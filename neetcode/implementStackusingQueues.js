/**
 Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 

Example 1:

Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
 

Constraints:

1 <= x <= 9
At most 100 calls will be made to push, pop, top, and empty.
All the calls to pop and top are valid.
 

Follow-up: Can you implement the stack using only one queue?


 */

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if (this.isEmpty()) {
            return "invalid queue";
        }
        return this.items.shift();
    }
    peek() {
        if (this.isEmpty()) {
            return "invalid queue";
        }
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}


var MyStack = function () {
    this.q = [];
};

MyStack.prototype.push = function (x) {
    this.q.push(x);
};

MyStack.prototype.pop = function () {
    let size = this.q.length;
    for (let i = 0; i < size - 1; i++)
        this.push(this.q.shift());
    return this.q.shift();
};

MyStack.prototype.top = function () {
    let size = this.q.length;
    for (let i = 0; i < size - 1; i++)
        this.push(this.q.shift());
    let res = this.q.shift();
    this.push(res);
    return res;
};

MyStack.prototype.empty = function () {
    return this.q.length == 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */