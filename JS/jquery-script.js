$(document).ready(function() {
    let activeSurface = $('#surface1'); // Oletuksena aktiivinen pinta
    let surface1Color = "";
    let surface2Color = "";
    let surface1Name = "";
    let surface2Name = "";

    // Vaihdetaan aktiivista pintaa klikatessa
    $('.surface').click(function() {
        $('.surface').removeClass('active');
        $(this).addClass('active');
        activeSurface = $(this);
        console.log(`Aktiivinen pinta: ${activeSurface.attr('id')}`);
    });

    // Käsitellään värin valinta
    $(document).on('click', '.color-swatch', function() {
        const selectedColor = $(this).data('color');
        const selectedName = $(this).data('name');
        console.log(`Valittu väri: ${selectedColor}, nimi: ${selectedName}`);
        

        // Päivitetään SVG:n väri
        if (activeSurface.attr('id') === 'surface1') {
            $('#surface1').attr('fill', selectedColor);
            surface1Color = selectedColor;
            surface1Name = selectedName;
            $('#surface1-info .card-body').html(`Pinta 1: ${selectedName} <span style="color:${selectedColor}">■</span> ${selectedColor}`);
        } else {
            $('#surface2').attr('fill', selectedColor);
            surface2Color = selectedColor;
            surface2Name = selectedName;
            $('#surface2-info .card-body').html(`Pinta 2: ${selectedName} <span style="color:${selectedColor}">■</span> ${selectedColor}`);
        }

        // Muutetaan tekstin väri luettavuuden vuoksi
        const isBright = isColorBright(selectedColor);
        //activeSurface.find('.card-body h3').css('color', isBright ? '#000' : '#fff');
    });

    // Tyhjennä-painikkeen toiminto
    $('#reset-colors').click(function() {
        $('.surface').css('background-color', '');
        $('#surface1, #surface2').attr('fill', '#FFFFFF');
        $('.surface .card-body h3').css('color', '#000');
        $('#surface1-info .card-body').html('Pinta 1: Ei väriä valittu');
        $('#surface2-info .card-body').html('Pinta 2: Ei väriä valittu');
        surface1Color = "";
        surface2Color = "";
        surface1Name = "";
        surface2Name = "";
    });

    // Funktio, jolla tarkistetaan onko väri kirkas (tumma teksti) vai tumma (vaalea teksti)
    function isColorBright(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance > 0.5;
    }
});