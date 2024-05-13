/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 

Constraints:

-231 <= val <= 231 - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 104 calls will be made to push, pop, top, and getMin.
*/

class MinStack {
    constructor() {
        this.stack = [];
        this.minValue = [];
    }
    push(val) {
        if (!(this.stack.length)) {
            this.stack.push(val);
            this.minValue.push(val);
        } else {
            if (val <= this.minValue[this.minValue.length - 1]) {
                this.stack.push(val);
                this.minValue.push(val);
            } else {
                this.stack.push(val);
            }
        }
    }
    pop() {
        let min = this.stack.pop();
        if (min == this.minValue[this.minValue.length - 1]) {
            this.minValue.pop();
        }

    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        return this.minValue[this.minValue.length - 1];
    }
}

// class MinStack {
//     /**
//      * @constructor
//      */
//     constructor() {
//         this.stack = [];
//         this.minStack = [];
//     }

//     /**
//      * @param {number} val
//      * @return {void}
//      */
//     push(val, { minStack } = this) {
//         this.stack.push(val);             /* Space O(N) */

//         const isMinEmpty = !minStack.length;
//         const hasNewMin = val <= this.top(minStack);
//         const canAddMin = isMinEmpty || hasNewMin;
//         if (canAddMin) minStack.push(val);/* Space O(N) */
//     }

//     /**
//      * @return {void}
//      */
//     pop({ stack, minStack } = this) {
//         const top = stack.pop();          /* Time O(1) */

//         const canPopMin = top === this.getMin();
//         if (canPopMin) minStack.pop();    /* Time O(1) */
//     }

//     /**
//      * @param {Array}
//      * @return {number}
//      */
//     top(stack = this.stack) {
//         return stack.length
//             ? stack[stack.length - 1]     /* Time O(1) */
//             : null;
//     }

//     /**
//      * @return {number}
//      */
//     getMin(minStack = this.minStack) {
//         return this.top(minStack);       /* Time O(1) */
//     }
// }


var obj = new MinStack()
obj.push(2)
obj.push(0)
obj.push(3)
obj.push(0)
console.log(obj);
var param_4 = obj.getMin();
console.log("1: ", param_4);
obj.pop();
// var param_3 = obj.top();
// console.log(param_3);
var param_4 = obj.getMin();
console.log("2: ", param_4);
obj.pop();
var param_4 = obj.getMin();
console.log("3: ", param_4);
obj.pop();
var param_4 = obj.getMin();
console.log("4: ", param_4);

// ["MinStack","push","push","push","push","getMin","pop","getMin","pop","getMin","pop","getMin"]
