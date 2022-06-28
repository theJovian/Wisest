import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Experience as ExperienceModel} from '../../../../core/domain/Experience/Experience';
import {IterationPreview} from './components/IterationPreview';
import {Iteration as IterationModel} from '../../../../core/domain/Iteration/Iteration';
import {SideMenu} from '../../../components/Molecules/SideMenu';
import {SideItem} from '../../../components/Atoms/SideItem';
import {Separator} from '../../../components/Objects/Separator';
import {FloatingButton} from '../../../components/Atoms/FloatingButton';
import {dark} from '../../../Styles/globalStyle';

interface Props {
  experience: ExperienceModel;
  iterations: IterationModel[];
  onPress: (iteration: IterationModel) => void;
  createIteration: (n: number, experience: string) => void;
}

export const Experience = ({
  experience,
  iterations,
  onPress,
  createIteration,
}: Props) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Separator vertical="small" />
        <Text style={styles.title}>{experience.name}</Text>
        <Text style={styles.description}>{experience.description}</Text>
        <View style={styles.carousel}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={iterations}
            renderItem={({item}) => (
              <IterationPreview
                key={item.id}
                iteration={item}
                onPress={() => onPress(item)}
                numberOfItems={5}
              />
            )}
          />
        </View>
        <Separator vertical="big" />
        <Separator vertical="big" />
        <Separator vertical="big" />
      </ScrollView>
      <View style={styles.floatingMenu}>
        <FloatingButton
          onPress={() =>
            createIteration(iterations.length + 1, experience.name)
          }
          icon="brush"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: dark,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  carousel: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '85%',
    marginTop: 20,
  },
  floatingMenu: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 999,
    alignItems: 'flex-end',
  },
});
