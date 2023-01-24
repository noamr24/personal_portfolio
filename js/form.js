"using strict";

function validate_submition() {
    let name = document.querySelector("#form-name");
    let subject = document.querySelector("#form-subject");
    let text = document.querySelector("#form-message");
    let gmail = document.querySelector("#isGmail");


    if (name.value.trim() == ""){
        window.alert("Please enter a your name");
        name.focus();
        return false;
    }

    if (text.value.trim() == ""){
        window.alert("Please enter your message");
        name.focus();
        return false;
    }

    if (gmail.checked){

        window.open(
            'https://mail.google.com/mail/?view=cm&fs=1&to=noamreuveni202@gmail.com&su='+subject.value +
            '&body=Hey Noam, My name is'+name.value+"%0D%0AI'm looking to contact you about:%0D%0A"+encodeURIComponent(text.value)
        );
    } else {
        window.location.href = "mailto:noamreuveni202@gmail.com?subject="+encodeURIComponent(subject.value)+"&body="+encodeURIComponent(text.value);
    }
    return true;
}