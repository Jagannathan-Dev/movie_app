import React, { memo } from 'react';
import { Image, Pressable, View } from 'react-native';
import styles from '../../styles/styles';
import imgReq from '../../constants/imgReq';
import { Txt } from './customeTxt';
import { colors } from '../../constants/colors';
import StartRating from './start_rating';
import imgUrl from '../../constants/imgUrl';

interface props {
  item?: any;
  index?: number;
  onpressed?: (c: any) => void;
}

const ShowNowPlayingCard = memo(({ item, index, onpressed }: props) => {
  return (
    <View>
      <Pressable onPress={() => onpressed?.(item)}>
        <View style={styles?.newPlayingCardsView}>
          <View>
            <Image
              style={styles?.newPlayingImg}
              source={{ uri: `${imgUrl?.imgBaseUrl}${item?.poster_path}` }}
            />
          </View>
          <View style={{ marginTop: 5 }}>
            <View>
              <Txt size={13} numberOfLines={2} color={colors?.white}>
                {item?.title}
              </Txt>
            </View>
            <View style={{ marginTop: 10 }}>
              <StartRating rate={`${Math.round(Number(item?.vote_average))}`} />
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
});

export default ShowNowPlayingCard;
