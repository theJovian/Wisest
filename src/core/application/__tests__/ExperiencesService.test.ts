import {ExperienceService} from '../ExperienceService';
import {ExperienceRepository} from '../../domain/Experience/ExperienceRepository';

describe('this should pass', () => {
  it('should pass', async () => {
    jest
      .spyOn(ExperienceRepository, 'getExperiences')
      .mockResolvedValue([{id: 1, name: 'asd', description: 'asdf'}]);
    const resp = await ExperienceService.getExperiences();
    expect(resp).toEqual([{id: 1, name: 'asd', description: 'asdf'}]);
    // expect(true).toBe(true);
    //   .then(exp => {
    //     expect(exp).toBe({id: 100});
    //   });
  });
});
