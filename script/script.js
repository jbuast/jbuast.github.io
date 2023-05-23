const form = document.forms.registration;
const firstName = form.firstName;
const middleName = form.middleName;
const lastName = form.lastName;
const birthday = form.birthday;
const email = form.email;
const province = form.province;
const barangay = form.barangay;
const street = form.street;
const gender = form.gender;
const vaccinationBrand1 = form.vaccinationBrand1;
const dateOfVaccination1 = form.dateOfVaccination1;
const vaccinationSite1 = form.vaccinationSite1;
const region = form.region;
const secondVaccination = form.secondVaccination;
const vaccinationBrand2 = form.vaccinationBrand2;
const dateOfVaccination2 = form.dateOfVaccination2;
const vaccinationSite2 = form.vaccinationSite2;
const secondVaccinationRadios = document.querySelectorAll('input[name="secondVaccination"]');
const followUpQuestions = document.querySelector('#follow-up-questions');
var resultContainer = document.getElementById('result');


// Disable follow-up questions when page is loaded
followUpQuestions.classList.add('disabled');
followUpQuestions.querySelectorAll('input').forEach(input => input.setAttribute('disabled', 'disabled'));
followUpQuestions.querySelectorAll('select').forEach(input => input.setAttribute('disabled', 'disabled'));

secondVaccinationRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        if ( radio.value === 'yes') {
            followUpQuestions.classList.remove('disabled');
            followUpQuestions.querySelectorAll('input').forEach(input => input.removeAttribute('disabled'));
            followUpQuestions.querySelectorAll('select').forEach(input => input.removeAttribute('disabled'));

        } else {
            followUpQuestions.classList.add('disabled');
            followUpQuestions.querySelectorAll('input').forEach(input => input.setAttribute('disabled', 'disabled'));
            followUpQuestions.querySelectorAll('select').forEach(input => input.setAttribute('disabled', 'disabled'));
        }
    });
});
form.addEventListener('submit', function(event){
    event.preventDefault();
    let allFieldsFilled = true;
    if(!firstName.value){
        errorMsg(firstName, 'First Name is required!');
        allFieldsFilled = false;
        return ;
    };
    if(!middleName.value){
        errorMsg(middleName, 'Middle Name is required!');
        allFieldsFilled = false;
        return;
    };
    if(!lastName.value){
        errorMsg(lastName, 'Last Name is required!');
        allFieldsFilled = false;
        return;
    };
    if(!birthday.value){
        errorMsg(birthday, 'Birthday is required!');
        allFieldsFilled = false;
        return;
    };
    if(!email.value){
        errorMsg(email, 'Email is required!');
        allFieldsFilled = false;
        return;
    };
    if(!region.value){
          errorMsg(region, 'Region is required!');
          allFieldsFilled = false;
          return;
      };
    
    if(!province.value){
        errorMsg(province, 'Province is required!');
        allFieldsFilled = false;
        return;
    };
    if(!barangay.value){
        errorMsg(barangay, 'Barangay is required!');
        allFieldsFilled = false;
        return;
    };
    if(!street.value){
        errorMsg(street, 'Street is required!');
        allFieldsFilled = false;
        return;
    };
    validateGender();
    if(!vaccinationBrand1.value){
        errorMsg(vaccinationBrand1, 'Vaccination Brand (Dose 1) is required!');
        allFieldsFilled = false;
        return;
    };
    if(!dateOfVaccination1.value){
        errorMsg(dateOfVaccination1, 'Date of Vaccination (Dose 1) is required!');
        allFieldsFilled = false;
        return;
    };
    if(!vaccinationSite1.value){
      errorMsg(vaccinationSite1, 'Vaccination Site (Dose 1) is required!');
      allFieldsFilled = false;
      return;
  };
  if(secondVaccination === 'yes'){
      if(!vaccinationBrand2.value){
            errorMsg(vaccinationBrand2, 'Vaccination Brand (Dose 2) is required!');
            allFieldsFilled = false;
            return;
        };
        if(!dateOfVaccination2.value){
          errorMsg(dateOfVaccination2, 'Date of Vaccination (Dose 2) is required!');
          allFieldsFilled = false;
          return;
      };
      if(!vaccinationSite2.value){
        errorMsg(vaccinationSite2, 'Vaccination site (Dose 2) is required!');
        allFieldsFilled = false;
        return;
    };
  };

if (allFieldsFilled){
  resultContainer.innerHTML = `
  <p><strong>First Name:</strong> ${firstName.value}</p>
  <p><strong>Middle Name:</strong> ${middleName.value}</p>
  <p><strong>Last Name:</strong> ${lastName.value}</p>
  <p><strong>Birthday:</strong> ${birthday.value}</p>
  <p><strong>Email:</strong> ${email.value}</p>
  <p><strong>Region:</strong> ${region.value}</p>
  <p><strong>Province:</strong> ${province.value}</p>
  <p><strong>Barangay:</strong> ${barangay.value}</p>
  <p><strong>Street:</strong> ${street.value}</p>
  <p><strong>Gender:</strong> ${validateGender()}</p>
  <p><strong>Vaccination Brand (Dose 1):</strong> ${vaccinationBrand1.value}</p>
  <p><strong>Date of Vaccination (Dose 1):</strong> ${dateOfVaccination1.value}</p>
  <p><strong>Vaccination Site (Dose 1):</strong> ${vaccinationSite1.value}</p>
  <p><strong>Vaccination Brand (Dose 2):</strong> ${vaccinationBrand2.value}</p>
  <p><strong>Date of Vaccination (Dose 2):</strong> ${dateOfVaccination2.value}</p>
  <p><strong>Vaccination Site (Dose 2):</strong> ${vaccinationSite2.value}</p>`;
};
})

const errorMsg = function(field,msg) {
    field.style.borderColor = 'red';
    document.getElementById('error-' + field.name).innerText = msg;

    // Add an event listener to clear the error message when the field is changed
    field.addEventListener('input', function() {
        // Reset the border color of the input field
        field.style.borderColor = '';

        // Clear the error message text
        document.getElementById('error-' + field.name).innerText = '';
  });
};

const validateGender = function() {
    
    let genderChecked = false;
    let selectedGender = null;
  
    gender.forEach(input => {
      if (input.checked) {
        genderChecked = true;
        selectedGender = input.value;
      }
    });
  
    if (!genderChecked) {
      const genderField = document.querySelector('input[name="gender"]');
      errorMsg(genderField, "Gender is required!");
      
      return false;
    }
  
    return selectedGender;
  }
  
  
  










    