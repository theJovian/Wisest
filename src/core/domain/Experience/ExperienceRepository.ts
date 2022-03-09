import {http} from '../../infraestructure/http/http';
import {Experience} from './Experience';
import {ExperienceDTO} from '../../infraestructure/http/dto/ExperienceDTO';

export const ExperienceRepository = {
  getExperiences: async () => {
    const experiences = await http.get<ExperienceDTO[]>('experiences');
    return experiences.map(
      (experienceDTO): Experience => ({
        id: experienceDTO.id,
        name: experienceDTO.name,
        description: experienceDTO.description,
      }),
    );
  },
};
