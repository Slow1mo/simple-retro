import React, { useState, useReducer } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Step,
  StepLabel,
  Stepper
} from "@material-ui/core";
import { First } from "../component/First";
import { Second } from "../component/Second";
import { Third } from "../component/Third";
import { User } from "../component/User";
import { mainReducer, initialMainReducerState } from "../reducer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    },
    backButton: {
      marginRight: theme.spacing(1)
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  })
);

function getSteps() {
  return [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad"
  ];
}

function Content({ stepIndex }: { stepIndex: number }) {
  switch (stepIndex) {
    case 0:
      return <First />;
    case 1:
      return <Second />;
    case 2:
      return <Third />;
    default:
      return <div>Wat just happend?</div>;
  }
}

export const Home = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [reducer, dispatch] = useReducer(mainReducer, initialMainReducerState);
  const steps = getSteps();

  console.log('ss', reducer)
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const isNameSet = (): boolean => !!localStorage.getItem("user");

  const NextAndBackButtons = () => (
    <>
      <Button
        disabled={activeStep === 0}
        onClick={handleBack}
        className={classes.backButton}
      >
        Tillbaka
      </Button>

      <Button variant="contained" color="primary" onClick={handleNext} disabled={!isNameSet()}>
        {activeStep === steps.length - 1 ? "Slutför" : "Nästa"}
      </Button>
    </>
  );

  const FinalStep = () => (
    <>
      <Typography className={classes.instructions}>Completos!</Typography>
      <Button onClick={handleReset}>Börja om</Button>
    </>
  );

  const Steps = () => (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map(label => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
  return (
    <div className={classes.root}>
      <User />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {activeStep === steps.length ? <FinalStep /> : <NextAndBackButtons />}
      </div>
      <div style={{ margin: "50px 0" }}>
        <Content stepIndex={activeStep} />
      </div>
      <div style={{ marginTop: "50px" }}>
        <Steps />
      </div>
    </div>
  );
};
