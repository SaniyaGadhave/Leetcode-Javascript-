/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let i = init;

    return {
        increment: () => ++i,
        decrement: () => --i,
        reset:     () => i = init
    };
};
