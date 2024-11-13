import type { Category } from "./categories";

export interface Item {
  uuid: string;
  name: string;
  price: number;
  img: string;
  category: Category;
}
