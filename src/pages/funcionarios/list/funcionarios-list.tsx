import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router'; 
import './funcionarios-list.css';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const FuncionariosList: React.FC = () => { 
  const historico = useHistory()
  const [funcionarios, setFuncionarios] = useState([])
  
  
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


  function irPraTelaDeCadastrado() {
    historico.push("/funcionarios/form")
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Listagem de Funcionários</IonTitle> 
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonButtons onClick={irPraTelaDeCadastrado} color='medium'>Cadastro</IonButtons>
        {/* CABEÇALHO DA TABELA */}
        <IonGrid fixed={true}>
          <IonRow className='ubuntu-medium'>
            <IonCol>RG</IonCol>
            <IonCol>Nome</IonCol> 
            <IonCol>Ações</IonCol> 
          </IonRow>

          {
            funcionarios.map((funcionario) => 
            (<>
              <IonRow className='data-row ubuntu-light'> 
                <IonCol>{funcionario.rg}</IonCol>
                <IonCol>{funcionario.nome}</IonCol> 
                <IonCol>Editar</IonCol> 
              </IonRow>
            </>))
          }
         

        </IonGrid>
        

      </IonContent>
    </IonPage>
  );
};

export default FuncionariosList;
