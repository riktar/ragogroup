var MyHost = "http://www.riccardotartaglia.it/app/upload/";
var POSTURL = "http://www.riccardotartaglia.it/app/api/";

function parseGetVars()
{
    // creo una array
    var args = new Array();
    // individuo la query (cioè tutto quello che sta a destra del ?)
    // per farlo uso il metodo substring della proprietà search
    // dell'oggetto location
    var query = window.location.search.substring(1);
    // se c'è una querystring procedo alla sua analisi
    if (query)
    {
        // divido la querystring in blocchi sulla base del carattere &
        // (il carattere & è usato per concatenare i diversi parametri della URL)
        var strList = query.split('&');
        // faccio un ciclo per leggere i blocchi individuati nella querystring
        for (str in strList)
        {
            // divido ogni blocco mediante il simbolo uguale
            // (uguale è usato per l'assegnazione del valore)
            var parts = strList[str].split('=');
            // inserisco nella array args l'accoppiata nome = valore di ciascun
            // parametro presente nella querystring
            args[unescape(parts[0])] = unescape(parts[1]);
        }
    }
    return args;
}

function toggleMenu() {
    $('#menu').toggleClass('toggle');
    $('#logo-rago-circle').toggleClass('visibiles');
}

function removeMenu() {
    if ($('#menu').hasClass('toggle')) {
        $('#menu').removeClass('toggle');
        $('#logo-rago-circle').removeClass('visibiles');
    }
}

document.addEventListener("deviceready", function () {

}, false);

$(function () {
    router.parseRule('<a data-page="home"></a>', 0);
    $('body').on('click', '*[data-event="toggleMenu"]', function () {
        toggleMenu();
        return false;
    });

    $('body').on('click', '*[data-event="historyBack"]', function () {
        router.parseRule(this, -1);
        //window.history.back();
        return false;
    });

    $('body').on('click', '*[data-page]', function () {
        removeMenu();
        router.parseRule(this, 0);
        return false;
    });

    $('body').on('click', '#mostra', function () {
        removeMenu();
        $('#more-home > .fogl').addClass('out');
        setTimeout(function () {
            $('#home').addClass('activedr');
            setTimeout(function () {
                router.parseRule('<a data-page="single" data-id="2" ></a>', 0);
            }, 400);
        }, 700);

        return false;
    });

    $('body').on('click', '#ricerca', function () {
        removeMenu();
        $('#searchbar-cont').toggleClass('activedr');
        return false;
    });


    var element = document.getElementById('menu');
    Hammer(element).on("swipeleft", function () {
        removeMenu();
    });
    
    var element = document.getElementById('container-all-section');
    var hammertime = new Hammer(element);
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    
    Hammer(element).on("swipeup", function () {
        console.log("swipe");
        $('#mostra').trigger('click');
    });

    Hammer(element).on("swiperight", function () {
        toggleMenu();
    });

    $('body').on('submit', '#contatti-rago', function () {
        alert('Email inviata correttamente! Sarai ricontattato a breve da un nostro operatore.')
        $('#contatti-rago')[0].reset();
        return false;
    });

    $('body').on('submit', '#ricerca-rago', function () {
        $('#searchbar-cont').removeClass('activedr');
        router.parseRule('<a data-page="list-ricerca" data-term="' + $('#searchbar').val() + '" ></a>', 0);
        $('#ricerca-rago')[0].reset();
        return false;
    });

    $.ajax({
        method: "GET",
        url: POSTURL + "get-menu/",
        dataType: "json",
        cache: false,
        success: function (data) {
            var htmlList = '';
            var contariga = 0;
            for (index in data.list) {
                var pagina = '';
                if (contariga === 0) {
                    htmlList += '<div class="row">';
                }
                contariga++;
                var item = data.list[index];
                var imagePath = MyHost + 'menu/' + item.Id + '/' + item.Media;
                if (item.idContenuto === "") {
                    pagina = 'list-contenuto'
                } else {
                    pagina = 'single-contenuto'
                }
                htmlList += '\
                <div class="col-xs-6">\n\
                    <a href="#" data-page="' + pagina + '" data-cat="' + item.idMenu + '" data-id="' + item.idContenuto + '" ><img src="' + imagePath + '"></a>\n\
                </div>';
            }
            $('#central-menu').append(htmlList);
        }
    });

});
