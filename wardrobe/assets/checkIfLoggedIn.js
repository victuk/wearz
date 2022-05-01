let logoutButton = document.getElementById('logoutButton');

async function checkLogin() {

    if (localStorage.getItem('wearzToken') == null) {
        location.replace('/login.html');
    } else {
        let url = 'https://wearz-api.herokuapp.com/v1/users/profile';
        // let url = 'http://localhost:5000/v1/users/profile';
        let req = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                token: localStorage.getItem('wearzToken')
            }
        });

        req.json().then(r => {
            
            if (r.success == false) {
                location.replace('/login.html');
            }
        });
    }
}

checkLogin();

logoutButton.onclick = function () {
    localStorage.removeItem('wearzToken');
    location.replace('/index.html');
}