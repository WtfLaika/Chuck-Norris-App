import React from "react";
import { useAppSelector } from "../app/hooks";
import Chuck from "../img/chuckImg.png";
export const PhraseField: React.FC = () => {
  const phrase = useAppSelector((state: any) => state.answer.phrase);
  return (
    <div className="phrase-container">
      <img src={Chuck} alt="Chuck" id="chuck_img" />
      <div className="phrase">
        {phrase.length < 1 && "Choose a catagory to get Chuck's phrase"}
        {phrase}
      </div>
    </div>
  );
};
