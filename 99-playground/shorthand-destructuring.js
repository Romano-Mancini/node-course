// property shorthand syntax

const name = "Romano";
const age = 22;

const person = {
    name,
    age,
    location: "Leuven"
}

// object destructuring

const shoes = {
    size = 40,
    color = "red",
    soldOut = false,
    amount = 250
}

const sell = (callback, {soldOut, amount}) => {
    if (!soldOut) {
        callback(amount);
    }
}