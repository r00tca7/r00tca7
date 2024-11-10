document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'root' && password === 'rootcat') {
        window.location.href = 'indexpage/index.html';
    } else {
        document.getElementById('message').textContent = '아이디 또는 비밀번호가 잘못되었습니다.';
    }
});
