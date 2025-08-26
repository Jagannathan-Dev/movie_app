import React, { FC, memo, useCallback, useEffect } from 'react';
import ScreenContainer from '../../components/common/screenContainer';
import { FlatList, RefreshControl, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ShowNowPlayingCard from '../../components/common/now_playin_card';
import { navigate } from '../../constants/navigationRef';
import { movieListRequest } from '../../redux/movie_list/action';
import VectorIcons, { iconsName } from '../../components/common/icon';
import { colors } from '../../constants/colors';

interface props {
  navigation: any;
  route?: any;
}

const MoreMovieList: FC<props> = ({ navigation, route }) => {
  //
  const data = route?.params?.data;

  const dispatch = useDispatch();
  const { movieList, movieListLoad } = useSelector((s: any) => s.movielist);
  const { nowPlaying } = useSelector((s: any) => s.nowplaying);

  useEffect(() => {
    handleGetMovieList();
  }, []);

  const handleGetMovieList = () => {
    dispatch(movieListRequest(data));
  };

  const handleNavigate = useCallback((v: any) => {
    navigate('moviedetails', { data: v });
  }, []);

  return (
    <ScreenContainer
      leftIcon={
        <VectorIcons
          name="arrow-left"
          iconType={iconsName?.Feather}
          color={colors?.white}
        />
      }
      leftIconPressed={() => navigation.pop()}
      title={'Movie List'}
    >
      <View>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={movieListLoad}
              onRefresh={handleGetMovieList}
            />
          }
          data={movieList?.results}
          keyExtractor={(_, i) => i.toString()}
          columnWrapperStyle={{ justifyContent: 'space-evenly' }}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={{ marginTop: 20 }}>
              <ShowNowPlayingCard
                index={index}
                item={item}
                onpressed={v => handleNavigate(v)}
              />
            </View>
          )}
        />
      </View>
    </ScreenContainer>
  );
};

export default MoreMovieList;
