const stop_animation_btn = document.querySelector('#stop_animation');

const stop_animation = () => {
    const div_title = document.querySelector('#div-title');
    if (div_title.style.animation == '0s ease 0s 1 normal none running none') {
        div_title.style.animation = 'text-snake 1450ms infinite alternate';
        stop_animation_btn.innerHTML = 'עצור אנימציה';
    }
    else {
        div_title.style.animation = 'none';
        stop_animation_btn.innerHTML = 'המשך אנימציה';
    }
}

const stop_shadow = () => {
    const title = document.querySelector('#title');
    const disable_shadow = document.querySelector('#disable_shadow');
    if (title.style.textShadow != 'none') {
        title.style.textShadow = 'none';
        stop_animation_btn.style.display = 'none';
        title.style.color = 'purple';
        disable_shadow.innerHTML = 'המשך צל';
    }
    else
        window.location.reload();
}