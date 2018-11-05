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

const handleBoldText = (str, find) => {
  var regExp = new RegExp(find, "g");
  return str.replace(re, <Text style={{ fontWeight: "bold" }}>{find}</Text>);
};

const Tooltip = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep
}: Props) => (
  <View>
    <View style={styles.tooltipContainer}>
      <Text testID="stepDescription" style={styles.tooltipText}>
        {handleBoldText(currentStep.text, currentStep.name)}
      </Text>
    </View>
    <View style={[styles.bottomBar]}>
      {!isLastStep ? (
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
      )}
    </View>
  </View>
);

export default Tooltip;
