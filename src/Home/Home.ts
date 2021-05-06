/* eslint-disable no-use-before-define */
import {
  FASTElement,
  customElement,
  html,
  repeat,
  attr,
} from "@microsoft/fast-element";
import styles from "./Home.scss";
import { generateMeals } from "./recipes";
import allMeals, { Meal } from "./allMeals";

const template = html` <button @click=${(x) => x.refresh()}>Refresh</button>
  <table>
    <thead>
      <tr>
        <td>Day</td>
        <td>Name</td>
        <td>Tags</td>
      </tr>
    </thead>
    <tbody>
      ${repeat<HomeComponent, DayToMeal>(
        (x) => x.meals,
        html<DayToMeal>`<tr>
          <td>${(x) => x.day}</td>
          <td>${(x) => x.name}</td>
          <td>${repeat((x) => x.tags, html<string>`${(y) => y} `)}</td>
        </tr>`
      )}
    </tbody>
  </table>
  <label for="thai">Thai</label
  ><input
    type="number"
    id="thai"
    value="1"
    @keyup=${(x, e) => x.thaiChangeEvent(e.event)}
    @change=${(x, e) => x.thaiChangeEvent(e.event)}
  />
  <label for="sandwich">sandwich</label
  ><input
    type="number"
    id="sandwich"
    value="1"
    @keyup=${(x, e) => x.sandwichChangeEvent(e.event)}
    @change=${(x, e) => x.sandwichChangeEvent(e.event)}
  />
  <label for="junk">junk</label
  ><input
    type="number"
    id="junk"
    value="1"
    @keyup=${(x, e) => x.junkChangeEvent(e.event)}
    @change=${(x, e) => x.junkChangeEvent(e.event)}
  />

  <h2>Ingrédients</h2>
  <ul>
    ${repeat((x) => x.getIngredients(), html<string>`<li>${(x) => x}</li>`)}
  </ul>

  <footer>${() => allMeals.length} total recipes</footer>`;

interface DayToMeal extends Meal {
  day?: string;
}

@customElement({
  name: "wcs-home",
  template,
  styles,
})
export default class HomeComponent extends FASTElement {
  private DAYS = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  @attr meals: DayToMeal[] = [];

  @attr thai = 1;

  @attr sandwich = 1;

  @attr junk = 1;

  connectedCallback() {
    super.connectedCallback();
    this.refresh();
  }

  getIngredients() {
    return this.meals
      .flatMap((meal) => meal.ingredients)
      .filter((ingredient) => !!ingredient)
      .filter((value, index, self) => self.indexOf(value) === index);
  }

  refresh() {
    this.meals = generateMeals([
      { tag: "thai", howMany: this.thai },
      { tag: "sandwich", howMany: this.sandwich },
      { tag: "junk", howMany: this.junk },
    ]).map((meal, i) => ({
      ...meal,
      day: this.DAYS[i],
    }));
  }

  thaiChangeEvent(e: Event) {
    this.thai = (e.target as any).value;
    this.refresh();
  }

  sandwichChangeEvent(e: Event) {
    this.sandwich = (e.target as any).value;
    this.refresh();
  }

  junkChangeEvent(e: Event) {
    this.junk = (e.target as any).value;
    this.refresh();
  }
}
