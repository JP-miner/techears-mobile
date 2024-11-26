import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router'; 
import './funcionarios-form.css';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

import { IonItem, IonLabel, IonList } from '@ionic/react'

const Funcionariosform: React.FC = () => { 
  const [funcionarios, setFuncionarios] = useState([])

  const [nome, setNome] = useState('')
  const [rg, setRg] = useState('')
  const [cpf, setCpf] = useState('')
  const [altura, setAltura] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState('')
  
  async function obterListagemDoBackend() {
    try {
      const response = await axios.get('http://localhost:1880/api/funcionarios/listagem') 
      setFuncionarios(response.data)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    obterListagemDoBackend()
  }, [])

  function aoDigitarNoCampoDeNome(valor: string) {
    setNome(valor)
  }
  function aoDigitarNoCampoDeCpf(valor: string) {
    setCpf(valor)
  }
  function aoDigitarNoCampoDeRg(valor: string) {
    setRg(valor)
  }
  function aoDigitarNoCampoDeNoAltura(valor: string) {
    setAltura(valor)
  }
  function aoDigitarNoCampoDeIdade(valor: string) {
    setIdade(valor)
  }
  function aoDigitarNoCampoDeSexo(valor: string) {
    setSexo(valor)
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Cadastro de Funcionários</IonTitle> 
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        {/* rg cpf idade altura */}
        <IonList>

        <IonItem>
          <IonLabel class='labelform'>Nome</IonLabel>
          <IonInput value={nome} onChange={(e) => aoDigitarNoCampoDeNome(e.target.value)} placeholder='Insira seu nome ...'></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel class='labelform'>RG</IonLabel>
          <IonInput value={rg} onChange={(e) => aoDigitarNoCampoDeRg(e.target.value)} placeholder='Insira seu RG ...'></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel class='labelform'>CPF</IonLabel>
          <IonInput value={cpf} onChange={(e) => aoDigitarNoCampoDeCpf(e.target.value)} placeholder='Insira seu CPF ...'></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel class='labelform'>Idade</IonLabel>
          <IonInput value={idade} onChange={(e) => aoDigitarNoCampoDeIdade(e.target.value)} placeholder='Insira sua idade ...'></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel class='labelform'>Altura</IonLabel>
          <IonInput value={altura} onChange={(e) => aoDigitarNoCampoDeNoAltura(e.target.value)} placeholder='Insira sua altura ...'></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel class='labelform'>Sexo</IonLabel>
          <IonInput value={sexo} onChange={(e) => aoDigitarNoCampoDeSexo(e.target.value)} placeholder='Insira seu sexo ...'></IonInput>
        </IonItem>
        </IonList>

            <IonButton color={'success'}>Salvar</IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Funcionariosform;
