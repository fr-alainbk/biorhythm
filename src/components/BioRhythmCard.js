import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
} from "@ionic/react";
import React from "react";
import dayjs from "dayjs";
import { calculateBiorhythms } from "../calculations";
import BioRhythmCharts from "./BioRhythmCharts";
import "./BioRhythmCard.css";

const formatDate = (ISOString) => {
  return dayjs(ISOString).format("DD MMM, YYYY");
};

const BioRhythmCard = ({ birthDate, targetDate }) => {
  const { physical, emotional, intellectual } = calculateBiorhythms(
    birthDate,
    targetDate
  );

  return (
    <IonCard className="biorhythmCard ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <BioRhythmCharts birthDate={birthDate} targetDate={targetDate} />
        <p className="biorhythmCard__physical">
          Physical: {physical.toFixed(4)}
        </p>
        <p className="biorhythmCard__emotional">
          Emotional: {emotional.toFixed(4)}
        </p>
        <p className="biorhythmCard__intellectual">
          Intellectual: {intellectual.toFixed(4)}
        </p>
      </IonCardContent>
    </IonCard>
  );
};

export default BioRhythmCard;
