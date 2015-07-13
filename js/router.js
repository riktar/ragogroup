var historyApp = [];
var router = {
    parseRule: function (rule, moveHistory) {

        if (moveHistory === 0) {
            switch ($(rule).data('page')) {
                case 'home' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'home.html');
                    $("#container-all-section").load("./home.html");
                    $('#title-page').html('');
                    break;
                    
                case 'contatti' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'contatti.html');
                    $("#container-all-section").load("./contatti.html");
                    $('#title-page').html('contatti');
                    break;
                    
                case 'list-ricerca' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'list-ricerca.html?term=' + $(rule).data('term'));
                    $("#container-all-section").load("./list-ricerca.html?term=" + $(rule).data('term'));
                    $('#title-page').html('ricerca');
                    break;
                
                case 'prodotti' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'prodotti.html');
                    $("#container-all-section").load("./prodotti.html");
                    $('#title-page').html('prodotti');
                    break;
                
                case 'list' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'list.html?cat=' + $(rule).data('cat'));
                    $("#container-all-section").load('list.html?cat=' + $(rule).data('cat'));
                    $('#title-page').html($(rule).data('cat'));
                    break;
                case 'list-facebook' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'list-facebook.html?cat=' + $(rule).data('cat'));
                    $("#container-all-section").load('list-facebook.html?cat=' + $(rule).data('cat'));
                    $('#title-page').html('news');
                    break;
                case 'list-video' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'index.html?cat=' + $(rule).data('cat'));
                    $("#container-all-section").load('list-video.html?cat=' + $(rule).data('cat'));
                    $('#title-page').html('video');
                    break;

                case 'single' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'single.html?id=' + $(rule).data('id'));
                    $("#container-all-section").load("./single.html?id=" + $(rule).data('id'));
                    $('#title-page').html('azienda');
                    break;
                    
                case 'single-cat' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'single-cat.html?id=' + $(rule).data('id') + '&cat='+ $(rule).data('cat'));
                    $("#container-all-section").load("./single-cat.html?id=" + $(rule).data('id') + '&cat='+ $(rule).data('cat'));
                     $('#title-page').html($(rule).data('cat'));
                    break;
                
                case 'single-cat-facebook' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'single-cat-facebook.html?id=' + $(rule).data('id') + '&cat='+ $(rule).data('cat'));
                    $("#container-all-section").load("./single-cat-facebook.html?id=" + $(rule).data('id') + '&cat='+ $(rule).data('cat'));
                     $('#title-page').html('news');
                    break;  
                
                case 'dovesiamo' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'dovesiamo.html?id=' + $(rule).data('id'));
                    $("#container-all-section").load("./dovesiamo.html?id=" + $(rule).data('id'));
                    $('#title-page').html('dove siamo');
                    break;

                default:
                    historyApp.push(rule);
                    history.replaceState(null, null, 'home.html');
                    $("#container-all-section").load("./home.html");
                    $('#title-page').html('');
                    break;
            }
        } else {
            if (moveHistory < 0) {
                if (historyApp.length === 1) {
                    var prevRule = historyApp[0];
                } else {
                    historyApp.pop();
                    var prevRule = historyApp[historyApp.length - 1];
                }
                history.replaceState(null, null, $(prevRule).data('page') + '.html?term=' + $(prevRule).data('term')+'&id=' + $(prevRule).data('id')+'&cat='+ $(prevRule).data('cat'));
                $("#container-all-section").load("./" + $(prevRule).data('page') + '.html?term=' + $(prevRule).data('term')+'&id=' + $(prevRule).data('id')+'&cat='+ $(prevRule).data('cat'));
                $('#title-page').html('');
            }
        }

    }
};