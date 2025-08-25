import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import BottomTabScreens from './bottomTabs';
import MovieDetails from '../screens/movie_details/movie_details';
import MoreMovieList from '../screens/movie_details/more_movies';

const Stack = createStackNavigator();

export const AfterScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      <Stack.Screen name="dashboard" component={BottomTabScreens} />
      <Stack.Screen name="moviedetails" component={MovieDetails} />
      <Stack.Screen name="moremovie" component={MoreMovieList} />
    </Stack.Navigator>
  );
};
