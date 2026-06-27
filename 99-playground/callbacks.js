// callbacks are a way to access the return value of an asynchronous function
// without actually using return, which is not possible for those async functions.

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0.0,
      longitude: 0.0,
    };

    callback(data);
  }, 2000);
};

geocode("Philadelphia", (data) => {
  console.log(data);
});

// challenge:

const add = (x, y, callback) => {
  setTimeout(() => callback(x + y), 2000);
};

add(1, 4, (sum) => {
  console.log(sum);
});
