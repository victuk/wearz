async function checkLogin() {

    if (localStorage.getItem('token') == null) {
        location.replace('/login.html');
    } else {
        let url = 'https://realitypacesettersfoundation.herokuapp.com/v1/users/profile';

        let req = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                token: localStorage.getItem('token')
            }
        });

        req.json().then(r => {
            
            if (r.success == false) {
                location.replace('/admin/login.html');
            } else {
                console.log('Request successful.');
            }
        });
    }
}

checkLogin();