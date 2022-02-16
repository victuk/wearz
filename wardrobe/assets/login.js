const email = document.getElementById('username');
const password = document.getElementById('password');

async function login() {
    window.FlashMessage.info('Processing... Please wait');
    const url = 'https://realitypacesettersfoundation.herokuapp.com/v1/login';
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
       
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email.value, password: password.value})
    });
    response.json().then(res => {
        if (res.status == true) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('role', res.role);
            location.replace('/admin/index.html')
        } else {
            window.FlashMessage.error('Invalid username/password');
        }
    }).catch(e => {
        window.FlashMessage.error('An error occured. Kindly try adain later');
    });
}

