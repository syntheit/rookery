import { Input, Textarea } from "@nextui-org/react";
import { Validate, ValidationConfigType } from "./Validation";
import { useState } from "react";

export type InputStateType = {
  value: string;
  validity: "valid" | "invalid";
};

const ValidatedInput = ({
  state,
  validationConfig,
  label,
  setState,
  setStateWithName,
  defaultValue,
  isReadOnly,
  isDisabled,
  type,
  bounds,
  className,
  props,
}: {
  state?: string;
  validationConfig: ValidationConfigType;
  label?: string;
  setState?: ({ value, validity }: InputStateType) => void;
  setStateWithName?: (
    name: string,
    { value, validity }: InputStateType,
  ) => void;
  defaultValue?: string;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  type?: "textarea" | "text";
  // value must be less than x and greater than y
  bounds?: { mustBeLessThan?: number; mustBeGreaterThan?: number };
  className?: string;
  props?: any;
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const update = (value: string) => {
    if (
      validationConfig.type === "number" ||
      validationConfig.type === "integer"
    ) {
      const valueAsNumber = Number(value);
      if (
        !isNaN(valueAsNumber) &&
        ((bounds?.mustBeGreaterThan &&
          valueAsNumber < bounds.mustBeGreaterThan) ||
          (bounds?.mustBeLessThan && valueAsNumber > bounds.mustBeLessThan))
      )
        return;
    }
    const { error, validity } = Validate(value, validationConfig);
    setErrorMessage(error);
    if (setStateWithName && label) setStateWithName(label, { value, validity });
    else if (setState) setState({ value, validity });
    else console.error("An undefined state setter was received");
  };

  function renderInput() {
    return (
      <Input
        variant="bordered"
        label={label}
        value={state}
        defaultValue={defaultValue}
        errorMessage={!(isReadOnly || isDisabled) && errorMessage}
        isInvalid={errorMessage && "invalid"}
        onValueChange={update}
        isReadOnly={isReadOnly}
        isDisabled={isDisabled}
        className={className}
        {...props}
      />
    );
  }

  function renderTextarea() {
    return (
      <Textarea
        variant="bordered"
        label={label}
        value={state}
        defaultValue={defaultValue}
        errorMessage={!(isReadOnly || isDisabled) && errorMessage}
        isInvalid={errorMessage && "invalid"}
        onValueChange={update}
        isReadOnly={isReadOnly}
        isDisabled={isDisabled}
        className={className}
        {...props}
      />
    );
  }
  return type === "textarea" ? renderTextarea() : renderInput();
};
export default ValidatedInput;
