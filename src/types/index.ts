import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  style: object;
  buttonTextStyle: object;
}

export interface ErrorMessageProps {
  message: string;
}

export interface HeaderProps {
  title: string;
}

export interface NotesData {
  notesTitle: string;
  notesDescription: string;
}

type RootStackParamList = {
  Home: {
    notesTitle?: string;
    notesDescription?: string;
  };
};

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export interface Props {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
}
