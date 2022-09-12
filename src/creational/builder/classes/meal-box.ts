import { MealCompositeProtocol } from "../interfaces/meal-composite-protocol";

export   class  MealBox implements  MealCompositeProtocol  {
  private readonly _children: MealCompositeProtocol[] = []

  getprice(): number {
    return this._children.reduce((sum,meal) => sum + meal.getprice(),0);
  }

  add(...meal: MealCompositeProtocol[]):void {
   meal.forEach((item) => this._children.push(item));
  }
}
