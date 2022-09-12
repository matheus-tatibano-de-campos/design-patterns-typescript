import { BicycleFactory } from "../factories/bicycle-factory";
import { CarFactory } from "../factories/car-factory";
import { Vehicle } from "../vehicle/vehicle";
import {randomNumber} from '../utils/random-numbers';
export function randomCarAlgorithm(): Vehicle{
  const carFactory = new CarFactory()
  const car1 = carFactory.getVehicle('fusca');
  const car2 = carFactory.getVehicle('celta');
  const bicycleFactory = new BicycleFactory();
  const bicycle = bicycleFactory.getVehicle('bicicleta');
  const cars = [car1, car2, bicycle];
  return cars[randomNumber(cars.length)];
}
