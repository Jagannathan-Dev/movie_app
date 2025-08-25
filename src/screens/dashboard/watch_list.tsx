import React, { FC } from 'react';
import { View } from 'react-native';
import ScreenContainer from '../../components/common/screenContainer';

const WatchList: FC = () => {
  return (
    <ScreenContainer
      rightIconPressed={() => null}
      leftIconPressed={() => null}
      title={'Watch List'}
    >
      <View style={{ flex: 1 }}></View>
    </ScreenContainer>
  );
};

export default WatchList;
