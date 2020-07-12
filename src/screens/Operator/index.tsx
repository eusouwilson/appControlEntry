import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import {
  Container,
  SubmitButton,
  Form,
  FormInput,
  Body,
  ImageCar,
  CarInfo,
} from './styles';
import { useAuth } from '../../contexts/auth';
import { useCar } from '../../contexts/car';
import Header from '../../components/Header';
import ImgError from '../../../assets/img/error.png';
import ImgSuccess from '../../../assets/img/success.png';

const Operator: React.FC = () => {
  const [plate, setPlate] = useState('');
  const { singOut } = useAuth();
  const { car, getCar, error } = useCar();
  const handlerSignOut = () => {
    singOut();
  };
  const DismissKeyBoard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
  const handlerSubmit = async () => {
    await getCar(plate);
  };

  return (
    <>
      <Header />
      <Container>
        <Form>
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite a placa do carro"
            value={plate}
            onChangeText={setPlate}
          />
          <DismissKeyBoard>
            <SubmitButton onPress={handlerSubmit} icon="search">
              Buscar
            </SubmitButton>
          </DismissKeyBoard>
        </Form>
        <Body>
          {!car && !error ? (
            <></>
          ) : error ? (
            <>
              <ImageCar source={ImgError} />
              <CarInfo>{error}</CarInfo>
            </>
          ) : (
            <>
              <ImageCar source={ImgSuccess} />
              <CarInfo>Marca:{car?.brand}</CarInfo>
              <CarInfo>Modelo: {car?.model}</CarInfo>
              <CarInfo>Cor: {car?.cor}</CarInfo>
            </>
          )}
        </Body>
      </Container>
    </>
  );
};

export default Operator;
