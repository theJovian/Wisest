import { Iteration, State } from "./Iteration";
import {
  ItemDTO,
  IterationDTO,
} from '../../infraestructure/http/dto/IterationDTO';
import {http} from '../../infraestructure/http/http';

export const IterationRepository = {
  getIterations: async () => {
    const iterations = await http.get<IterationDTO[]>('iterations');
    return iterations.map(
      (iterationDTO): Iteration => ({
        id: iterationDTO.id,
        n: iterationDTO.n,
        notes: iterationDTO.notes,
        score: iterationDTO.score,
        items: iterationDTO.items.map(itemDTO => ({text: itemDTO.text;
          state: itemDTO.state}))
      }),
    );
  },
  // deleteIterations: async (iterations: any) => {
  //   return await http.delete('iterations', iterations);
  // },
  // postIteration: async (iteration: IterationFormData) => {
  //   return await http.post('iterations', iteration);
  // },
};
