import {ExperienceRepository} from '../domain/Experience/ExperienceRepository';
import {ExperienceFormData} from '../domain/Experience/Experience';

export const ExperienceService = {
  getExperiences: (userId: number) => {
    return ExperienceRepository.getExperiences(userId);
  },
  deleteExperiences: (experiences: any) => {
    return ExperienceRepository.deleteExperiences(experiences);
  },
  createExperience: (experience: ExperienceFormData) => {
    return ExperienceRepository.postExperience(experience);
  },
};
