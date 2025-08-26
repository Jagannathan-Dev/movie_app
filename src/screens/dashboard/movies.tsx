import React, { FC, useCallback, useEffect } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import ScreenContainer from '../../components/common/screenContainer';
import ShowTitle from '../../components/common/show_title';
import ShowNowPlayingCard from '../../components/common/now_playin_card';
import PopularCard from '../../components/common/popular_card';
import { navigate } from '../../constants/navigationRef';
import { useDispatch, useSelector } from 'react-redux';
import { popularMovieRequest } from '../../redux/popular_movies/action';
import { nowPlayingRequest } from '../../redux/now_playing/action';

interface props {}

const Movies: FC = () => {
  //
  const dispatch = useDispatch();
  const { popularMovie } = useSelector((s: any) => s.popular);
  const { nowPlaying } = useSelector((s: any) => s.nowplaying);

  useEffect(() => {
    dispatch(popularMovieRequest());
    dispatch(nowPlayingRequest());
  }, []);

  const handleNavigate = useCallback((n: string, v: any) => {
    navigate(n, { data: v });
  }, []);

  return (
    <ScreenContainer
      rightIconPressed={() => null}
      leftIconPressed={() => null}
      title={'FilmKu'}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          padding: 20,
          paddingBottom: 100,
        }}
      >
        <View style={{ flex: 1 }}>
          <ShowTitle
            onpressed={() => handleNavigate('moremovie', 'now_playing')}
            title={'Now Playing'}
          >
            <View>
              <FlatList
                data={nowPlaying?.results?.slice(0, 5)}
                keyExtractor={(_, i) => i.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <ShowNowPlayingCard
                    index={index}
                    item={item}
                    onpressed={v => handleNavigate('moviedetails', v)}
                  />
                )}
              />
            </View>
          </ShowTitle>
          <View style={{ marginTop: 20 }}>
            <ShowTitle
              onpressed={() => handleNavigate('moremovie', 'popular')}
              title={'Popular'}
            >
              <View>
                <FlatList
                  data={popularMovie?.results?.slice(0, 5)}
                  keyExtractor={(_, i) => i.toString()}
                  scrollEnabled={false}
                  renderItem={({ item, index }) => (
                    <PopularCard
                      index={index}
                      item={item}
                      onpressed={v => handleNavigate('moviedetails', v)}
                    />
                  )}
                />
              </View>
            </ShowTitle>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default Movies;
