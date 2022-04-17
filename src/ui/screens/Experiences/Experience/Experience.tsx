import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Experience as ExperienceModel} from '../../../../core/domain/Experience/Experience';
import {IterationPreview} from '../../Iteration/IterationPreview';
import {Iteration as IterationModel} from '../../../../core/domain/Iteration/Iteration';
import {SideMenu} from '../../../components/Objects/SideMenu';
import {SideItem} from '../../../components/Molecules/SideItem';
import {Separator} from '../../../components/Atoms/Separator';
import {FloatingButton} from '../../../components/Objects/FloatingButton';

interface Props {
  experience: ExperienceModel;
  iterations: IterationModel[];
  onPress: (iteration: IterationModel) => void;
  createIteration: (n: number, experience: string) => void;
  deleteIterations: (iterations: IterationModel[]) => void;
}

export const Experience = ({
  experience,
  iterations,
  onPress,
  createIteration,
  deleteIterations,
}: Props) => {
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Separator />
        <Text style={styles.title}>{experience.name}</Text>
        <Text style={styles.description}>{experience.description}</Text>
        <View style={styles.carousel}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={iterations}
            renderItem={({item}) => (
              <IterationPreview
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
        {isSideMenuVisible && (
          <>
            <SideMenu>
              <SideItem
                icon="trash-outline"
                label="Delete"
                onPress={() => {
                  setIsSideMenuVisible(false);
                  deleteIterations(iterations);
                }}
              />
              <SideItem
                icon="add-outline"
                label="New"
                onPress={() => {
                  setIsSideMenuVisible(false);
                  createIteration(iterations.length + 1, experience.name);
                }}
              />
            </SideMenu>
            <Separator vertical="medium" />
          </>
        )}
        <FloatingButton
          onPress={() => setIsSideMenuVisible(!isSideMenuVisible)}
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
  },
});
