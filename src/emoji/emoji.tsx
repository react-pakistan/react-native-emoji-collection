import React, { ReactElement } from 'react';
import { SvgXml } from 'react-native-svg';

export const Emoji = ({
  emoji,
  fill,
} : IEmojiProps) : ReactElement => {
  const iconSvg = require('../xml')[emoji]();

  return (
    <SvgXml
      fill={fill}
      height="100%"
      width="100%"
      xml={`${iconSvg}`}
    />
  );
};

export interface IEmojiProps {
  emoji : string;
  fill? : string;
}
