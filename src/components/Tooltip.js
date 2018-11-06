// @flow
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Button from "./Button";

import styles from "./style";

import type { Step } from "../types";

type Props = {
  isFirstStep: boolean,
  isLastStep: boolean,
  handleNext: func,
  handlePrev: func,
  handleStop: func,
  currentStep: Step
};

const BoldText = props => (
  <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
);

const handleBoldText = (str, find) => {
  if (!str.includes(find)) {
    return <Text>{str}</Text>;
  }

  var splitStr = str.split(" ");
  var splitFind = find.split(" ");
  var complteStr = [];
  var strCounter = 0;

  for (var i = 0; i < splitStr.length; i++) {
    if (strCounter < splitFind.length) {
      if (splitStr[i] === splitFind[strCounter]) {
        if (i === 0) {
          complteStr.push(<BoldText>{splitFind[strCounter]}</BoldText>);
        } else {
          complteStr.push(<BoldText>{" " + splitFind[strCounter]}</BoldText>);
        }
        strCounter++;
      } else {
        if (i === 0) {
          complteStr.push(<Text>{splitStr[i]}</Text>);
        } else {
          complteStr.push(<Text>{" " + splitStr[i]}</Text>);
        }
      }
    } else {
      if (i === 0) {
        complteStr.push(<Text>{splitStr[i]}</Text>);
      } else {
        complteStr.push(<Text>{" " + splitStr[i]}</Text>);
      }
    }
  }

  return <Text>{complteStr}</Text>;
};

const Tooltip = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep
}: Props) => (
  <View style={{ marginTop: 10 }}>
    <View style={styles.tooltipContainer}>
      <Text testID="stepDescription" style={styles.tooltipText}>
        {handleBoldText(currentStep.text, currentStep.name)}
      </Text>
    </View>
    <View style={[styles.bottomBar]}>
      {/* {!isLastStep ? (
        <TouchableOpacity onPress={handleStop}>
          <Button>Skip</Button>
        </TouchableOpacity>
      ) : null}
      {!isFirstStep ? (
        <TouchableOpacity onPress={handlePrev}>
          <Button>Previous</Button>
        </TouchableOpacity>
      ) : null}
      {!isLastStep ? (
        <TouchableOpacity onPress={handleNext}>
          <Button>Next</Button>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleStop}>
          <Button>Finish</Button>
        </TouchableOpacity>
      )} */}
    </View>
  </View>
);

export default Tooltip;
