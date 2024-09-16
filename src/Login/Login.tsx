import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonRow, IonInput, IonIcon, IonButton, IonItem } from '@ionic/react';
import './Login.css';
import { handLeftOutline, lockClosedOutline, personOutline, settings } from 'ionicons/icons';
import {useState} from 'react';
import axios from 'axios';

const Login: React.FC = () => {
  
        const [LoginData, setLoginData] = useState({
            Usuario: null,
            password: null

        });
        const HandleInputChange = (i:any) =>{
            const {Usuario, value} = i.target;

            console.log(Usuario, value);
            setLoginData({
                ...LoginData,
                [Usuario]:value
            })
        }
        const LogPaswword = () => {
    console.log(LoginData, 'LoginData');

    // Aquí va la API
    axios.post("https://pokeapi.co/api/v2/pokemon/ditto", LoginData)
        .then((response) => {
            if (response.status === 200) { 
                console.log('Felicidades te sabes tus credenciales');
            } else {
                console.log('Fallo, intenta de nuevo');
            }
        })
        .catch((error) => {
            // Aquí hago log para manejar errores como yo 
            console.error('Error en la solicitud:', error);
        });
}

  return (
    <IonPage>
         <IonContent className='ion-padding'>  
            <IonGrid className='Container'>
                <IonRow>
                    <IonCol size='12' size-md='6'>
                        <form className='Login-Form'>
                            <IonItem>
                            <IonInput
                            name='Usuario'
                            type='text'
                            className='Inputs'
                            value={LoginData.Usuario}
                            onInput={(i) => HandleInputChange(i)}>                                
                            <div className='' slot='label'>
                                    <IonIcon icon={personOutline} className='Icons'></IonIcon>
                            </div>
                                </IonInput>
                                </IonItem>
                                <IonItem>
                            <IonInput
                            name='contraseña'
                            type='password'
                            className='Inputs'
                            value={LoginData.password}
                            onInput={(i) => HandleInputChange(i)}>
                                <div className='' slot='label'>
                                        <IonIcon icon={lockClosedOutline} className='Icons'></IonIcon>
                                </div>
                                </IonInput>
                                </IonItem>
                                <IonButton shape='round' className='ButtonAccess' expand='full' onClick={LogPaswword}>Iniciar sesión</IonButton>
                        </form>
                    </IonCol>
                </IonRow>
                </IonGrid>              
              <div className='circle1'></div>
                <div className='circle2'></div>
          <span className='circule-home1'></span>
          <span className='circule-home2'></span>
</IonContent>
    </IonPage>

  );
};

export default Login;
