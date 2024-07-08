var input = document.getElementById('input')
input.addEventListener('click', (event) => {

    var heightData = document.getElementById('height').value;
    var weightData = document.getElementById('weight').value;
    console.log(weightData)
    console.log(heightData);
    var result = (weightData / (heightData * heightData)).toFixed(2);
    document.getElementById('answer').innerText = result
    if(result < 16.0){
        document.getElementById('status').innerText = 'You are severely underweight'
    }
    if(result >= 16.0 && result < 18.4){
        document.getElementById('status').innerText = 'You are underweight';
    }
    if(result >= 18.4 && result < 24.9){
        document.getElementById('status').innerText = 'Your body weight is normal';
    }
    if(result >= 24.9 && result < 29.9){
        document.getElementById('status').innerText = 'You are overweight';
    }
    if(result >= 29.9 && result < 34.9){
        document.getElementById('status').innerText = 'You are moderately obese';
    }
    if(result >= 34.9 && result < 39.9){
        document.getElementById('status').innerText = 'You are severely obese';
    }
    if(result >= 39.9){
        document.getElementById('status').innerText = 'You are morbidly obese';
    }
});
