// import { useTranslation } from 'react-i18next'
import {Text, type StyleProp, type TextStyle} from 'react-native';

interface AppTextProps {
  children: string;
  fontSize?: number;
  lineHeight?: number;
  style?: StyleProp<TextStyle>;
}
export const AppText = (props: AppTextProps) => {
  const {children, fontSize, lineHeight, style} = props;

  //   const { t } = useTranslation()
  //   const text = t(children)

  return <Text style={style}>{children}</Text>;
};
