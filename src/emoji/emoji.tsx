import React, { ReactElement } from 'react';
import { SvgXml } from 'react-native-svg';

export const Emoji = ({
  emoji,
  fill,
} : IEmojiProps) : ReactElement => {
  const iconSvg = require('../xml')[emoji]();

  return (
    <SvgXml
      width="100%"
      height="100%"
      xml={`${iconSvg}`}
      fill={fill}
    />
  );
};

export interface IEmojiProps {
  emoji : string;
  fill? : string;
}
