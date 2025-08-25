import React, { FC, memo, ReactNode } from 'react';
import { Pressable, View } from 'react-native';
import { Txt } from './customeTxt';
import { colors } from '../../constants/colors';
import styles from '../../styles/styles';

interface props {
  children: ReactNode;
  title: string;
  visible?: boolean;
  onpressed?: () => void;
}

const ShowTitle: FC<props> = memo(
  ({ children, title, onpressed, visible = true }) => {
    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Txt bold size={16} color={colors?.white}>
              {title}
            </Txt>
          </View>
          {visible && (
            <View style={{ justifyContent: 'center' }}>
              <Pressable onPress={onpressed}>
                <View style={styles?.showTitleSeeButtonView}>
                  <Txt size={10} color={colors?.white}>
                    See more
                  </Txt>
                </View>
              </Pressable>
            </View>
          )}
        </View>
        <View style={{ marginTop: 10 }}>{children}</View>
      </View>
    );
  },
);

export default ShowTitle;
