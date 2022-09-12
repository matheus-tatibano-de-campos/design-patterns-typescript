import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Beans, Beverage, Dessert, Meat, Rice } from "./meals";

export class MainDishBuilder implements MealBuilderProtocol{
  private _meal: MealBox = new MealBox();

  reset(): this {
this._meal = new MealBox();
return this;
  }

makeMeal(): this {
  const rice = new Rice('Arroz', 5);
  const beans = new Beans('feijão', 10);
  const meat = new Meat('carne', 20);
  this._meal.add(rice, beans, meat);
  return this;
}
makeBeverage(): this {
  const beverage = new Beverage('bebida', 7);
this._meal.add(beverage);
  return this;
}
makeDessert(): this {
  const dessert = new Dessert('Sobremesa', 6);
  this._meal.add(dessert);
    return this;
}

getmeal(): MealBox {
  return this._meal;
}
getPrice(): number {
  return this._meal.getprice();
}
}
