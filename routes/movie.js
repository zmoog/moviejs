
/*
 * GET movies listing.
 */

var db = require('../db');

exports.list = function(req, res) {

  db.movies(function(rows) {
    res.render('movie_list', {title: 'Movie list', movies: rows});
  });

};

exports.detail = function(req, res) {
  db.movie_detail(req.params.id, function(movie) {
    res.render('movie_detail', {
      title: movie.c00 + ' ('+movie.c07+')',
      posters: movie.c08.match(/\w*.jpg/gi),
      movie: movie

    });
  });
};
