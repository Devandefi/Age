function checkAge() {

    let Year = document.querySelector(".ageInput").value;
    Year = Number(Year)

    let Age = 2025 - Year;
        if (Year <= 1900 || Year >=2025) {
            document.querySelector('.yourAge').innerHTML = `How were you born in ${Year}? You are lying!`;
        } else{
            document.querySelector('.yourAge').innerHTML = `Since you were born in ${Year}, you are ${Age} years old`;
        }
    
     }