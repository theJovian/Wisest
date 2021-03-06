import {Iteration} from './Iteration';
import {IterationDTO} from '../../infraestructure/http/dto/IterationDTO';
import {http} from '../../infraestructure/http/http';
import {IterationFormData} from '../../../ui/screens/Iteration/CreateIteration/CreateIteration.controller';

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
        image: iterationDTO.image,
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
  postIteration: async (iteration: IterationFormData) => {
    return await http.post('iteration', iteration);
  },

  putIteration: async (image: string, iterationId: number) => {
    return await http.put(`iteration/${iterationId}`, {image: image});
  },

  postImage: async (image: any) => {
    return await http.postImage(image);
  },
};
