var historyApp = [];
var router = {
    parseRule: function (rule, moveHistory) {

        if (moveHistory === 0) {
            switch ($(rule).data('page')) {
                case 'home' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'home.html');
                    $("#container-all-section").load("./home.html");
                    break;
                    
                case 'contatti' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'contatti.html');
                    $("#container-all-section").load("./contatti.html");
                    break;
                
                case 'prodotti' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'prodotti.html');
                    $("#container-all-section").load("./prodotti.html");
                    break;
                
                case 'list' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'list.html?cat=' + $(rule).data('cat'));
                    $("#container-all-section").load('list.html?cat=' + $(rule).data('cat'));
                    break;
                case 'list-facebook' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'list-facebook.html?cat=' + $(rule).data('cat'));
                    $("#container-all-section").load('list-facebook.html?cat=' + $(rule).data('cat'));
                    break;

                case 'single' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'single.html?id=' + $(rule).data('id'));
                    $("#container-all-section").load("./single.html?id=" + $(rule).data('id'));
                    break;
                    
                case 'single-cat' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'single-cat.html?id=' + $(rule).data('id') + '&cat='+ $(rule).data('cat'));
                    $("#container-all-section").load("./single-cat.html?id=" + $(rule).data('id') + '&cat='+ $(rule).data('cat'));
                    break;
                
                case 'single-cat-facebook' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'single-cat-facebook.html?id=' + $(rule).data('id') + '&cat='+ $(rule).data('cat'));
                    $("#container-all-section").load("./single-cat-facebook.html?id=" + $(rule).data('id') + '&cat='+ $(rule).data('cat'));
                    break;  
                
                case 'dovesiamo' :
                    historyApp.push(rule);
                    history.replaceState(null, null, 'dovesiamo.html?id=' + $(rule).data('id'));
                    $("#container-all-section").load("./dovesiamo.html?id=" + $(rule).data('id'));
                    break;

                default:
                    historyApp.push(rule);
                    history.replaceState(null, null, 'home.html');
                    $("#container-all-section").load("./home.html");
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
                history.replaceState(null, null, $(prevRule).data('page') + '.html?id=' + $(prevRule).data('id')+'&cat='+ $(prevRule).data('cat'));
                $("#container-all-section").load("./" + $(prevRule).data('page') + '.html?id=' + $(prevRule).data('id')+'&cat='+ $(prevRule).data('cat'));
            }
        }

    }
};