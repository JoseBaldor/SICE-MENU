import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonAccordion,
  IonAccordionGroup,
  IonNote,
} from '@ionic/react';

import { topics } from "../data";
import { useLocation } from 'react-router-dom';
import './Menu.css';

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>SICE</IonListHeader>
          <IonNote>Control Escolar UIIM</IonNote>
          <IonAccordionGroup>
          { topics.map((topic, index) => {

            return (

              <IonAccordion key={ `accordion_${ index }` } value={ topic.header.toLowerCase() }>
                <IonItem slot="header">
                  <IonIcon icon={ topic.icon } color={ topic.color } />
                  <IonLabel className="ion-padding-start">{ topic.header }</IonLabel>
                </IonItem>

                <IonList slot="content">
                  { topic.options.map((option, index2) => {

                    return (

                      <IonItem key={ `option_${ index }_${ index2 }` } routerLink={ `/page/${ option.url }` }>
                        <IonLabel>{ option.label }</IonLabel>
                      </IonItem>
                    );
                  })}
                </IonList>
              </IonAccordion>
            );
          })}
        </IonAccordionGroup>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
