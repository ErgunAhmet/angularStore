import {Recipe} from "./recipe.model";
import { Injectable} from "@angular/core";
import { Ingredient } from "../shared/ingredient-model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'this is a pizza',
      'https://www.oetker.nl/Recipe/Recipes/oetker.nl/nl-nl/miscallaneous/image-thumb__97330__RecipeDetailsLightBox/pizza-caprese.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Frence fries', 20)
      ]),
    new Recipe(
      'hamburger',
      'this is a hamburger',
      'https://www.leukerecepten.nl/wp-content/uploads/2015/08/hamburgers_maken-1.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Frence tacos', 3)
      ])
  ];
  // private recipes: Recipe[] = [];
  constructor(private slService: ShoppingListService) {
  }
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
