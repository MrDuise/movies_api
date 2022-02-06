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
                  return connection.query('SELECT * FROM Movies ORDER BY QUANTITY');

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
                  return connection.query('SELECT * FROM Movies WHERE id =?', [movieID]);

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
                  return connection.query('INSERT INTO MOVIES (TITLE, GENRE, PRICE, QUANTITY) VALUES(?,?,?,?)', [movie.Title, movie.Genre, movie.Price, movie.Quantity]);

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
                  return connection.query('UPDATE MOVIES SET TITLE=?, GENRE=?, PRICE=?, QUANTITY=? WHERE ID=?', [movie.Title, movie.Genre, movie.Price, movie.Quantity, movie.Id]);

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
                  return connection.query('DELETE FROM MOVIES WHERE ID=?', [movieId]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9kYXRhYmFzZS9Nb3ZpZURBTy50cyJdLCJuYW1lcyI6WyJNb3ZpZURBTyIsImhvc3QiLCJwb3J0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImluaXREYkNvbm5lY3Rpb24iLCJwb29sIiwiY2FsbGJhY2siLCJtb3ZpZXMiLCJnZXRDb25uZWN0aW9uIiwiZXJyIiwiY29ubmVjdGlvbiIsInJlbGVhc2UiLCJxdWVyeSIsInV0aWwiLCJwcm9taXNpZnkiLCJyZXN1bHQxIiwieCIsImxlbmd0aCIsInB1c2giLCJNb3ZpZSIsImlkIiwidGl0bGUiLCJnZW5yZSIsInByaWNlIiwicXVhbnRpdHkiLCJtb3ZpZUlEIiwibW92aWUiLCJUaXRsZSIsIkdlbnJlIiwiUHJpY2UiLCJRdWFudGl0eSIsImFmZmVjdGVkUm93cyIsIm1vdmllSWQiLCJpbnNlcnRJZCIsImNoYW5nZXMiLCJJZCIsImNoYW5nZWRSb3dzIiwibXlzcWwiLCJjcmVhdGVQb29sIiwidXNlciIsImRhdGFiYXNlIiwic2NoZW1hIiwiY29ubmVjdGlvbkxpbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRWFBLFE7QUFTVDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJLG9CQUFZQyxJQUFaLEVBQXlCQyxJQUF6QixFQUFzQ0MsUUFBdEMsRUFBdURDLFFBQXZELEVBQ0E7QUFBQTtBQUFBLG1EQWZzQixFQWV0QjtBQUFBLG1EQWRzQixJQWN0QjtBQUFBLHVEQWIwQixFQWExQjtBQUFBLHVEQVowQixFQVkxQjtBQUFBLHFEQVh3QixTQVd4QjtBQUFBLG1EQVZlLEtBQUtDLGdCQUFMLEVBVWY7QUFDSTtBQUNBLFNBQUtKLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFD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LENBQUNDLE9BQVgsR0FIb0IsQ0FLcEI7O0FBTG9CLHVCQU1qQkYsR0FOaUI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsd0JBTU5BLEdBTk07O0FBQUE7QUFRcEI7QUFDSXlCLGtCQUFBQSxPQVRnQixHQVNOLENBVE07QUFVcEJ4QixrQkFBQUEsVUFBVSxDQUFDRSxLQUFYLEdBQW1CQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosVUFBVSxDQUFDRSxLQUExQixDQUFuQjtBQVZvQjtBQUFBLHlCQVdBRixVQUFVLENBQUNFLEtBQVgsQ0FBaUIsK0JBQWpCLEVBQWtELENBQUNvQixPQUFELENBQWxELENBWEE7O0FBQUE7QUFXaEJqQixrQkFBQUEsT0FYZ0I7QUFZcEJtQixrQkFBQUEsT0FBTyxHQUFHQSxPQUFPLEdBQUduQixPQUFPLENBQUNnQixZQUE1QixDQVpvQixDQWNwQjs7QUFDQXpCLGtCQUFBQSxRQUFRLENBQUM0QixPQUFELENBQVI7O0FBZm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUJILEssQ0FFRDs7QUFFQTtBQUNKO0FBQ0E7Ozs7V0FDSSw0QkFDQTtBQUNJLGFBQU9HLEtBQUssQ0FBQ0MsVUFBTixDQUFpQjtBQUFDdEMsUUFBQUEsSUFBSSxFQUFFLEtBQUtBLElBQVo7QUFBa0JDLFFBQUFBLElBQUksRUFBRSxLQUFLQSxJQUE3QjtBQUFtQ3NDLFFBQUFBLElBQUksRUFBRSxLQUFLckMsUUFBOUM7QUFBd0RDLFFBQUFBLFFBQVEsRUFBRSxLQUFLQSxRQUF2RTtBQUFpRnFDLFFBQUFBLFFBQVEsRUFBRSxLQUFLQyxNQUFoRztBQUF3R0MsUUFBQUEsZUFBZSxFQUFFO0FBQXpILE9BQWpCLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vdmllIH0gZnJvbSBcIi4uL21vZGVscy9Nb3ZpZVwiO1xuaW1wb3J0ICogYXMgbXlzcWwgZnJvbSBcIm15c3FsXCI7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gXCJ1dGlsXCI7XG5cbmV4cG9ydCBjbGFzcyBNb3ZpZURBT1xue1xuICAgIHByaXZhdGUgaG9zdDpzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgcG9ydDpudW1iZXIgPSAzMzA2O1xuICAgIHByaXZhdGUgdXNlcm5hbWU6c3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIHBhc3N3b3JkOnN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBzY2hlbWE6c3RyaW5nID0gXCJjc3QtMzkxXCI7XG4gICAgcHJpdmF0ZSBwb29sID0gdGhpcy5pbml0RGJDb25uZWN0aW9uKCk7XG4gICAgXG4gICAgLyoqXG4gICAgICogTm9uLWRlZmF1bHQgY29uc3RydWN0b3IuXG4gICAgICogXG4gICAgICogQHBhcmFtIGhvc3QgRGF0YWJhc2UgSG9zdG5hbWVcbiAgICAgKiBAcGFyYW0gdXNlcm5hbWUgRGF0YWJhc2UgVXNlcm5hbWVcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmQgRGF0YWJhc2UgUGFzc3dvcmRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihob3N0OnN0cmluZywgcG9ydDpudW1iZXIsIHVzZXJuYW1lOnN0cmluZywgcGFzc3dvcmQ6c3RyaW5nKVxuICAgIHtcbiAgICAgICAgLy8gU2V0IGFsbCBjbGFzcyBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgICAgICB0aGlzLnBvb2wgPSB0aGlzLmluaXREYkNvbm5lY3Rpb24oKTtcbiAgICB9XG5cbiAgXG5cbiAgICBcblxuICAgIC8qKlxuICAgICAqIENSVUQgbWV0aG9kIHRvIHJldHVybiBhbGwgTW92aWVzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbiB3aXRoIGFuIEFycmF5IG9mIHR5cGUgTW92aWUuXG4gICAgICovXG4gICAgcHVibGljIGZpbmRBbGxNb3ZpZXMoY2FsbGJhY2s6IGFueSlcbiAgICB7XG4gICAgICAgICAvLyBMaXN0IG9mIE1vdmllcyB0byByZXR1cm5cbiAgICAgICAgIGxldCBtb3ZpZXM6TW92aWVbXSA9IFtdO1xuXG4gICAgICAgIC8vIEdldCBwb29sZWQgZGF0YWJhc2UgY29ubmVjdGlvbiBhbmQgcnVuIHF1ZXJpZXMgICBcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjphbnkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIFJlbGVhc2UgY29ubmVjdGlvbiBpbiB0aGUgcG9vbFxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG5cbiAgICAgICAgICAgIC8vIFRocm93IGVycm9yIGlmIGFuIGVycm9yXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICAgICAgICAgIC8vIFVzZSBQcm9taXNmeSBVdGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHJ1biBxdWVyeSB0byBnZXQgYWxsIE1vdmllc1xuICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpO1xuICAgICAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIE1vdmllcyBPUkRFUiBCWSBRVUFOVElUWScpO1xuICAgICAgICAgICAgZm9yKGxldCB4PTA7eCA8IHJlc3VsdDEubGVuZ3RoOysreClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBNb3ZpZSB0byB0aGUgbGlzdFxuICAgICAgICAgICAgICAgIG1vdmllcy5wdXNoKG5ldyBNb3ZpZShyZXN1bHQxW3hdLmlkLCByZXN1bHQxW3hdLnRpdGxlLCByZXN1bHQxW3hdLmdlbnJlLCByZXN1bHQxW3hdLnByaWNlLCByZXN1bHQxW3hdLnF1YW50aXR5KSk7IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEbyBhIGNhbGxiYWNrIHRvIHJldHVybiB0aGUgcmVzdWx0c1xuICAgICAgICAgICAgY2FsbGJhY2sobW92aWVzKTtcbiAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcHVibGljIGZpbmRTaW5nbGVNb3ZpZShtb3ZpZUlEOiBudW1iZXIsIGNhbGxiYWNrOiBhbnkpXG4gICAge1xuICAgICAgICBsZXQgbW92aWU6IE1vdmllO1xuXG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uKGVycjphbnksIGNvbm5lY3Rpb246YW55KVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBSZWxlYXNlIGNvbm5lY3Rpb24gaW4gdGhlIHBvb2xcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuXG4gICAgICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBhbiBlcnJvclxuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuXG4gICAgICAgICAgICAvLyBVc2UgUHJvbWlzZnkgVXRpbCB0byBtYWtlIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBydW4gcXVlcnkgdG8gZ2V0IGFsbCBNb3ZpZXNcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcbiAgICAgICAgICAgIGxldCByZXN1bHQxID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBNb3ZpZXMgV0hFUkUgaWQgPT8nLCBbbW92aWVJRF0pO1xuICAgICAgICAgICAgZm9yKGxldCB4PTA7eCA8IHJlc3VsdDEubGVuZ3RoOysreClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBNb3ZpZSB0byB0aGUgbGlzdFxuICAgICAgICAgICAgICAgIG1vdmllID0gbmV3IE1vdmllKHJlc3VsdDFbeF0uaWQsIHJlc3VsdDFbeF0udGl0bGUsIHJlc3VsdDFbeF0uZ2VucmUsIHJlc3VsdDFbeF0ucHJpY2UsIHJlc3VsdDFbeF0ucXVhbnRpdHkpOyBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRG8gYSBjYWxsYmFjayB0byByZXR1cm4gdGhlIHJlc3VsdHNcbiAgICAgICAgICAgIGNhbGxiYWNrKG1vdmllKTtcbiAgICAgICAgIH0pO1xuICAgIH1cblxuICBcblxuICAgIFxuXG4gICAgLyoqXG4gICAgICogQ1JVRCBtZXRob2QgdG8gY3JlYXRlIGFuIE1vdmllLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBtb3ZpZSBNb3ZpZSB0byBpbnNlcnQuXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uIHdpdGggLTEgaWYgYW4gZXJyb3IgZWxzZSBNb3ZpZSBJRCBjcmVhdGVkLiAgXG4gICAgICovXG4gICAgcHVibGljIGNyZWF0ZShtb3ZpZTpNb3ZpZSwgY2FsbGJhY2s6IGFueSlcbiAgICB7XG4gICAgICAgIC8vIEdldCBwb29sZWQgZGF0YWJhc2UgY29ubmVjdGlvbiBhbmQgcnVuIHF1ZXJpZXMgICBcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjphbnkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIFJlbGVhc2UgY29ubmVjdGlvbiBpbiB0aGUgcG9vbFxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG5cbiAgICAgICAgICAgIC8vIFRocm93IGVycm9yIGlmIGFuIGVycm9yXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICAgICAgICAgIC8vIFVzZSBQcm9taXNmeSBVdGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIGluc2VydCBNb3ZpZVxuICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpO1xuICAgICAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdJTlNFUlQgSU5UTyBNT1ZJRVMgKFRJVExFLCBHRU5SRSwgUFJJQ0UsIFFVQU5USVRZKSBWQUxVRVMoPyw/LD8sPyknLCBbbW92aWUuVGl0bGUsIG1vdmllLkdlbnJlLCBtb3ZpZS5QcmljZSwgbW92aWUuUXVhbnRpdHldKTtcbiAgICAgICAgICAgIGlmKHJlc3VsdDEuYWZmZWN0ZWRSb3dzICE9IDEpXG4gICAgICAgICAgICAgICBjYWxsYmFjaygtMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBtb3ZpZUlkID0gcmVzdWx0MS5pbnNlcnRJZDtcbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vIERvIGEgY2FsbGJhY2sgdG8gcmV0dXJuIHRoZSByZXN1bHRzXG4gICAgICAgICAgICBjYWxsYmFjayhtb3ZpZUlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ1JVRCBtZXRob2QgdG8gdXBkYXRlIGFuIE1vdmllLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBtb3ZpZSBNb3ZpZSB0byB1cGRhdGUuXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uIHdpdGggbnVtYmVyIG9mIHJvd3MgdXBkYXRlZC4gIFxuICAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGUobW92aWU6TW92aWUsIGNhbGxiYWNrOiBhbnkpXG4gICAge1xuICAgICAgICAgLy8gR2V0IHBvb2xlZCBkYXRhYmFzZSBjb25uZWN0aW9uIGFuZCBydW4gcXVlcmllcyAgIFxuICAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjphbnkpXG4gICAgICAgICB7XG4gICAgICAgICAgICAgLy8gUmVsZWFzZSBjb25uZWN0aW9uIGluIHRoZSBwb29sXG4gICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gXG4gICAgICAgICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgYW4gZXJyb3JcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiBcbiAgICAgICAgICAgICAvLyBVc2UgUHJvbWlzZnkgVXRpbCB0byBtYWtlIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCB1cGRhdGUgTW92aWVcbiAgICAgICAgICAgICBsZXQgY2hhbmdlcyA9IDA7XG4gICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpO1xuICAgICAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdVUERBVEUgTU9WSUVTIFNFVCBUSVRMRT0/LCBHRU5SRT0/LCBQUklDRT0/LCBRVUFOVElUWT0/IFdIRVJFIElEPT8nLCBbbW92aWUuVGl0bGUsIG1vdmllLkdlbnJlLCBtb3ZpZS5QcmljZSwgbW92aWUuUXVhbnRpdHksIG1vdmllLklkXSk7XG4gICAgICAgICAgICBpZihyZXN1bHQxLmNoYW5nZWRSb3dzICE9IDApXG4gICAgICAgICAgICAgICAgKytjaGFuZ2VzO1xuIFxuICAgICAgICAgICAgLy8gRG8gYSBjYWxsYmFjayB0byByZXR1cm4gdGhlIHJlc3VsdHNcbiAgICAgICAgICAgIGNhbGxiYWNrKGNoYW5nZXMpO1xuICAgICAgICAgfSk7XG4gICAgIH1cblxuICAgICAvKipcbiAgICAgKiBDUlVEIG1ldGhvZCB0byBkZWxldGUgYW4gTW92aWUuXG4gICAgICogXG4gICAgICogQHBhcmFtIG1vdmllSWQgTW92aWUgSUQgdG8gZGVsZXRlLlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbiB3aXRoIG51bWJlciBvZiByb3dzIGRlbGV0ZWQuICBcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBkZWxldGUobW92aWVJZDpudW1iZXIsIGNhbGxiYWNrOiBhbnkpXG4gICAge1xuICAgICAgICAvLyBHZXQgcG9vbGVkIGRhdGFiYXNlIGNvbm5lY3Rpb24gYW5kIHJ1biBxdWVyaWVzICAgXG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uKGVycjphbnksIGNvbm5lY3Rpb246YW55KVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBSZWxlYXNlIGNvbm5lY3Rpb24gaW4gdGhlIHBvb2xcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuXG4gICAgICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBhbiBlcnJvclxuICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICAgICAgICAgIC8vIFVzZSBQcm9taXNmeSBVdGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHJ1biBxdWVyeSB0byBkZWxldGUgdGhlIE1vdmllXG4gICAgICAgICAgICBsZXQgY2hhbmdlcyA9IDA7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ0RFTEVURSBGUk9NIE1PVklFUyBXSEVSRSBJRD0/JywgW21vdmllSWRdKTtcbiAgICAgICAgICAgIGNoYW5nZXMgPSBjaGFuZ2VzICsgcmVzdWx0MS5hZmZlY3RlZFJvd3M7XG5cbiAgICAgICAgICAgIC8vIERvIGEgY2FsbGJhY2sgdG8gcmV0dXJuIHRoZSByZXN1bHRzXG4gICAgICAgICAgICBjYWxsYmFjayhjaGFuZ2VzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8qICoqKioqKioqKioqKioqKiogUHJpdmF0ZSBIZWxwZXIgTWV0aG9kcyAqKioqKioqKioqKioqKioqICovXG5cbiAgICAvKipcbiAgICAgKiBQcml2YXRlIGhlbHBlciBtZXRob2QgdG8gaW5pdGlhbGllIGEgRGF0YWJhc2UgQ29ubmVjdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdERiQ29ubmVjdGlvbigpOmFueVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG15c3FsLmNyZWF0ZVBvb2woe2hvc3Q6IHRoaXMuaG9zdCwgcG9ydDogdGhpcy5wb3J0LCB1c2VyOiB0aGlzLnVzZXJuYW1lLCBwYXNzd29yZDogdGhpcy5wYXNzd29yZCwgZGF0YWJhc2U6IHRoaXMuc2NoZW1hLCBjb25uZWN0aW9uTGltaXQ6IDEwfSk7XG4gICAgfVxufVxuIl19