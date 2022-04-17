import {ExperienceItem} from './ExperienceItem';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Experience} from '../../../core/domain/Experience/Experience';
import {SideMenu} from '../../components/Objects/SideMenu';
import {FloatingButton} from '../../components/Objects/FloatingButton';
import {Separator} from '../../components/Atoms/Separator';
import {SideItem} from '../../components/Molecules/SideItem';
import {dark} from '../../Styles/globalStyle';

interface Props {
  experiences: Experience[];
  onCreateNewExperience: () => void;
  onDeleteExperience: () => void;
  onSelectExperience: (experience: Experience) => void;
}

export const Experiences = ({
  experiences,
  onCreateNewExperience,
  onDeleteExperience,
  onSelectExperience,
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
          renderItem={({item}) => (
            <ExperienceItem
              experience={item}
              onPress={() => {
                onSelectExperience(item);
              }}
            />
          )}
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
                icon="add-outline"
                label="New"
                onPress={() => {
                  setIsSideMenuVisible(false);
                  onCreateNewExperience();
                }}
              />
              <SideItem
                icon="cog-outline"
                label="Settings"
                onPress={() => {
                  setIsSideMenuVisible(false);
                }}
              />
            </SideMenu>
            <Separator vertical="medium" />
          </>
        )}
        <FloatingButton
          onPress={() => setIsSideMenuVisible(!isSideMenuVisible)}
          icon="grid-outline"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  experiencesContainer: {
    marginHorizontal: 40,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
    color: dark,
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
  floatingMenu: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    alignItems: 'flex-end',
  },
});
