import {IterationRepository} from '../domain/Iteration/IterationRepository';
import {IterationFormData} from '../../ui/screens/Iteration/CreateIteration/CreateIteration.controller';

export const IterationService = {
  getIterations: (experienceId: number) => {
    return IterationRepository.getIterations(experienceId);
  },
  // deleteIterations: (iterations: any) => {
  //   return IterationRepository.deleteIterations(iterations);
  // },
  createIteration: (iteration: IterationFormData) => {
    return IterationRepository.postIteration(iteration);
  },
  uploadPhoto: async (image: any, iterationId: number) => {
    const {secure_url} = await IterationRepository.postImage(image);
    console.log('this should be my new url ', secure_url);
    const result = await IterationRepository.putIteration(
      secure_url,
      iterationId,
    );
    console.log(result);
  },
};
