import React, { useState } from 'react';
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelect } from '../../components/Forms/CategorySelect';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from './styles';

export function Register(){
  const [transactionsType, setTransactionType] = useState('');

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  return(
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input 
            placeholder="Nome"
          />

          <Input 
            placeholder="Valor"
          />
          
          <TransactionsTypes>
            <TransactionTypeButton
              type="up"
              title="income"
              onPress={() => handleTransactionsTypeSelect('up')}
              isActive={transactionsType === 'up'}
            />
            <TransactionTypeButton
              type="down"
              title="outcome"
              onPress={() => handleTransactionsTypeSelect('down')}
              isActive={transactionsType === 'down'}
            />
          </TransactionsTypes>

          <CategorySelect 
            title="Categoria"
          />
        </Fields>

        <Button title="Enviar" />
      </Form>

    </Container>
  )
}