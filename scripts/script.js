$(document).ready(function(){

    if ($('#home').length) {
        VANTA.NET({
            el: "#home",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x2196f3,
            backgroundColor: 0x1e2a3b,
            points: 10.00,
            maxDistance: 25.00,
            spacing: 18.00
        });
    }
    var sidenavElems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavElems);

    var navbarHeight = 64;

    $('.scrollspy').scrollSpy({
        scrollOffset: navbarHeight + 5,
        throttle: 100 
    });

    var typedOptions = {
        strings: ["Desenvolvedor Web", "Freelancer", "Apaixonado por Tecnologia"],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    };
    new Typed('#typed-text', typedOptions);

    $('nav a[href^="#"], .sidenav a[href^="#"]').on('click', function(event) {
        var targetId = $(this).attr('href');

        if (targetId && targetId.startsWith('#') && targetId.length > 1) {
            var targetElement = $(targetId);

            if (targetElement.length) {
                event.preventDefault();

                var scrollToPosition = targetElement.offset().top - navbarHeight;
                setTimeout(function() {
                    $('html, body').stop(true, false).animate({
                        scrollTop: scrollToPosition
                    }, 800, function() {
                    });
                }, 0);

                if ($(this).closest('.sidenav').length) {
                    var sidenavInstance = M.Sidenav.getInstance($(this).closest('.sidenav')[0]);
                    if (sidenavInstance && sidenavInstance.isOpen) {
                        sidenavInstance.close();
                    }
                }
            }
        }
    });

    const $form = $('#whatsappForm');
    const $submitBtn = $('#submitBtn');
    const $formMessage = $('#formMessage');

    $form.on('submit', function(e) {
        e.preventDefault();
        $submitBtn.prop('disabled', true);
        $submitBtn.html('Enviando... <i class="material-icons right">hourglass_empty</i>');
        $formMessage.show().css('color', 'blue').text('Preparando sua mensagem para o WhatsApp...');

        const nome = $('#nome').val();
        const email = $('#email').val();
        const mensagem = $('#mensagem').val();

        const seuNumeroWhatsApp = '5511910401320';

        const textoWhatsApp = `Olá! Meu nome é ${nome} (%0A) Meu email é ${email} (%0A) Mensagem: ${mensagem}`;
        
        const url = `https://api.whatsapp.com/send?phone=${seuNumeroWhatsApp}&text=${encodeURIComponent(textoWhatsApp)}`;
        
        setTimeout(() => {
            window.open(url, '_blank');
            $submitBtn.prop('disabled', false);
            $submitBtn.html('Enviar <i class="material-icons right">send</i>');
            $formMessage.css('color', 'green').text('WhatsApp aberto! Por favor, envie a mensagem.');
            
            $form[0].reset();

            setTimeout(() => {
                $formMessage.fadeOut();
            }, 5000);

        }, 1000);
    });
    
});
