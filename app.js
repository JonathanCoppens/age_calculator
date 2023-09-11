/* let addDays = function(date, days) {
    const newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() + days);
    return newDate;
};


 */
function calculateAge(birthday) {
    const today = new Date();
    const birthdate = new Date(birthday.value);
    const age = today.getFullYear() - birthdate.getFullYear() -
        (today.getMonth() < birthdate.getMonth() ||
        (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
    return age;
};

function yourAge () {
    const age = calculateAge(birthday);
    document.getElementById("age").value = age;
    document.getElementById("complete-age").value = age + " ans";
    }

    const today = new Date();
    const birthday = document.querySelector("#birthday");

    const submit = document.querySelector('.submit-button');

    submit.addEventListener('click', function(button) {
    const age = calculateAge(birthday);
    yourAge();
    });