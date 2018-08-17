let login = prompt('Enter your login');
if (login === '' || login === null) {
    alert('Canceled.');
} else if (login !== null && login.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
} else if (login === 'User') {
    let password = prompt('Enter your password');
    if (password === '' || password === null) {
        alert('Canceled.');
    } else if (password !== 'SuperUser') {
        alert('Wrong password');
    } else if (password === 'SuperUser') {
        let current_hours = new Date().getHours();
        if (current_hours < 20) {
            alert('Good day!');
        } else if (current_hours >= 20) {
            alert('Good evening!');
        }
    }

} else if (login !== 'User') {
    alert('I don’t know you');
}