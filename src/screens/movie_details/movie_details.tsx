import React, { FC, memo, useEffect, useState } from 'react';
import ScreenContainer from '../../components/common/screenContainer';
import {
  ActivityIndicator,
  Image,
  RefreshControl,
  ScrollView,
  View,
} from 'react-native';
import VectorIcons, { iconsName } from '../../components/common/icon';
import { colors } from '../../constants/colors';
import { responsiveSize } from '../../constants/responsiveSize';
import { width } from '../../constants/dimensions';
import imgReq from '../../constants/imgReq';
import { Txt } from '../../components/common/customeTxt';
import StartRating from '../../components/common/start_rating';
import { Carificate } from '../../components/common/search_card';
import ShowTitle from '../../components/common/show_title';
import { GET_MOVIES_DETAILS } from '../../services/api_service';
import imgUrl from '../../constants/imgUrl';

interface props {
  navigation: any;
  route?: any;
}

const MovieDetails: FC<props> = ({ navigation, route }) => {
  const data = route?.params?.data;

  const [loading, setLoading] = useState<boolean>(false);
  const [movieDetails, setMovieDetails] = useState<any>({});

  useEffect(() => {
    getMovieDetails();
  }, [data?.id]);

  const getMovieDetails = async () => {
    try {
      setLoading(true);
      await GET_MOVIES_DETAILS(data?.id).then(res => {
        console.log(res);
        if (res?.id) {
          setMovieDetails(res);
        }
      });
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenContainer
      leftIcon={
        <VectorIcons
          name="arrow-left"
          iconType={iconsName?.Feather}
          color={colors?.white}
        />
      }
      rightIcon={
        <VectorIcons
          name="bookmark-outline"
          iconType={iconsName?.Ionicons}
          color={colors?.white}
        />
      }
      rightIconPressed={() => null}
      leftIconPressed={() => navigation.pop()}
      title={'Details'}
    >
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, flexGrow: 1 }}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={getMovieDetails} />
          }
        >
          <View style={{ flex: 1 }}>
            <View>
              <Image
                style={{
                  width: '100%',
                  height: responsiveSize(width),
                  borderRadius: 10,
                }}
                source={{
                  uri: `${imgUrl?.imgBaseUrl}${movieDetails?.poster_path}`,
                }}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Txt color={colors?.white} size={20}>
                {movieDetails?.title}
              </Txt>
            </View>
            <View style={{ marginTop: 10 }}>
              <StartRating
                rate={`${Math.round(Number(movieDetails?.vote_average))}`}
              />
            </View>
            <View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {movieDetails?.genres?.map((item: any, index: number) => {
                  return (
                    <View key={index.toString()}>
                      <Carificate item={item} />
                    </View>
                  );
                })}
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <ShowTitle visible={false} title={'Description'}>
                <View>
                  <Txt size={12} regular color={colors?.white}>
                    {movieDetails?.overview}
                  </Txt>
                </View>
              </ShowTitle>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

export default MovieDetails;
