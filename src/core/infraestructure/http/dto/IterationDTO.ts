export interface IterationDTO {
  id: number;
  n: number;
  notes: string;
  score: number;
  items: ItemDTO[];
}

export interface ItemDTO {
  text: string;
  state: State;
}

export type State = 'positive' | 'negative';
