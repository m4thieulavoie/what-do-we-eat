import allMeals, { Meal, MealTag } from "./allMeals";

export interface QueryParam {
  tag: MealTag;
  howMany: number;
}

export const extractFirstItems = (meals: Meal[], max: number) =>
  meals.slice(0, max);

export const keepXFromTag = (params: QueryParam[]) => {
  let newArray = allMeals.sort(() => 0.5 - Math.random());
  params.forEach(({ tag, howMany }) => {
    const filteredCriteria = extractFirstItems(
      newArray.filter((meal) => meal.tags.includes(tag)),
      howMany
    );

    newArray = [
      ...newArray.filter((meal) => !meal.tags.includes(tag)),
      ...filteredCriteria,
    ];
  });

  return newArray.sort(() => 0.5 - Math.random());
};

export const generateMeals = (params: QueryParam[]) =>
  extractFirstItems(keepXFromTag(params), 7);
