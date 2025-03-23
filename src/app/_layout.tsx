import {Stack} from 'expo-router';
import { colors } from '@/styles/theme';

import {
     useFonts,
     Rubik_400Regulas,
     Rubik_500Medium,
     Rubik_600Semibold,
     Rubik_700Bold,
} from '@expo-google-fonts/rubik';

export default function Layout() {


     const [fontsLoaded] = useFonts({
          Rubik_400Regulas,
          Rubik_500Medium,
          Rubik_600Semibold,
          Rubik_700Bold,
     });

     if(!fontsLoaded) {
          return;
     }

     return (
          <Stack
               screenOptions={{
                    headerShown: false,
                    contentStyle: {backgroundColor: colors.gray[100]}
               }}
          ></Stack>
     )

}

