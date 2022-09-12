import { CarFactory } from "./factories/car-factory";
import { randomCarAlgorithm } from "./main/random-vehicle-algorithim";
import { randomNumber } from "./utils/random-numbers";

const carFactory = new CarFactory();
const customerName = ['ana', 'joana', 'pedro'];


for (let i = 0; i < 10; i++){
  const vehicle = randomCarAlgorithm();
  const name = customerName[randomNumber(customerName.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.picckUp(name,`um novo carro ${randomNumber(100)}`);
  newCar.stop();
  console.log('--');
}
