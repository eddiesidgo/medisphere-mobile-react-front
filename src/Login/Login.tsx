import {
    IonCol,
    IonContent,
    IonGrid,
    IonPage,
    IonRow,
    IonInput,
    IonIcon,
    IonButton,
    IonItem,
    IonAlert,
} from "@ionic/react";
import "./Login.css";
import {
    lockClosedOutline,
    personOutline,
} from "ionicons/icons";
import { SetStateAction, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();

    const handleLogin = async () => {
        try {
            const response = await axios.post("https://cloud02.grupoph.com/api/login", {
                email,
                password,
            });
            // Guardar el token en localStorage
            localStorage.setItem("token", response.data.access_token);
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.access_token}`;
            // Redirigir a una ruta protegida
            history.push("/"); 
        } catch (error) {
            setError("Credenciales incorrectas, intenta de nuevo.");
        }
    };

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonGrid className="Container">
                    <IonRow>
                        <IonCol size="12" size-md="6">
                            <form className="Login-Form">
                                <IonItem>
                                    <IonInput
                                        name="email"
                                        type="text"
                                        className="Inputs"
                                        value={email}
                                        onIonChange={(e: {
                                            detail: { value: SetStateAction<string> };
                                        }) => setEmail(e.detail.value!)}
                                        required
                                    >
                                        <div className="" slot="label">
                                            <IonIcon icon={personOutline} className="Icons"></IonIcon>
                                        </div>
                                    </IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonInput
                                        name="contraseña"
                                        type="password"
                                        className="Inputs"
                                        value={password}
                                        onIonChange={(e: {
                                            detail: { value: SetStateAction<string> };
                                        }) => setPassword(e.detail.value!)}
                                        required
                                    >
                                        <div className="" slot="label">
                                            <IonIcon
                                                icon={lockClosedOutline}
                                                className="Icons"
                                            ></IonIcon>
                                        </div>
                                    </IonInput>
                                </IonItem>
                                <IonButton expand="block" onClick={handleLogin}>
                                    Iniciar Sesión
                                </IonButton>
                                {error && (
                                    <IonAlert
                                        isOpen={!!error}
                                        message={error}
                                        buttons={["OK"]}
                                        onDidDismiss={() => setError("")}
                                    />
                                )}
                            </form>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <div className="circle1"></div>
                <div className="circle2"></div>
                <span className="circule-home1"></span>
                <span className="circule-home2"></span>
            </IonContent>
        </IonPage>
    );
};

export default Login;
