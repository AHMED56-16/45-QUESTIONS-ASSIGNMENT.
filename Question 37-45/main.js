function makeShirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "'I love typescript'"; }
    console.log("My brand's one of the most selling t-shirt is of ".concat(size, " size  with the message \"").concat(message, "\" printed on it."));
}
makeShirt();
makeShirt("medium");
makeShirt("small", "'Free Palestine'");
