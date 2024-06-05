var counting = 0;

        var decreament = document.querySelector('.button1 button');
        var increament = document.querySelector('.button2 button');

        increament.addEventListener('click', function (e) {
            counting++;
            document.querySelector('.count h1').textContent = counting;
        });

        decreament.addEventListener('click', function (e) {
            counting--;
            document.querySelector('.count h1').textContent = counting;
        });