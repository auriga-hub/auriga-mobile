import {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {useWindowDimensions} from 'react-native';

const useHomeState = (_: any) => {
  const {width} = useWindowDimensions();
  const {colors} = useTheme();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  return {
    colors,
    width,
    loading,
    search,
    setSearch,
  };
};

export default useHomeState;
