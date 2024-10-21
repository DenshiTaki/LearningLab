document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Спасибо, ${name}! Ваше сообщение отправлено.`);
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
});

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('nav a, .hero-text a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});