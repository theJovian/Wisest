import {ExperienceService} from '../../../core/application/ExperienceService';
import {useEffect, useState} from 'react';
import {Experience as ExperienceType} from '../../../core/domain/Experience/Experience';
import React from 'react';
import {Experiences} from './Experiences';

export const ExperiencesController = () => {
  const [experiences, setExperiences] = useState<ExperienceType[]>(
    [] as ExperienceType[],
  );
  const loadExperiences = () => {
    ExperienceService.getExperiences().then(exp => setExperiences(exp));
  };
  useEffect(() => {
    loadExperiences();
  }, []);
  return <Experiences experiences={experiences} />;
};
