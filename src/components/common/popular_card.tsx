import React, { memo } from 'react';
import { Image, Pressable, View } from 'react-native';
import styles from '../../styles/styles';
import imgReq from '../../constants/imgReq';
import { Txt } from './customeTxt';
import { colors } from '../../constants/colors';
import StartRating from './start_rating';
import VectorIcons, { iconsName } from './icon';
import imgUrl from '../../constants/imgUrl';
import { LabelCom } from './search_card';
import moment from 'moment';

interface props {
  item?: any;
  index?: number;
  onpressed?: (v: any) => void;
}

const PopularCard = memo(({ item, index, onpressed }: props) => {
  return (
    <View>
      <Pressable onPress={() => onpressed?.(item)}>
        <View style={{ marginTop: 15, flexDirection: 'row' }}>
          <View>
            <Image
              style={styles?.popularCardView}
              source={{ uri: `${imgUrl?.imgBaseUrl}${item?.poster_path}` }}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 15 }}>
            <View>
              <Txt bold numberOfLines={2} color={colors?.white}>
                {item?.title}
              </Txt>
            </View>
            <View style={{ marginTop: 10 }}>
              <StartRating rate={`${Math.round(Number(item?.vote_average))}`} />
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
            <View style={{ marginTop: 5 }}>
              <LabelCom
                iconN={'calendar'}
                iconT={iconsName?.Feather}
                label={moment(item?.release_date).format('MMM/YYYY')}
              />
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
});

const Carificate = memo(() => {
  return (
    <View style={styles?.movieCarificateView}>
      <Txt size={10}>HORROR</Txt>
    </View>
  );
});

export default PopularCard;
