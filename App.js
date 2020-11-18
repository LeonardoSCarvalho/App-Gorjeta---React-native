import React, { useEffect, useState } from 'react';

import { Text, View, Button } from 'react-native';
import styled from 'styled-components/native';


const Page =styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 25px;
`;
const Inpunt = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #EEE;
  border-radius: 12px;
  margin-top: 20px;
  padding: 10px;
`;

const CalcButton = styled.Button`
  margin-top: 15px;
  width: 90%;
`;

const ResultArea = styled.View`
  width: 90%;
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ResultTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ResultItem = styled.Text`
  font-size: 15px;
  margin-bottom: 30px;
`;

const PctArea = styled.View`
  flex-direction: row;

  margin: 20px;
`;

const PctItem = styled.Button`
  margin: 8px;

`;

export default () => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(5);

  function calc (){
    let nBill = parseFloat(bill);
    if(nBill){
      setTip( (pct/100) * nBill);
    }
  }

  useEffect(() => {
    calc();
  }, [pct]);

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Inpunt 
          placeholder="Quanto deu a conta"
          keyboardType="numeric"
          value={bill}
          onChangeText={ valor => setBill(valor)}
      />
      <PctArea>
        <PctItem  title="5%" onPress={ () => setPct(5) } />
        <PctItem title="10%" onPress={ () => setPct(10) }/>
        <PctItem title="15%" onPress={ () => setPct(15) }/>
        <PctItem title="20%" onPress={ () => setPct(20) }/>
        
        
      </PctArea>

      <CalcButton title={`Calcular ${pct}%`} onPress={calc} />
      { tip > 0 &&
      <ResultArea>
          <ResultTitle> Valor da Conta </ResultTitle>
          <ResultItem>R$ { parseFloat(bill).toFixed(2) }</ResultItem>

          <ResultTitle> Valor da Gorjeta </ResultTitle>
          <ResultItem>R$ { tip.toFixed(2) + `(${pct}%)` } </ResultItem>

          <ResultTitle> Valor Total </ResultTitle>
      
          <ResultItem>R$ {  (parseFloat(bill) + tip).toFixed(2)  }</ResultItem>
      </ResultArea>
      }
    </Page>
    
  )
}