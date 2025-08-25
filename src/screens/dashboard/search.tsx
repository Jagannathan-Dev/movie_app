import React, { FC } from 'react';
import { FlatList, Image, ScrollView, View } from 'react-native';
import ScreenContainer from '../../components/common/screenContainer';
import ShowTitle from '../../components/common/show_title';
import PopularCard from '../../components/common/popular_card';
import Input from '../../components/common/input';
import VectorIcons, { iconsName } from '../../components/common/icon';
import SearchCard from '../../components/common/search_card';
import imgReq from '../../constants/imgReq';
import { responsiveSize } from '../../constants/responsiveSize';
import { Txt } from '../../components/common/customeTxt';
import { colors } from '../../constants/colors';

const Search: FC = () => {
  return (
    <ScreenContainer
      rightIconPressed={() => null}
      leftIconPressed={() => null}
      title={'Search'}
    >
      <View style={{ flex: 1 }}>
        <FlatList
          ListHeaderComponent={
            <View>
              <Input
                paddingVertical={2}
                rightIconPressed={() => null}
                rightIcon={
                  <VectorIcons name="search" iconType={iconsName?.Feather} />
                }
                placeholder="Search here..."
                backgroundColor="#fff"
              />
            </View>
          }
          ListEmptyComponent={
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View>
                <Image
                  source={imgReq?.no_result}
                  style={{
                    width: responsiveSize(150),
                    height: responsiveSize(150),
                  }}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <View>
                  <Txt textAlign="center" bold color={colors?.white}>
                    {`We Are Sorry, We Can\nNot Find The Movie :(`}
                  </Txt>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Txt textAlign="center" color={colors?.mediumGray}>
                    {`Find your movie by Type title,\ncategories, years, etc`}
                  </Txt>
                </View>
              </View>
            </View>
          }
          ListHeaderComponentStyle={{ marginBottom: 20 }}
          data={[1, 4, 5, 5]}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 100,
            flexGrow: 1,
          }}
          renderItem={({ item, index }) => <SearchCard />}
        />
      </View>
    </ScreenContainer>
  );
};

export default Search;
