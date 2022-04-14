import {IterationRepository} from '../domain/Iteration/IterationRepository';

export const IterationService = {
  getIterations: (experienceId: number) => {
    return IterationRepository.getIterations(experienceId);
  },
  // deleteIterations: (iterations: any) => {
  //   return IterationRepository.deleteIterations(iterations);
  // },
  // createIteration: (iteration: IterationFormData) => {
  //   console.log(JSON.stringify(iteration, null, 5));
  //   return IterationRepository.postIteration(iteration);
  // },
};
