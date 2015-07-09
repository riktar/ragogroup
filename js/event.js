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
}

function removeMenu() {
    if ($('#menu').hasClass('toggle')) {
        $('#menu').removeClass('toggle');
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
        $('#home').addClass('activedr');
        setTimeout(function(){
            router.parseRule('<a data-page="single" data-id="2" ></a>', 0);
        },400);
        return false;
    });


    var element = document.getElementById('menu');
    Hammer(element).on("swipeleft", function () {
        removeMenu();
    });
    
    var element = document.getElementById('container-all-section');
    Hammer(element).on("swiperight", function () {
        toggleMenu();
    });
    
    $('body').on('submit', '#contatti-rago', function () {
        alert('Email inviata correttamente! Sarai ricontattato a breve da un nostro operatore.')
        $('#contatti-rago')[0].reset();
        return false;
    });

});
