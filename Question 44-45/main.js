function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("I want a sandwich with: ".concat(items.join(", "), "."));
}
makeSandwich("chicken", "cheese", "mayo");
makeSandwich("egg", "cucumder", "tomato");
makeSandwich("beef", "BBQ sauce", "tomato", "cucumber");
