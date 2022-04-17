export interface Iteration {
  id: number;
  n: number;
  notes: string;
  score: number;
  experienceId: number;
  image: string;
  items: Item[];
}

export interface Item {
  text: string;
  state: State;
}

export type State = 'positive' | 'negative';
