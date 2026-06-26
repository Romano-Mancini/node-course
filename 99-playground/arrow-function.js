const square = (x) => x * x;

const greeter = () => console.log("Hello world");

const event = {
  name: "Birthday Party",
  guestList: ["Andrew", "Jen", "Mike"],
  // shorthand notation for printGuestList : function () {}
  printGuestList() {
    console.log("Guest list for " + this.name);

    this.guestList.forEach((guest) =>
      console.log(guest + " is attending " + this.name),
    );
  },
};

event.printGuestList();

greeter();
/*
    Arrow functions don't have their own "this": they inherit it from
    the enclosing scope.

    printGuestList must be a regular function so that calling
    event.printGuestList() correctly binds "this" to "event". An arrow
    function would inherit "this" from the outer module scope instead,
    making this.name undefined.

    The forEach callback must be an arrow function so that it inherits
    "this" from printGuestList, where it's already bound to "event". A
    regular function would create its own "this" binding, losing the
    reference to "event" and making this.name undefined again.
*/
