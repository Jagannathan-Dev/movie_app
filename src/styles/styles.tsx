import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { responsiveSize } from '../constants/responsiveSize';
import { Medium } from '../constants/txtFonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.primary,
  },
  //
  customButtonView: {},
  headerIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: colors?.white,
  },
  showTitleSeeButtonView: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 100,
    borderColor: colors?.white,
  },
  inputView: {
    flexDirection: 'row',
    paddingVertical: 7,
    // borderRadius: 100,
  },
  inputTxt: {
    color: colors.jetBlack,
    fontFamily: Medium,
    fontSize: 14,
  },
  errorTxt: {
    color: colors.red,
    fontFamily: Medium,
    fontSize: 13,
    marginTop: 1,
  },

  movieCarificateView: {
    marginTop: 15,
    backgroundColor: '#DBE3FF',
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
  },

  //Now playing card
  newPlayingCardsView: {
    width: responsiveSize(142),
    marginRight: 14,
  },
  newPlayingImg: {
    width: '100%',
    height: responsiveSize(212),
    borderRadius: 7,
  },

  //Popular Card View
  popularCardView: {
    width: responsiveSize(85),
    height: responsiveSize(120),
    borderRadius: 8,
  },
});

export default styles;
