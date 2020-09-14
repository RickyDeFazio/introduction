const hook = document.getElementById('auto-text');

const introduction = "I am a Software Engineer with hands on experience building web applications and websites using JavaScript, Python, Node, React, Express, MongoDB, SQL, Ruby, HTML5, CSS3 and more. More importantly, I'm someone with a can-do attitude that has a high aptitude for learning and problem-solving. I'm passionate about mastering my skills, and I'm always seeking best practices that lead to maintainable code.\n\nContinual learning is of the utmost importance to me, so it isn't uncommon to find me reading, watching tutorials, and coding through my weekends. With my unique background of professional and self-taught instruction, as well as my determination for mastery, I am confident I will be a valuable asset to my future employer."

let index = 0;


function authorText(text) {
    hook.textContent = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 0
    }
}

setInterval(authorText, 100, introduction);
