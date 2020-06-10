import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const TitleButton = (props: any) => {
  const { touch, iconName, iconSize } = props;

  return (
    <TouchableOpacity onPress={touch}>
      <Icon name={iconName} size={iconSize} />
    </TouchableOpacity>
  )
};