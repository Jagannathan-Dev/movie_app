import React, { memo } from 'react';
import { View } from 'react-native';
import { Txt } from './customeTxt';
import VectorIcons, { iconsName } from './icon';
import { colors } from '../../constants/colors';

interface props {
  rate?: string;
}

const StartRating = memo(({ rate }: props) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ justifyContent: 'center' }}>
        <VectorIcons
          size={11}
          name="star"
          iconType={iconsName?.AntDesign}
          color="#FFC319"
        />
      </View>
      <View style={{ flex: 1, marginLeft: 5 }}>
        <Txt size={12} color={colors?.white}>
          {rate}/10 IMDb
        </Txt>
      </View>
    </View>
  );
});

export default StartRating;
