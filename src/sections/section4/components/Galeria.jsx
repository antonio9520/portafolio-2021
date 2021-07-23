import React, { useState } from "react";
import "./Galeria.css";
import SwipeableViews from "react-swipeable-views";
import { IconButton, makeStyles } from "@material-ui/core";
import { Close, ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: 5,
    right: 5,
  },
});

const Galeria = ({ data, closeModal }) => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const longitudPedazos = 1;
  let imagenes = [];
  for (let i = 0; i < data.length; i += longitudPedazos) {
    let trozo = data.slice(i, i + longitudPedazos);
    imagenes.push(trozo);
  }

  return (
    <div className="cont-galeria">
      <div className="bottom">
        <div className="btn-left-adn">
          <IconButton onClick={handleBack} disabled={activeStep === 0}>
            <ArrowBackIos />
          </IconButton>
        </div>
        <div className="content-center-adn">
          <SwipeableViews index={activeStep}>
            {imagenes.map((item, index) => (
              <div key={index} className="cont-SwipeableViews">
                {item.map((item, index) => (
                  <img key={index} src={item} alt="zap-cover" />
                ))}
              </div>
            ))}
          </SwipeableViews>
        </div>
        <div className="btn-right-adn">
          <IconButton
            onClick={handleNext}
            disabled={activeStep === Math.ceil(data.length / 1) - 1}
          >
            <ArrowForwardIos />
          </IconButton>
        </div>
      </div>

      <IconButton className={classes.root} onClick={closeModal}>
        <Close />
      </IconButton>
    </div>
  );
};

export default Galeria;
