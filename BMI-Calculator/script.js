function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    document.getElementById('result').innerText = 'Please enter valid weight and height.';
    return;
  }

  const bmi = weight / (height * height);
  const bmiCategory = getBMICategory(bmi);

  const resultElement = document.getElementById('result');
  resultElement.innerText = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory}).`;
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi < 24.9) {
    return 'Normal weight';
  } else if (bmi < 29.9) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}

