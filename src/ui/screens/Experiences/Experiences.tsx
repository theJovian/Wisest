import {ExperienceItem} from '../../components/Molecules/ExperienceItem';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Experience} from '../../../core/domain/Experience/Experience';
import {SideMenu} from '../../components/Molecules/SideMenu';
import {FloatingButton} from '../../components/Atoms/FloatingButton';
import {Separator} from '../../components/Objects/Separator';
import {SideItem} from '../../components/Atoms/SideItem';
import {dark} from '../../Styles/globalStyle';

interface Props {
  experiences: Experience[];
  onCreateNewExperience: () => void;
  onDeleteExperience: () => void;
  onSelectExperience: (experience: Experience) => void;
  onGoToSettings: () => void;
}

export const Experiences = ({
  experiences,
  onCreateNewExperience,
  onDeleteExperience,
  onSelectExperience,
  onGoToSettings,
}: Props) => {
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.experiencesContainer}>
        <FlatList
          ListHeaderComponent={() => (
            <Text style={styles.title}>My Experiences</Text>
          )}
          ListEmptyComponent={() => (
            <Text style={styles.subtitle}>
              You have no experiences yet... Try adding one!
            </Text>
          )}
          ListFooterComponent={() => <Separator vertical="big" />}
          showsVerticalScrollIndicator={false}
          data={experiences}
          renderItem={({item}) => (
            <ExperienceItem
              width="100%"
              key={item.id + item.name}
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
                icon="person-circle-outline"
                label="Account"
                onPress={() => {
                  setIsSideMenuVisible(false);
                  onGoToSettings();
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
    fontSize: 20,
    fontWeight: 'normal',
    letterSpacing: 2,
    textAlign: 'center',
    color: dark,
  },
  floatingMenu: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    alignItems: 'flex-end',
  },
});
