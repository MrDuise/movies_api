"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovieDAO = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Movie = require("../models/Movie");

var mysql = _interopRequireWildcard(require("mysql"));

var util = _interopRequireWildcard(require("util"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MovieDAO = /*#__PURE__*/function () {
  /**
   * Non-default constructor.
   *
   * @param host Database Hostname
   * @param username Database Username
   * @param password Database Password
   */
  function MovieDAO(host, port, username, password) {
    (0, _classCallCheck2["default"])(this, MovieDAO);
    (0, _defineProperty2["default"])(this, "host", "");
    (0, _defineProperty2["default"])(this, "port", 3306);
    (0, _defineProperty2["default"])(this, "username", "");
    (0, _defineProperty2["default"])(this, "password", "");
    (0, _defineProperty2["default"])(this, "schema", "cst-391");
    (0, _defineProperty2["default"])(this, "pool", this.initDbConnection());
    // Set all class properties
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
    this.pool = this.initDbConnection();
  }
  /**
   * CRUD method to return all Movies.
   *
   * @param callback Callback function with an Array of type Movie.
   */


  (0, _createClass2["default"])(MovieDAO, [{
    key: "findAllMovies",
    value: function findAllMovies(callback) {
      // List of Movies to return
      var movies = []; // Get pooled database connection and run queries

      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, connection) {
          var result1, x;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // Release connection in the pool
                  connection.release(); // Throw error if an error

                  if (!err) {
                    _context.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  // Use Promisfy Util to make an async function and run query to get all Movies
                  connection.query = util.promisify(connection.query);
                  _context.next = 6;
                  return connection.query("SELECT * FROM Movies ORDER BY QUANTITY");

                case 6:
                  result1 = _context.sent;

                  for (x = 0; x < result1.length; ++x) {
                    // Add Movie to the list
                    movies.push(new _Movie.Movie(result1[x].id, result1[x].title, result1[x].genre, result1[x].price, result1[x].quantity));
                  } // Do a callback to return the results


                  callback(movies);

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    /**
     *
     *
     * @param {number} movieID
     * @param {*} callback
     * @memberof MovieDAO
     */

  }, {
    key: "findSingleMovie",
    value: function findSingleMovie(movieID, callback) {
      var movie;
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(err, connection) {
          var result1, x;
          return _regenerator["default"].wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  // Release connection in the pool
                  connection.release(); // Throw error if an error

                  if (!err) {
                    _context2.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  // Use Promisfy Util to make an async function and run query to get all Movies
                  connection.query = util.promisify(connection.query);
                  _context2.next = 6;
                  return connection.query("SELECT * FROM Movies WHERE id =?", [movieID]);

                case 6:
                  result1 = _context2.sent;

                  for (x = 0; x < result1.length; ++x) {
                    // Add Movie to the list
                    movie = new _Movie.Movie(result1[x].id, result1[x].title, result1[x].genre, result1[x].price, result1[x].quantity);
                  } // Do a callback to return the results


                  callback(movie);

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
    /**
     * CRUD method to create an Movie.
     *
     * @param movie Movie to insert.
     * @param callback Callback function with -1 if an error else Movie ID created.
     */

  }, {
    key: "create",
    value: function create(movie, callback) {
      // Get pooled database connection and run queries
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(err, connection) {
          var result1, movieId;
          return _regenerator["default"].wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  // Release connection in the pool
                  connection.release(); // Throw error if an error

                  if (!err) {
                    _context3.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  // Use Promisfy Util to make an async function and insert Movie
                  connection.query = util.promisify(connection.query);
                  _context3.next = 6;
                  return connection.query("INSERT INTO MOVIES (TITLE, GENRE, PRICE, QUANTITY) VALUES(?,?,?,?)", [movie.Title, movie.Genre, movie.Price, movie.Quantity]);

                case 6:
                  result1 = _context3.sent;
                  if (result1.affectedRows != 1) callback(-1);
                  movieId = result1.insertId; // Do a callback to return the results

                  callback(movieId);

                case 10:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
    /**
     * CRUD method to update an Movie.
     *
     * @param movie Movie to update.
     * @param callback Callback function with number of rows updated.
     */

  }, {
    key: "update",
    value: function update(movie, callback) {
      // Get pooled database connection and run queries
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(err, connection) {
          var changes, result1;
          return _regenerator["default"].wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  // Release connection in the pool
                  connection.release(); // Throw error if an error

                  if (!err) {
                    _context4.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  // Use Promisfy Util to make an async function and update Movie
                  changes = 0;
                  connection.query = util.promisify(connection.query);
                  _context4.next = 7;
                  return connection.query("UPDATE MOVIES SET TITLE=?, GENRE=?, PRICE=?, QUANTITY=? WHERE ID=?", [movie.Title, movie.Genre, movie.Price, movie.Quantity, movie.Id]);

                case 7:
                  result1 = _context4.sent;
                  if (result1.changedRows != 0) ++changes; // Do a callback to return the results

                  callback(changes);

                case 10:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x7, _x8) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
    /**
     * CRUD method to delete an Movie.
     *
     * @param movieId Movie ID to delete.
     * @param callback Callback function with number of rows deleted.
     * */

  }, {
    key: "delete",
    value: function _delete(movieId, callback) {
      // Get pooled database connection and run queries
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(err, connection) {
          var changes, result1;
          return _regenerator["default"].wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  // Release connection in the pool
                  connection.release(); // Throw error if an error

                  if (!err) {
                    _context5.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  // Use Promisfy Util to make an async function and run query to delete the Movie
                  changes = 0;
                  connection.query = util.promisify(connection.query);
                  _context5.next = 7;
                  return connection.query("DELETE FROM MOVIES WHERE ID=?", [movieId]);

                case 7:
                  result1 = _context5.sent;
                  changes = changes + result1.affectedRows; // Do a callback to return the results

                  callback(changes);

                case 10:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x9, _x10) {
          return _ref5.apply(this, arguments);
        };
      }());
    } //* **************** Private Helper Methods **************** */

    /**
     * Private helper method to initialie a Database Connection
     */

  }, {
    key: "initDbConnection",
    value: function initDbConnection() {
      return mysql.createPool({
        host: this.host,
        port: this.port,
        user: this.username,
        password: this.password,
        database: this.schema,
        connectionLimit: 10
      });
    }
  }]);
  return MovieDAO;
}();

exports.MovieDAO = MovieDAO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9kYXRhYmFzZS9Nb3ZpZURBTy50cyJdLCJuYW1lcyI6WyJNb3ZpZURBTyIsImhvc3QiLCJwb3J0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImluaXREYkNvbm5lY3Rpb24iLCJwb29sIiwiY2FsbGJhY2siLCJtb3ZpZXMiLCJnZXRDb25uZWN0aW9uIiwiZXJyIiwiY29ubmVjdGlvbiIsInJlbGVhc2UiLCJxdWVyeSIsInV0aWwiLCJwcm9taXNpZnkiLCJyZXN1bHQxIiwieCIsImxlbmd0aCIsInB1c2giLCJNb3ZpZSIsImlkIiwidGl0bGUiLCJnZW5yZSIsInByaWNlIiwicXVhbnRpdHkiLCJtb3ZpZUlEIiwibW92aWUiLCJUaXRsZSIsIkdlbnJlIiwiUHJpY2UiLCJRdWFudGl0eSIsImFmZmVjdGVkUm93cyIsIm1vdmllSWQiLCJpbnNlcnRJZCIsImNoYW5nZXMiLCJJZCIsImNoYW5nZWRSb3dzIiwibXlzcWwiLCJjcmVhdGVQb29sIiwidXNlciIsImRhdGFiYXNlIiwic2NoZW1hIiwiY29ubmVjdGlvbkxpbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRWFBLFE7QUFRWDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFLG9CQUFZQyxJQUFaLEVBQTBCQyxJQUExQixFQUF3Q0MsUUFBeEMsRUFBMERDLFFBQTFELEVBQTRFO0FBQUE7QUFBQSxtREFkckQsRUFjcUQ7QUFBQSxtREFickQsSUFhcUQ7QUFBQSx1REFaakQsRUFZaUQ7QUFBQSx1REFYakQsRUFXaUQ7QUFBQSxxREFWbkQsU0FVbUQ7QUFBQSxtREFUN0QsS0FBS0MsZ0JBQUwsRUFTNkQ7QUFDMUU7QUFDQSxTQUFLSixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhC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KiBhcyBteXNxbCBmcm9tIFwibXlzcWxcIjtcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSBcInV0aWxcIjtcblxuZXhwb3J0IGNsYXNzIE1vdmllREFPIHtcbiAgcHJpdmF0ZSBob3N0OiBzdHJpbmcgPSBcIlwiO1xuICBwcml2YXRlIHBvcnQ6IG51bWJlciA9IDMzMDY7XG4gIHByaXZhdGUgdXNlcm5hbWU6IHN0cmluZyA9IFwiXCI7XG4gIHByaXZhdGUgcGFzc3dvcmQ6IHN0cmluZyA9IFwiXCI7XG4gIHByaXZhdGUgc2NoZW1hOiBzdHJpbmcgPSBcImNzdC0zOTFcIjtcbiAgcHJpdmF0ZSBwb29sID0gdGhpcy5pbml0RGJDb25uZWN0aW9uKCk7XG5cbiAgLyoqXG4gICAqIE5vbi1kZWZhdWx0IGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0gaG9zdCBEYXRhYmFzZSBIb3N0bmFtZVxuICAgKiBAcGFyYW0gdXNlcm5hbWUgRGF0YWJhc2UgVXNlcm5hbWVcbiAgICogQHBhcmFtIHBhc3N3b3JkIERhdGFiYXNlIFBhc3N3b3JkXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihob3N0OiBzdHJpbmcsIHBvcnQ6IG51bWJlciwgdXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIC8vIFNldCBhbGwgY2xhc3MgcHJvcGVydGllc1xuICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgdGhpcy5wb3J0ID0gcG9ydDtcbiAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgIHRoaXMucG9vbCA9IHRoaXMuaW5pdERiQ29ubmVjdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENSVUQgbWV0aG9kIHRvIHJldHVybiBhbGwgTW92aWVzLlxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBhbiBBcnJheSBvZiB0eXBlIE1vdmllLlxuICAgKi9cbiAgcHVibGljIGZpbmRBbGxNb3ZpZXMoY2FsbGJhY2s6IGFueSkge1xuICAgIC8vIExpc3Qgb2YgTW92aWVzIHRvIHJldHVyblxuICAgIGxldCBtb3ZpZXM6IE1vdmllW10gPSBbXTtcblxuICAgIC8vIEdldCBwb29sZWQgZGF0YWJhc2UgY29ubmVjdGlvbiBhbmQgcnVuIHF1ZXJpZXNcbiAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbiAoZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSkge1xuICAgICAgLy8gUmVsZWFzZSBjb25uZWN0aW9uIGluIHRoZSBwb29sXG4gICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcblxuICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgYW4gZXJyb3JcbiAgICAgIGlmIChlcnIpIHRocm93IGVycjtcblxuICAgICAgLy8gVXNlIFByb21pc2Z5IFV0aWwgdG8gbWFrZSBhbiBhc3luYyBmdW5jdGlvbiBhbmQgcnVuIHF1ZXJ5IHRvIGdldCBhbGwgTW92aWVzXG4gICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XG4gICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoXG4gICAgICAgIFwiU0VMRUNUICogRlJPTSBNb3ZpZXMgT1JERVIgQlkgUVVBTlRJVFlcIlxuICAgICAgKTtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgcmVzdWx0MS5sZW5ndGg7ICsreCkge1xuICAgICAgICAvLyBBZGQgTW92aWUgdG8gdGhlIGxpc3RcbiAgICAgICAgbW92aWVzLnB1c2goXG4gICAgICAgICAgbmV3IE1vdmllKFxuICAgICAgICAgICAgcmVzdWx0MVt4XS5pZCxcbiAgICAgICAgICAgIHJlc3VsdDFbeF0udGl0bGUsXG4gICAgICAgICAgICByZXN1bHQxW3hdLmdlbnJlLFxuICAgICAgICAgICAgcmVzdWx0MVt4XS5wcmljZSxcbiAgICAgICAgICAgIHJlc3VsdDFbeF0ucXVhbnRpdHlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIERvIGEgY2FsbGJhY2sgdG8gcmV0dXJuIHRoZSByZXN1bHRzXG4gICAgICBjYWxsYmFjayhtb3ZpZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtb3ZpZUlEXG4gICAqIEBwYXJhbSB7Kn0gY2FsbGJhY2tcbiAgICogQG1lbWJlcm9mIE1vdmllREFPXG4gICAqL1xuICBwdWJsaWMgZmluZFNpbmdsZU1vdmllKG1vdmllSUQ6IG51bWJlciwgY2FsbGJhY2s6IGFueSkge1xuICAgIGxldCBtb3ZpZTogTW92aWU7XG5cbiAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbiAoZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSkge1xuICAgICAgLy8gUmVsZWFzZSBjb25uZWN0aW9uIGluIHRoZSBwb29sXG4gICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcblxuICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgYW4gZXJyb3JcbiAgICAgIGlmIChlcnIpIHRocm93IGVycjtcblxuICAgICAgLy8gVXNlIFByb21pc2Z5IFV0aWwgdG8gbWFrZSBhbiBhc3luYyBmdW5jdGlvbiBhbmQgcnVuIHF1ZXJ5IHRvIGdldCBhbGwgTW92aWVzXG4gICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XG4gICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoXCJTRUxFQ1QgKiBGUk9NIE1vdmllcyBXSEVSRSBpZCA9P1wiLCBbXG4gICAgICAgIG1vdmllSUQsXG4gICAgICBdKTtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgcmVzdWx0MS5sZW5ndGg7ICsreCkge1xuICAgICAgICAvLyBBZGQgTW92aWUgdG8gdGhlIGxpc3RcbiAgICAgICAgbW92aWUgPSBuZXcgTW92aWUoXG4gICAgICAgICAgcmVzdWx0MVt4XS5pZCxcbiAgICAgICAgICByZXN1bHQxW3hdLnRpdGxlLFxuICAgICAgICAgIHJlc3VsdDFbeF0uZ2VucmUsXG4gICAgICAgICAgcmVzdWx0MVt4XS5wcmljZSxcbiAgICAgICAgICByZXN1bHQxW3hdLnF1YW50aXR5XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIERvIGEgY2FsbGJhY2sgdG8gcmV0dXJuIHRoZSByZXN1bHRzXG4gICAgICBjYWxsYmFjayhtb3ZpZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ1JVRCBtZXRob2QgdG8gY3JlYXRlIGFuIE1vdmllLlxuICAgKlxuICAgKiBAcGFyYW0gbW92aWUgTW92aWUgdG8gaW5zZXJ0LlxuICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24gd2l0aCAtMSBpZiBhbiBlcnJvciBlbHNlIE1vdmllIElEIGNyZWF0ZWQuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlKG1vdmllOiBNb3ZpZSwgY2FsbGJhY2s6IGFueSkge1xuICAgIC8vIEdldCBwb29sZWQgZGF0YWJhc2UgY29ubmVjdGlvbiBhbmQgcnVuIHF1ZXJpZXNcbiAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbiAoZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSkge1xuICAgICAgLy8gUmVsZWFzZSBjb25uZWN0aW9uIGluIHRoZSBwb29sXG4gICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcblxuICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgYW4gZXJyb3JcbiAgICAgIGlmIChlcnIpIHRocm93IGVycjtcblxuICAgICAgLy8gVXNlIFByb21pc2Z5IFV0aWwgdG8gbWFrZSBhbiBhc3luYyBmdW5jdGlvbiBhbmQgaW5zZXJ0IE1vdmllXG4gICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XG4gICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoXG4gICAgICAgIFwiSU5TRVJUIElOVE8gTU9WSUVTIChUSVRMRSwgR0VOUkUsIFBSSUNFLCBRVUFOVElUWSkgVkFMVUVTKD8sPyw/LD8pXCIsXG4gICAgICAgIFttb3ZpZS5UaXRsZSwgbW92aWUuR2VucmUsIG1vdmllLlByaWNlLCBtb3ZpZS5RdWFudGl0eV1cbiAgICAgICk7XG4gICAgICBpZiAocmVzdWx0MS5hZmZlY3RlZFJvd3MgIT0gMSkgY2FsbGJhY2soLTEpO1xuXG4gICAgICBsZXQgbW92aWVJZCA9IHJlc3VsdDEuaW5zZXJ0SWQ7XG5cbiAgICAgIC8vIERvIGEgY2FsbGJhY2sgdG8gcmV0dXJuIHRoZSByZXN1bHRzXG4gICAgICBjYWxsYmFjayhtb3ZpZUlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDUlVEIG1ldGhvZCB0byB1cGRhdGUgYW4gTW92aWUuXG4gICAqXG4gICAqIEBwYXJhbSBtb3ZpZSBNb3ZpZSB0byB1cGRhdGUuXG4gICAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbiB3aXRoIG51bWJlciBvZiByb3dzIHVwZGF0ZWQuXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKG1vdmllOiBNb3ZpZSwgY2FsbGJhY2s6IGFueSkge1xuICAgIC8vIEdldCBwb29sZWQgZGF0YWJhc2UgY29ubmVjdGlvbiBhbmQgcnVuIHF1ZXJpZXNcbiAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbiAoZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSkge1xuICAgICAgLy8gUmVsZWFzZSBjb25uZWN0aW9uIGluIHRoZSBwb29sXG4gICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcblxuICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgYW4gZXJyb3JcbiAgICAgIGlmIChlcnIpIHRocm93IGVycjtcblxuICAgICAgLy8gVXNlIFByb21pc2Z5IFV0aWwgdG8gbWFrZSBhbiBhc3luYyBmdW5jdGlvbiBhbmQgdXBkYXRlIE1vdmllXG4gICAgICBsZXQgY2hhbmdlcyA9IDA7XG4gICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XG4gICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoXG4gICAgICAgIFwiVVBEQVRFIE1PVklFUyBTRVQgVElUTEU9PywgR0VOUkU9PywgUFJJQ0U9PywgUVVBTlRJVFk9PyBXSEVSRSBJRD0/XCIsXG4gICAgICAgIFttb3ZpZS5UaXRsZSwgbW92aWUuR2VucmUsIG1vdmllLlByaWNlLCBtb3ZpZS5RdWFudGl0eSwgbW92aWUuSWRdXG4gICAgICApO1xuICAgICAgaWYgKHJlc3VsdDEuY2hhbmdlZFJvd3MgIT0gMCkgKytjaGFuZ2VzO1xuXG4gICAgICAvLyBEbyBhIGNhbGxiYWNrIHRvIHJldHVybiB0aGUgcmVzdWx0c1xuICAgICAgY2FsbGJhY2soY2hhbmdlcyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ1JVRCBtZXRob2QgdG8gZGVsZXRlIGFuIE1vdmllLlxuICAgKlxuICAgKiBAcGFyYW0gbW92aWVJZCBNb3ZpZSBJRCB0byBkZWxldGUuXG4gICAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbiB3aXRoIG51bWJlciBvZiByb3dzIGRlbGV0ZWQuXG4gICAqICovXG4gIHB1YmxpYyBkZWxldGUobW92aWVJZDogbnVtYmVyLCBjYWxsYmFjazogYW55KSB7XG4gICAgLy8gR2V0IHBvb2xlZCBkYXRhYmFzZSBjb25uZWN0aW9uIGFuZCBydW4gcXVlcmllc1xuICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uIChlcnI6IGFueSwgY29ubmVjdGlvbjogYW55KSB7XG4gICAgICAvLyBSZWxlYXNlIGNvbm5lY3Rpb24gaW4gdGhlIHBvb2xcbiAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuXG4gICAgICAvLyBUaHJvdyBlcnJvciBpZiBhbiBlcnJvclxuICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuXG4gICAgICAvLyBVc2UgUHJvbWlzZnkgVXRpbCB0byBtYWtlIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBydW4gcXVlcnkgdG8gZGVsZXRlIHRoZSBNb3ZpZVxuICAgICAgbGV0IGNoYW5nZXMgPSAwO1xuICAgICAgY29ubmVjdGlvbi5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpO1xuICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KFwiREVMRVRFIEZST00gTU9WSUVTIFdIRVJFIElEPT9cIiwgW1xuICAgICAgICBtb3ZpZUlkLFxuICAgICAgXSk7XG4gICAgICBjaGFuZ2VzID0gY2hhbmdlcyArIHJlc3VsdDEuYWZmZWN0ZWRSb3dzO1xuXG4gICAgICAvLyBEbyBhIGNhbGxiYWNrIHRvIHJldHVybiB0aGUgcmVzdWx0c1xuICAgICAgY2FsbGJhY2soY2hhbmdlcyk7XG4gICAgfSk7XG4gIH1cblxuICAvLyogKioqKioqKioqKioqKioqKiBQcml2YXRlIEhlbHBlciBNZXRob2RzICoqKioqKioqKioqKioqKiogKi9cblxuICAvKipcbiAgICogUHJpdmF0ZSBoZWxwZXIgbWV0aG9kIHRvIGluaXRpYWxpZSBhIERhdGFiYXNlIENvbm5lY3Rpb25cbiAgICovXG4gIHByaXZhdGUgaW5pdERiQ29ubmVjdGlvbigpOiBhbnkge1xuICAgIHJldHVybiBteXNxbC5jcmVhdGVQb29sKHtcbiAgICAgIGhvc3Q6IHRoaXMuaG9zdCxcbiAgICAgIHBvcnQ6IHRoaXMucG9ydCxcbiAgICAgIHVzZXI6IHRoaXMudXNlcm5hbWUsXG4gICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgIGRhdGFiYXNlOiB0aGlzLnNjaGVtYSxcbiAgICAgIGNvbm5lY3Rpb25MaW1pdDogMTAsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==