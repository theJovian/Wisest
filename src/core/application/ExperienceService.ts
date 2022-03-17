import {ExperienceRepository} from '../domain/Experience/ExperienceRepository';

export const ExperienceService = {
  getExperiences: () => {
    return ExperienceRepository.getExperiences();
  },
  deleteExperiences: (experiences: any) => {
    return ExperienceRepository.deleteExperiences(experiences);
  },
};
