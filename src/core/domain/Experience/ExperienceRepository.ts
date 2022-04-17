import {http} from '../../infraestructure/http/http';
import {Experience, ExperienceFormData} from './Experience';
import {ExperienceDTO} from '../../infraestructure/http/dto/ExperienceDTO';

export const ExperienceRepository = {
  getExperiences: async (userId: number) => {
    const experiences = await http.get<ExperienceDTO[]>(
      `experiences/${userId}`,
    );
    return experiences.map(
      (experienceDTO): Experience => ({
        id: experienceDTO.id,
        name: experienceDTO.name,
        description: experienceDTO.description,
        userId: experienceDTO.user_id,
      }),
    );
  },
  deleteExperiences: async (experiences: any) => {
    return await http.delete('experiences', experiences);
  },
  postExperience: async (experience: ExperienceFormData) => {
    return await http.post('experiences', experience);
  },
};
