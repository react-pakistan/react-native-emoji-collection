import React, { ReactElement } from 'react';
import { SvgXml } from 'react-native-svg';

export const Icon = ({
  icon,
  fill,
} : IIconProps) : ReactElement => {
  const iconSvg = require('../xml')[icon]();

  return (
    <SvgXml
      width="100%"
      height="100%"
      xml={`${iconSvg}`}
      fill={fill}
    />
  );
};

export interface IIconProps {
  icon : string;
  fill? : string;
}
