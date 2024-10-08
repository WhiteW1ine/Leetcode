var MyStack = function() {
   this.stack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack.unshift(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.stack.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.stack[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.stack.length === 0;
};


 var obj = new MyStack()
 obj.push(3)
 obj.push(4)
 var param_2 = obj.pop()
 var param_3 = obj.top()
 var param_4 = obj.empty()
