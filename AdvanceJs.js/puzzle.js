function createSecret(initialValue) {
    let secret = initialValue;

    function modifier(value) {
        if (typeof value === 'function') {
            secret = value(secret);
        } else if (value !== undefined) {
            secret = value;
        }
        return secret;
    }

    modifier.get = function () {
        return secret;
    };

    return modifier;
}

// Using the secret
const secret = createSecret(10);

console.log(secret());         // 10
console.log(secret(20));       // 20
console.log(secret(x => x * 2)); // 40
console.log(secret.get());     // 40

// Advanced prototype trick
Function.prototype.modify = function (fn) {
    return (...args) => fn(this(...args));
};

const addOne = x => x + 1;
const doubleThenAddOne = addOne.modify(x => x * 2);
console.log(doubleThenAddOne(5)); // 11
