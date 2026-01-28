/* global TrelloPowerUp */

TrelloPowerUp.initialize({
  'card-badges': function(t, options) {
    return t.get('card', 'shared', 'redirectUrl')
      .then(function(url) {
        if (url) {
          return [{
            text: 'Abrir enlace',
            color: 'blue',
            callback: function() {
              window.open(url, '_blank');
            }
          }];
        }
        return [];
      });
  },
  'card-detail-badges': function(t, options) {
    return t.get('card', 'shared', 'redirectUrl')
      .then(function(url) {
        if (url) {
          return [{
            title: 'Redirigir',
            text: 'Ir al enlace',
            callback: function() {
              window.open(url, '_blank');
            }
          }];
        }
        return [];
      });
  },
  'show-settings': function(t) {
    return t.popup({
      title: 'Configurar enlace',
      url: 'index.html',
      height: 200
    });
  }
});
