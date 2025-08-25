import React, { FC, useEffect, useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

import { colors } from '../constants/colors';
import { Txt } from './common/customeTxt';
import VectorIcons, { iconsName } from './common/icon';
import imgReq from '../constants/imgReq';
import { responsiveSize } from '../constants/responsiveSize';
import CustomButton from './common/customeButton';
import styles from '../styles/styles';
import { width } from '../constants/dimensions';

interface props {
  visible: boolean;
  handleSkip?: () => void;
}

const WelcomeScreens: FC<props> = ({ visible, handleSkip = () => null }) => {
  const val = 20;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    {
      img: imgReq?.img1,
      title: 'F1',
      label: `A Formula One driver comes out of retirement to mentor and team up with a younger driver.`,
    },
    {
      img: imgReq?.img2,
      title: 'Thalaivan Thalaivi',
      label: `Thalaivan Thalaivi follows a fiery couple who are constantly at odds but deeply in love`,
    },
    {
      img: imgReq?.img3,
      title: 'Coolie',
      label: `A former coolie union leader investigates the death of his friend which leads him to a crime syndicate`,
    },
    {
      img: imgReq?.img4,
      title: 'Avatar',
      label: `"Avatar" (2009), directed by James Cameron, is a science fiction film set in the year 2154 on the lush alien moon Pandora`,
    },
  ]);

  useEffect(() => {
    if (currentIndex === images.length - 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const platform = Platform.OS === 'ios';

  return (
    <Modal visible={visible} transparent animationType="fade">
      <SafeAreaView style={styles?.container}>
        <View
          style={{
            flex: 1,
            padding: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
            }}
          >
            <View style={{ alignItems: 'center' }}>
              <Image
                source={images[currentIndex]?.img}
                style={{
                  width: '100%',
                  height: responsiveSize(width),
                  resizeMode: 'contain',
                }}
              />
              <View style={{ marginTop: 20 }}>
                <View style={{ marginBottom: 10 }}>
                  <Txt bold size={24} color={colors?.white}>
                    {images[currentIndex]?.title}
                  </Txt>
                </View>
                <Txt size={15} color={colors?.white}>
                  {images[currentIndex]?.label}
                </Txt>
              </View>
            </View>
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                {images.map((item, index) => {
                  return (
                    <View key={index}>
                      <View
                        style={{
                          width: 10,
                          height: 10,
                          backgroundColor:
                            currentIndex === index
                              ? colors?.secondary
                              : 'rgba(176,176,176,0.7)',
                          borderRadius: 100,
                          marginHorizontal: 3,
                        }}
                      />
                    </View>
                  );
                })}
              </View>
              <View style={{ marginTop: 20 }}>
                <CustomButton handlePressed={handleSkip} label="Skip" />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default WelcomeScreens;
