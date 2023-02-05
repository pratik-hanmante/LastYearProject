document.getElementById("submit-button").addEventListener("click", function(event) {
    event.preventDefault();
    
    let responses = ["Mild", "Moderate", "Severe", "Proliferative"];
    let randomIndex = Math.floor(Math.random() * responses.length);
    let prediction = responses[randomIndex];
    
    let predictionOutput = document.getElementById("prediction-output");
    predictionOutput.innerHTML = prediction;
  });
  