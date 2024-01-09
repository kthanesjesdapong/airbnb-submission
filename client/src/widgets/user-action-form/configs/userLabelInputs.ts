import { LabelInput } from "..";

export const email: LabelInput = {
  labelTitle: 'email',
  inputType: 'text',
  inputName: 'email'
};

export const firstName: LabelInput = {
  labelTitle: 'First Name',
  inputType: 'text',
  inputName: 'firstName'
};
export const lastName: LabelInput = {
  labelTitle: 'Last Name',
  inputType: 'text',
  inputName: 'lastName'
};
export const password: LabelInput = {
  labelTitle: 'password',
  inputType: 'password',
  inputName: 'password'
};
export const passwordReentry: LabelInput = {
  labelTitle: 'Re Enter Password',
  inputType: 'password',
  inputName: 'reEnterPassword'
};

export const loginLabelInputs = [...[email], ...[password]];

export const signUpLabelInputs = [...[firstName], ...[lastName], ...[...loginLabelInputs], ...[passwordReentry]];