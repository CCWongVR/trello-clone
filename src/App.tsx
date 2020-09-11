import React from 'react';
import { Column } from './Column';
import { Card } from './Card';
import { AppContainer } from './styles';
import { AddNewItem } from './AddNewItem';

function App() {
  return (
    <AppContainer> 
      <Column text="To Do">
        <Card text="Generate scaffold" />
      </Column>
      <Column text="In-Progress">
        <Card text="something here" />
      </Column>
      <AddNewItem toggleButtonText="+ Add a new item" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
