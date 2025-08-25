import React, { ReactNode } from 'react';
import {
  Image,
  ImageBackground,
  ImageRequireSource,
  SafeAreaView,
  View,
} from 'react-native';
import imgReq from '../../constants/imgReq';
import PageHeader from './pageHeader';
import VectorIcons, { iconsName } from './icon';
import styles from '../../styles/styles';

interface screenContainType {
  children: ReactNode;
  bgImage?: ImageRequireSource;
  isVisible?: boolean;
  title?: string;
  header?: boolean;
  leftIconPressed?: () => void;
  rightIconPressed?: () => void;
  leftIcon?: any;
  rightIcon?: any;
}

const ScreenContainer = ({
  children,
  bgImage,
  isVisible = false,
  title,
  header = true,
  leftIcon = <Image source={imgReq?.menu} style={styles?.headerIcon} />,
  rightIcon = <Image source={imgReq?.notify} style={styles?.headerIcon} />,
  leftIconPressed,
  rightIconPressed,
}: screenContainType) => {
  //

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        {title && (
          <PageHeader
            title={title}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            leftIconPressed={leftIconPressed}
            rightIconPressed={rightIconPressed}
          />
        )}
        <View style={{ flex: 1 }}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

export default ScreenContainer;
