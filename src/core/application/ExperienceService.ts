import {ExperienceRepository} from '../domain/Experience/ExperienceRepository';

export const ExperienceService = {
  getExperiences: () => {
    return ExperienceRepository.getExperiences();
  },
};
