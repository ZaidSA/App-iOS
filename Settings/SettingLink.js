import React, {Component} from 'react';
import {Share, StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native';
import CustomIcon from '../assets/icons/CustomIcon.js';
import PropTypes from 'prop-types';
import colors from '../assets/colors';

class SettingLink extends Component {
  render() {
    const {iconName, title, url} = this.props;

    return (
      <TouchableOpacity
        style={styles.row}
        onPress={ async () => {
          try {
            const result = await Share.share({
              message:
                'Download and learn more about the Kovid19Track app at http://51.143.46.242:3000/',
            });
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error) {
            alert(error.message);
          }
        }}>
        {
          iconName && (
            <CustomIcon
              name={iconName}
              color={colors.gray_icon}
              size={24}
              style={styles.icon}
            />
          )
        }

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <CustomIcon
          name={'chevron24'}
          color={colors.gray_icon}
          size={24}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.card_border,
  },
  icon: {
    flex: 1,
    paddingRight: 15,
  },
  content: {
    flex: 11,
  },
  toggle: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: colors.body_copy,
  },
});

SettingLink.propTypes = {
  iconName: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default SettingLink;
