// data/userData.ts

export type Goal = {
  id: string;
  title: string;
  completed: boolean;
};

export type Meal = {
  id: string;
  name: string;
  calories: number;
};

export const initialGoals: Goal[] = [
  { id: "1", title: "Log breakfast", completed: false },
  { id: "2", title: "Drink 8 cups of water", completed: false },
  { id: "3", title: "Stay under calorie goal", completed: false },
];

export const initialMeals: Meal[] = [
  { id: "m1", name: "Oatmeal with fruit", calories: 320 },
  { id: "m2", name: "Grilled chicken salad", calories: 450 },
];
