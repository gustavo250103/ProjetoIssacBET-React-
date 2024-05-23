import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import TelaLogin from './screens/TelaLogin';
import TelaCadastro from './screens/TelaCadastro';
import TelaInicial from './screens/TelaInicial';
import TelaApostas from './screens/TelaApostas';
import TelaPerfil from './screens/TelaPerfil';
import TelaAdicionarDinheiro from './screens/TelaAdicionarDinheiro';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AbasPrincipais() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Inicial') {
            iconName = 'home-outline';
          } else if (route.name === 'Apostas') {
            iconName = 'game-controller-outline';
          } else if (route.name === 'Perfil') {
            iconName = 'person-outline';
          } else if (route.name === 'Adicionar Dinheiro') {
            iconName = 'cash-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Inicial" component={TelaInicial} />
      <Tab.Screen name="Apostas" component={TelaApostas} />
      <Tab.Screen name="Perfil" component={TelaPerfil} />
      <Tab.Screen name="Adicionar Dinheiro" component={TelaAdicionarDinheiro} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={TelaLogin} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} options={{ headerShown: false }} />
        <Stack.Screen name="AbasPrincipais" component={AbasPrincipais} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
