import {Iteration} from './Iteration';
import {IterationDTO} from '../../infraestructure/http/dto/IterationDTO';
import {http} from '../../infraestructure/http/http';

export const IterationRepository = {
  getIterations: async (experienceId: number) => {
    const iterations = await http.get<IterationDTO[]>(
      `iterations/${experienceId}`,
    );
    console.log(JSON.stringify(iterations, null, 5));
    return iterations.map(
      (iterationDTO): Iteration => ({
        id: iterationDTO.id,
        n: iterationDTO.n,
        notes: iterationDTO.notes,
        score: iterationDTO.score,
        experienceId: iterationDTO.experienceId,
        items: iterationDTO.items.map(itemDTO => ({
          text: itemDTO.text,
          state: itemDTO.state,
        })),
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
