import React from 'react';
import { Column } from './Column';
import { Card } from './Card';
import { AppContainer } from './styles';

function App() {
  return (
    <AppContainer> 
      <Column text="To Do">
        <Card text="Generate scaffold" />
      </Column>
      <Column text="In-Progress">
        <Card text="something here" />
      </Column>
    </AppContainer>
  );
}

export default App;
