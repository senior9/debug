function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  if (isNaN(inputFieldValue)) {
    alert("Enter valid number");
    return false;
  }
  if (inputFieldValue < 0) {
    alert("Enter a non-negative number");
    return false;
  }
  inputField.value = "";
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  console.log(textElementValueString);
  const textElementValue = parseFloat(textElementValueString);
  console.log(textElementValue);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;

}
