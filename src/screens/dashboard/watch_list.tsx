import React, { FC } from 'react';
import { FlatList, Image, View } from 'react-native';
import ScreenContainer from '../../components/common/screenContainer';
import { responsiveSize } from '../../constants/responsiveSize';
import imgReq from '../../constants/imgReq';
import { colors } from '../../constants/colors';
import { Txt } from '../../components/common/customeTxt';

const WatchList: FC = () => {
  return (
    <ScreenContainer
      rightIconPressed={() => null}
      leftIconPressed={() => null}
      title={'Watch List'}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View>
          <Image
            source={imgReq?.no_data}
            style={{
              width: responsiveSize(300),
              height: responsiveSize(300),
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <View>
            <Txt textAlign="center" bold color={colors?.white}>
              {`We Are Sorry, We Can\nNot Find The Movie :(`}
            </Txt>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default WatchList;
