import { IonAccordion, IonAccordionGroup, IonContent, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonListHeader, IonNote } from "@ionic/react";
import { topics } from "../data";

 const Accordion = () => {

	return (
  <IonMenu contentId="main" type="overlay">
    <IonContent>
    <IonList id="inbox-list">
    <IonListHeader>SICE</IonListHeader>
    <IonNote>Sistema de Control Escolar</IonNote>
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

                      <IonItem key={ `option_${ index }_${ index2 }` } routerLink={ `/topics/${ option.label }` }>
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
}

export default Accordion;