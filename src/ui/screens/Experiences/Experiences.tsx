import {ExperienceElement} from './ExperienceElement';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Experience} from '../../../core/domain/Experience/Experience';
import {SideMenu} from '../../components/Objects/SideMenu';
import {FloatingButton} from '../../components/Objects/FloatingButton';
import {Separator} from '../../components/Atoms/Separator';
import {SideItem} from '../../components/Molecules/SideItem';

interface Props {
  experiences: Experience[];
  onCreateNewExperience: () => void;
  onDeleteExperience: () => void;
}

export const Experiences = ({
  experiences,
  onCreateNewExperience,
  onDeleteExperience,
}: Props) => {
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.experiencesContainer}>
        <FlatList
          ListHeaderComponent={() => (
            <Text style={styles.title}>My Experiences</Text>
          )}
          ListFooterComponent={() => <Separator vertical="big" />}
          showsVerticalScrollIndicator={false}
          data={experiences}
          renderItem={({item}) => <ExperienceElement experience={item} />}
        />
      </View>
      <View style={styles.floatingMenu}>
        {isSideMenuVisible && (
          <>
            <SideMenu>
              <SideItem
                icon="trash-outline"
                label="Delete"
                onPress={() => {
                  setIsSideMenuVisible(false);
                  onDeleteExperience();
                }}
              />
              <SideItem
                icon="create-outline"
                label="Edit"
                onPress={() => {
                  setIsSideMenuVisible(false);
                }}
              />
              <SideItem
                icon="add-outline"
                label="New"
                onPress={() => {
                  setIsSideMenuVisible(false);
                  onCreateNewExperience();
                }}
              />
            </SideMenu>
            <Separator vertical="medium" />
          </>
        )}
        <FloatingButton
          onPress={() => setIsSideMenuVisible(!isSideMenuVisible)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
    flex: 1,
    alignItems: 'center',
  },
  experiencesContainer: {
    marginHorizontal: 40,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    paddingTop: 50,
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
  floatingMenu: {
    // backgroundColor: 'blue',
    position: 'absolute',
    bottom: 50,
    right: 20,
    alignItems: 'flex-end',
  },
});
