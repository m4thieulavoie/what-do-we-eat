export type MealTag =
  | "pasta"
  | "junk"
  | "thai"
  | "healthy"
  | "sandwich"
  | "mexican"
  | "fish";

export type Side =
  | "salad"
  | "macaroni salad"
  | "rice"
  | "sidekicks"
  | "potatoes"
  | "fries";

export type Protein = "eggs" | "ham" | "turkey" | "steak haché" | "saucisses";

export interface Meal {
  id: string;
  name: string;
  tags: MealTag[];
  ingredients?: string[];
  protein?: Protein[];
}

const allMeals: Meal[] = [
  {
    id: "d601ab30-adf2-11eb-8529-0242ac130003",
    name: "Macaroni",
    tags: ["pasta"],
    ingredients: ["macaroni", "soupe tomate"],
    protein: ["steak haché", "saucisses"],
  },
  {
    id: "1ad80035-11e0-4911-8a30-3cd594122b86",
    name: "Spaghetti 🍝",
    tags: ["pasta"],
  },
  {
    id: "55003655-8222-4275-afef-4fc82b85bb27",
    name: "Burgers 🍔",
    tags: ["junk"],
  },
  {
    id: "8272474d-5a90-42ec-84bb-d7a89b8b7ed6",
    name: "Pizza 🍕",
    tags: ["junk"],
  },
  {
    id: "20cb0021-c056-4874-acf2-af7cb3f3299f",
    name: "Sauté de poulet",
    tags: ["healthy"],
    ingredients: ["poulet"],
  },
  {
    id: "3c3b765f-77bd-41b6-a4a8-5649918fad22",
    name: "Boulettes de poulet hâché",
    tags: ["healthy"],
  },
  {
    id: "b9fe9e1b-6215-494f-8af0-b29b510ab627",
    name: "Salade repas 🥗",
    tags: ["healthy"],
  },
  {
    id: "82be38bf-0060-4df9-90de-4481e44927a5",
    name: "Saumon",
    tags: ["fish", "healthy"],
  },
  {
    id: "e8b8a8c6-c3bd-406f-937a-b27c363a963f",
    name: "Sole",
    tags: ["fish", "healthy"],
  },
  {
    id: "35117d0c-2a69-419c-8e82-e54251245b45",
    name: "Sushis 🍣",
    tags: ["fish", "healthy"],
    ingredients: [
      "feuilles d'algues",
      "riz à sushi",
      "fruits",
      "crevettes",
      "thon",
    ],
  },
  {
    id: "b126dd0a-ccf0-4406-85d1-488c547bc990",
    name: "Tournedos de poulet",
    tags: ["healthy"],
    ingredients: ["tournedos", "sauce worcestershire", "sauce soya", "miel"],
  },
  {
    id: "76ceac5a-48d6-4520-a029-7dc7601e87f2",
    name: "Paté chinois",
    tags: ["healthy"],
    ingredients: ["patates 🥔", "steak hâché", "blé d'indes 🌽"],
  },
  {
    id: "5c9d89db-3f2c-4553-9504-0151c1776603",
    name: "Soupe/Sandwich 🥪",
    tags: ["sandwich"],
  },
  {
    id: "7f802a4a-d552-4ca9-ad39-a58c1805a5ff",
    name: "Wrap",
    tags: ["sandwich"],
  },
  {
    id: "ef9e6b99-2813-492d-87b5-186709485e69",
    name: "Paninis 🥙",
    tags: ["sandwich"],
  },
  {
    id: "2204fd72-4683-4b50-b56e-480e69a0d6e9",
    name: "Pad See Ew 🥡",
    tags: ["thai"],
    ingredients: ["pâtes aux oeufs", "sauce oyster", "sauce soya"],
  },
  {
    id: "ce87f472-aee7-4579-9313-8d8180209e79",
    name: "Fried rice 🍚",
    tags: ["thai"],
  },
  {
    id: "67bc98e7-c466-4da1-a26f-5fb859d88afe",
    name: "Tacos 🌮",
    tags: ["mexican"],
    ingredients: ["pitas/shell", "blé d'inde", "salsa", "crème sûre", "épices"],
  },
  {
    id: "94bf733c-eae5-49a8-8bec-c25f80af26ac",
    name: "Nachos",
    tags: ["junk"],
    ingredients: ["tostitos", "salsa", "crème sûre", "piments", "fromage"],
  },
  {
    id: "64a4d891-6a93-4e8c-93be-124a65a3c6a5",
    name: "Quesadillas",
    tags: ["mexican"],
    ingredients: ["pitas/shell", "blé d'inde", "salsa", "crème sûre", "épices"],
  },
  {
    id: "a8537954-d4a5-4a93-9795-ed4f31d14d48",
    name: "Burritos 🌯",
    tags: ["mexican"],
    ingredients: [
      "pitas",
      "blé d'inde",
      "salsa",
      "crème sûre",
      "épices",
      "riz",
    ],
  },
];

export default allMeals;
