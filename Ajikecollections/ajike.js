// jQuery Interactions
$(document).ready(function() {
    $('#login-btn').click(function() {
        var username = $('#username').val();
        var password = $('#password').val();

        if (username === '' || password === '') {
            alert('Please fill in both fields');
        } else {
            // Send request to server (e.g., using AJAX or Fetch API)
            // For demonstration purposes, we'll just log the input values
            console.log('Username:', username);
            console.log('Password:', password);
        }
    });
});

// React Component
function LoginForm() {
    return (
        <div>
            <h2>Login to Ajike Collection</h2>
            <form>
                <div>
                    <label>Username/Email:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

ReactDOM.render(<LoginForm />, document.getElementById('login-form'));

// Vue.js Component
new Vue({
    el: '#login-form',
    data: {
        username: '',
        password: ''
    },
    methods: {
        login() {
            if (this.username === '' || this.password === '') {
                alert('Please fill in both fields');
            } else {
                // Send request to server (e.g., using AJAX or Fetch API)
                // For demonstration purposes, we'll just log the input values
                console.log('Username:', this.username);
                console.log('Password:', this.password);
            }
        }
    }
});

