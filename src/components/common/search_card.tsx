import React, { memo } from 'react';
import { Image, View } from 'react-native';
import styles from '../../styles/styles';
import imgReq from '../../constants/imgReq';
import { colors } from '../../constants/colors';
import { Txt } from './customeTxt';
import StartRating from './start_rating';
import VectorIcons, { iconsName } from './icon';

const SearchCard = memo(() => {
  return (
    <View style={{ marginTop: 15, flexDirection: 'row' }}>
      <View>
        <Image style={styles?.popularCardView} source={imgReq?.img1} />
      </View>
      <View style={{ flex: 1, marginLeft: 15 }}>
        <View>
          <Txt bold numberOfLines={2} color={colors?.white}>
            Spiderman: No Way Home
          </Txt>
        </View>
        <View style={{ marginTop: 10 }}>
          <StartRating />
        </View>
        <View style={{ flexDirection: 'row' }}>
          {[12, 3, 4].map(() => {
            return (
              <View>
                <Carificate />
              </View>
            );
          })}
        </View>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <View style={{ justifyContent: 'center', marginRight: 10 }}>
            <VectorIcons
              color={colors?.white}
              name="clock"
              iconType={iconsName.Octicons}
              size={13}
            />
          </View>
          <View>
            <Txt color={colors?.white} size={14}>
              1h 47m
            </Txt>
          </View>
        </View>
      </View>
    </View>
  );
});

export const Carificate = memo(({ item }: any) => {
  return (
    <View style={styles?.movieCarificateView}>
      <Txt size={10}>{item?.name}</Txt>
    </View>
  );
});

export default SearchCard;
