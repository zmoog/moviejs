module.exports = {

  foo: function() {
    return 'foo!';
  },

  poster: function(text, url) {
    return '<img src="http://image.tmdb.org/t/p/w185/' + url + '" title="' + text + '">';
  },

  vote: function(num) {
    return parseFloat(num).toFixed(1);
  }

};
