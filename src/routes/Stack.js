import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import PassoStack from '../components/PassoStack';

const Stack = createNativeStackNavigator();

export default props => {
  return (
    <Stack.Navigator initialRouteName="TelaA">
      <Stack.Screen
        name="TelaA"
        options={{
          title: 'Tela A',
        }}>
        {propsNavigator => (
          <PassoStack {...propsNavigator} avancar="TelaB">
            <TelaA />
          </PassoStack>
        )}
      </Stack.Screen>
      <Stack.Screen name="TelaB">
        {propsNavigator => {
          return (
            <PassoStack {...propsNavigator} avancar="TelaC" voltar>
              <TelaB />
            </PassoStack>
          );
        }}
      </Stack.Screen>
      <Stack.Screen name="TelaC">
        {propsNavigator => (
          <PassoStack
            {...propsNavigator}
            voltar
            avancarComPush="TelaC"
            params={{numero: parseInt(Math.random() * 100, 10)}}>
            <TelaC {...propsNavigator} />
          </PassoStack>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
