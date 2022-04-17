import {ExperienceRepository} from '../domain/Experience/ExperienceRepository';
import {ExperienceFormData} from '../domain/Experience/Experience';

export const ExperienceService = {
  getExperiences: () => {
    return ExperienceRepository.getExperiences();
  },
  deleteExperiences: (experiences: any) => {
    return ExperienceRepository.deleteExperiences(experiences);
  },
  createExperience: (experience: ExperienceFormData) => {
    console.log(JSON.stringify(experience, null, 5));
    return ExperienceRepository.postExperience(experience);
  },
};
