import {http} from '../../infraestructure/http/http';
import {Experience} from './Experience';
import {ExperienceDTO} from '../../infraestructure/http/dto/ExperienceDTO';

export const ExperienceRepository = {
  getExperiences: async () => {
    const experiences = await http.get<ExperienceDTO[]>(
      'http://ec2-13-38-81-126.eu-west-3.compute.amazonaws.com/api/experiences',
      // 'http://10.0.2.2:3000/experiences',
    );
    console.log(experiences + '********************');
    return experiences.map(
      (experienceDTO): Experience => ({
        id: experienceDTO.id,
        name: experienceDTO.name,
        description: experienceDTO.description,
      }),
    );
  },
};
