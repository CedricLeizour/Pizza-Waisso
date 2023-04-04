//Ici on cible les éléments du DOM dont on aura besoin

const form = document.getElementById('form');
const civility = document.getElementById('civility')
const username = document.getElementById('username');
const firstname = document.getElementById('firstname');
const email = document.getElementById('email');
const captcha = document.getElementById('captcha');

//Ecouteur d'évènement, on empêche le rafraichissement de la page puis on vérifie les données saisies
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

//Fonction pour gérer les messages d'erreurs
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

//fonction pour retirer les messages d'erreurs en cas de saisie correcte
const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

//regex pour vérifier la validité d'un email
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    //La méthode trim() permet de retirer les blancs en début et fin de chaîne.
    const civilityValue = civility.value.trim();
    const usernameValue = username.value.trim();
    const firstnameValue = firstname.value.trim();
    const emailValue = email.value.trim();
    const captchaValue = captcha.value.trim();


    //on utilise les conditions if, else et else if pour vérifier les saisies de l'utilisateur
    if (civilityValue === '') {
        setError(civility, 'Merci de mentionner votre titre');
    } else {
        setSuccess(civility);
    }

    if (usernameValue === '') {
        setError(username, 'Merci de mentionner votre nom');
    } else {
        setSuccess(username);
    }

    if (firstnameValue === '') {
        setError(firstname, 'Merci de mentionner votre prénom');
    } else {
        setSuccess(firstname);
    }

    if (emailValue === '') {
        setError(email, 'Merci de mentionner votre email');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Veuillez entrer une adresse mail valide')
    } else {
        setSuccess(email);
    }

    if (captchaValue === '') {
        setError(captcha, 'Merci de mentionner le captcha');
    } else if (captchaValue !== 'MY5N5') {
        setError(captcha, 'Veuillez entrer un captcha valide');
    } else {
        setSuccess(captcha);
    }
};

