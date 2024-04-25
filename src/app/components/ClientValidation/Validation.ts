export type ValidityType = {
  error: string;
  validity: "valid" | "invalid";
};

export type ValidationConfigType = {
  type: "number" | "string" | "integer" | "date" | "boolean";
  min?: number;
  max?: number;
  emptyIsValid?: boolean;
  checkNotInArray?: string[] | number[] | Date[];
};

export const ValidateNumber = (
  value: string,
  { min, max }: ValidationConfigType,
): ValidityType => {
  const valueAsNumber = Number(value);
  if (value.length === 0 || isNaN(valueAsNumber))
    return { error: "Please enter a valid number", validity: "invalid" };
  if (
    min !== undefined &&
    max !== undefined &&
    (valueAsNumber < min || valueAsNumber > max)
  )
    return {
      error: `Please enter a number between ${min} and ${max.toLocaleString()}`,
      validity: "invalid",
    };
  if (min !== undefined && valueAsNumber < min)
    return {
      error: `Please enter a number greater than ${min.toLocaleString()}`,
      validity: "invalid",
    };
  if (max !== undefined && valueAsNumber > max)
    return {
      error: `Please enter a number less than ${max.toLocaleString()}`,
      validity: "invalid",
    };
  return { error: "", validity: "valid" };
};

export const ValidateInteger = (
  value: string,
  { min, max }: ValidationConfigType,
): ValidityType => {
  const valueAsNumber = Number(value);
  if (value.length <= 0 || !Number.isInteger(valueAsNumber))
    return { error: "Please enter a valid integer", validity: "invalid" };
  if (
    min !== undefined &&
    max !== undefined &&
    (valueAsNumber < min || valueAsNumber > max)
  )
    return {
      error: `Please enter an integer between ${min.toLocaleString()} and ${max.toLocaleString()}`,
      validity: "invalid",
    };
  if (min !== undefined && valueAsNumber < min)
    return {
      error: `Please enter an integer greater than ${min.toLocaleString()}`,
      validity: "invalid",
    };
  if (max !== undefined && valueAsNumber > max)
    return {
      error: `Please enter an integer less than ${max.toLocaleString()}`,
      validity: "invalid",
    };
  return { error: "", validity: "valid" };
};

export const ValidateString = (
  value: string,
  { min: minLength, max: maxLength, emptyIsValid }: ValidationConfigType,
): ValidityType => {
  if (!emptyIsValid && !value)
    return { error: "Please enter something", validity: "invalid" };
  if (
    minLength !== undefined &&
    maxLength !== undefined &&
    (value.length < minLength || value.length > maxLength)
  )
    return {
      error: `Please enter text between ${minLength.toLocaleString()} and ${maxLength.toLocaleString()}`,
      validity: "invalid",
    };
  if (minLength !== undefined && value.length < minLength)
    return {
      error: `Please enter text greater than ${minLength.toLocaleString()}`,
      validity: "invalid",
    };
  if (maxLength !== undefined && value.length > maxLength)
    return {
      error: `Please enter text less than ${maxLength.toLocaleString()}`,
      validity: "invalid",
    };
  return { error: "", validity: "valid" };
};

export const ValidateDate = (value: string): ValidityType => {
  const date = new Date(value.replace(/-/g, "/"));
  return isNaN(date.getTime())
    ? { error: "Please enter a valid date", validity: "invalid" }
    : { error: "", validity: "valid" };
};

export const ValidateNotInArray = (
  value: string | number | Date,
  array: (string | number | Date)[],
): ValidityType => {
  return array.includes(value as string | number | Date)
    ? { error: "Please enter a unique value", validity: "invalid" }
    : { error: "", validity: "valid" };
};

export const ValidateBoolean = (value: string): ValidityType => {
  if (value === "true" || value === "false")
    return { error: "", validity: "valid" };
  return { error: "Please enter a valid boolean", validity: "invalid" };
};

export const Validate = (
  value: string,
  validationConfig: ValidationConfigType,
): ValidityType => {
  const { type, emptyIsValid } = validationConfig;
  if (emptyIsValid && value.length === 0)
    return { error: "", validity: "valid" };
  if (validationConfig.checkNotInArray) {
    const status = ValidateNotInArray(value, validationConfig.checkNotInArray);
    if (status.validity === "invalid") return status;
  }
  switch (type) {
    case "number":
      return ValidateNumber(value, validationConfig);
    case "string":
      return ValidateString(value, validationConfig);
    case "integer":
      return ValidateInteger(value, validationConfig);
    case "date":
      return ValidateDate(value);
    case "boolean":
      return ValidateBoolean(value);
  }
};
