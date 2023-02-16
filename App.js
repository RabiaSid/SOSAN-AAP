import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from './src/Navigation/StackNavigation';

const App = () => {
  return (
    <>
    <NavigationContainer independent={true}>
    <StackNavigation/>
    </NavigationContainer>
    </>
  );
};

export default App;