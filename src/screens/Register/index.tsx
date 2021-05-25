import React, { useState } from 'react';
import { Modal } from 'react-native';

import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from './styles';
import { CategorySelect } from '../CategorySelect';

export function Register(){
  const [transactionsType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
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

          <CategorySelectButton 
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>

        <Button title="Enviar" />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>

    </Container>
  )
}