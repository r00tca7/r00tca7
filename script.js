document.getElementById('openLogin').addEventListener('click', function() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'root' && password === 'rootcat') {
        window.location.href = 'indexpage/index.html';
    } else {
        document.getElementById('message').textContent = '아이디 또는 비밀번호가 올바르지 않습니다.';
    }
});

// 배경 클릭 시 로그인 팝업 닫기
document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});
