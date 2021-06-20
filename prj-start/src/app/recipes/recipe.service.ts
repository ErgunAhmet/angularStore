import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import { Ingredient } from "../shared/ingredient-model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Frence fries', 20)
      ]),
    new Recipe(
      'Another test recipe',
      'this is a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Frence tacos', 3)
      ])
  ];
  constructor(private slService : ShoppingListService) {
  }
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}