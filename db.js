var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('MyVideos75.db');



//db.close();

module.exports = {

  movies: function(callback) {
    db.all('select * from movieview order by dateAdded DESC', function(err, rows) {
      if (callback !== undefined) {
        callback(rows);
      }
    });
  },

  movie_detail: function(idMovie, callback) {
    db.get('select * from movieview where idMovie = ?', idMovie, function(err, movie) {
      if (callback != undefined) {
        callback(movie);
      }
    });
  },

  codecs: function(callback) {

    // var list = [1];

    db.all('select strVideoCodec, count(*) from streamdetails where strVideoCodec is not null group by strVideoCodec ', function(err, rows) {

        // console.log(err, rows);

        // console.log('got it', row);
        //
        // if (err == null) {
        //   list.push(row);
        // }

        if (callback !== undefined)  {
          callback(rows);
        }

    });
  }
}
