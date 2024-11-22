document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    login(username, password);
});

function login(username, password) {
    if (username === 'root' && password === 'rootcat') {
        window.location.href = 'indexpage/index.html';
    } else {
        document.getElementById('message').textContent = '아이디 또는 비밀번호가 잘못되었습니다.';
        console.log('아이디 또는 비밀번호가 잘못되었습니다.');\
    }
}
\
console.log('로그인 하려면 "login(username, password)"를 호출하세요.');
