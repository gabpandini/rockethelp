import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import { SignIn } from './src/screens/signin';
import { THEME } from './styles/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';

export default function App() {
  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor='transparent'
        translucent
      />
      { fontsLoaded ? <SignIn/> : <Loading/> }
    </NativeBaseProvider>
  );
}
