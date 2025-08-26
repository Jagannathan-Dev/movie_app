import React, { memo } from 'react';
import { Image, Pressable, View } from 'react-native';
import styles from '../../styles/styles';
import imgReq from '../../constants/imgReq';
import { colors } from '../../constants/colors';
import { Txt } from './customeTxt';
import StartRating from './start_rating';
import VectorIcons, { iconsName } from './icon';
import imgUrl from '../../constants/imgUrl';
import moment from 'moment';

interface props {
  item?: any;
  index?: number;
  onpressed?: (v: any) => void;
}

const SearchCard = memo(({ item, index, onpressed }: props) => {
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
            <View style={{ marginTop: 5 }}>
              <StartRating rate={`${Math.round(Number(item?.vote_average))}`} />
            </View>
            <View style={{ flexDirection: 'row' }}></View>
            <LabelCom
              iconN={'ticket-outline'}
              iconT={iconsName?.Ionicons}
              label={'Action'}
            />
            <LabelCom
              iconN={'calendar'}
              iconT={iconsName?.Feather}
              label={moment(item?.release_date).format('MMM/YYYY')}
            />
          </View>
        </View>
      </Pressable>
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

export const LabelCom = memo(({ iconN, iconT, label }: any) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 3 }}>
      <View style={{ justifyContent: 'center', marginRight: 10 }}>
        <VectorIcons
          color={colors?.white}
          name={iconN}
          iconType={iconT}
          size={13}
        />
      </View>
      <View>
        <Txt color={colors?.white} size={14}>
          {label}
        </Txt>
      </View>
    </View>
  );
});

export default SearchCard;
