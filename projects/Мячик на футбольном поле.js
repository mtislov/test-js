let ball = document.getElementById('ball');
let field = document.getElementById('field');





field.addEventListener('click', function(event) {
    let top = event.clientY - field.getBoundingClientRect().top - field.clientTop - ball.clientHeight / 2;
    let left = event.clientX - field.offsetLeft - field.clientLeft - ball.clientWidth / 2;

    if (top < 0 ) top = 0;
    if (left < 0) left = 0;

    if (top + ball.clientHeight > field.clientHeight) {
        top = field.clientHeight - ball.clientHeight;
    }

    if (left + ball.clientWidth > field.clientWidth) {
        left = field.clientWidth - ball.clientWidth;
    }
    

    ball.style.top = top + 'px';
    ball.style.left = left + 'px';

});

/**https://learn.javascript.ru/introduction-browser-events#peredvinte-myach-po-polyu */