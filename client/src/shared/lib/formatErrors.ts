export const formatErrors = (
  errorMessage: string
): Record<string, string> | void => {
  if (errorMessage === 'null') return;
  else {
    const errorMap: { [index: string]: string } = {};
    errorMessage = errorMessage.slice(errorMessage.indexOf(':') + 2);
    const formattedErrorMessageArray = errorMessage
      .split(', ')
      .map((_: string) => _.split(':'));
    formattedErrorMessageArray.forEach((_) => (errorMap[_[0]] = _[1]));
    return errorMap;
  }
};
