import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Filters from './pages/Filters';
import Reimbursements from './pages/Reimbursements';
import Detail from './pages/Detail';
import Suspicions from './pages/Suspicions';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5'
          }
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Filters" component={Filters} />
        <AppStack.Screen name="Suspicions" component={Suspicions} />
        <AppStack.Screen name="Reimbursements" component={Reimbursements} />
        <AppStack.Screen name="Detail" component={Detail} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;