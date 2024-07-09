function makeCar(
    manufacturer: string,
    model: string,
    ...options: [string, any][]
  ) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => (car[key] = value));
    return car;
  }
  console.log(makeCar('Toyota', 'Camry',["color", "black"], ["year", 2023]));