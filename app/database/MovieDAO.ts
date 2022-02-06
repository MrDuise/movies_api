/**
 * This is the MovieDAO file
 * It handles direct contact with the database
 * The functions methods in this class get used by the controllers in the movies.js file
 */



import { Movie } from "../models/Movie";
import * as mysql from "mysql";
import * as util from "util";

export class MovieDAO {
  private host: string = "";
  private port: number = 3306;
  private username: string = "";
  private password: string = "";
  private schema: string = "cst-391";
  private pool = this.initDbConnection();

  /**
   * Non-default constructor.
   *
   * @param host Database Hostname
   * @param username Database Username
   * @param password Database Password
   */
  constructor(host: string, port: number, username: string, password: string) {
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
  public findAllMovies(callback: any) {
    // List of Movies to return
    let movies: Movie[] = [];

    // Get pooled database connection and run queries
    this.pool.getConnection(async function (err: any, connection: any) {
      // Release connection in the pool
      connection.release();

      // Throw error if an error
      if (err) throw err;

      // Use Promisfy Util to make an async function and run query to get all Movies
      connection.query = util.promisify(connection.query);
      let result1 = await connection.query(
        "SELECT * FROM Movies ORDER BY QUANTITY"
      );
      for (let x = 0; x < result1.length; ++x) {
        // Add Movie to the list
        movies.push(
          new Movie(
            result1[x].id,
            result1[x].title,
            result1[x].genre,
            result1[x].price,
            result1[x].quantity
          )
        );
      }

      // Do a callback to return the results
      callback(movies);
    });
  }

  /**
   *
   *
   * @param {number} movieID
   * @param {*} callback
   * @memberof MovieDAO
   */
  public findSingleMovie(movieID: number, callback: any) {
    let movie: Movie;

    this.pool.getConnection(async function (err: any, connection: any) {
      // Release connection in the pool
      connection.release();

      // Throw error if an error
      if (err) throw err;

      // Use Promisfy Util to make an async function and run query to get all Movies
      connection.query = util.promisify(connection.query);
      let result1 = await connection.query("SELECT * FROM Movies WHERE id =?", [
        movieID,
      ]);
      for (let x = 0; x < result1.length; ++x) {
        // Add Movie to the list
        movie = new Movie(
          result1[x].id,
          result1[x].title,
          result1[x].genre,
          result1[x].price,
          result1[x].quantity
        );
      }

      // Do a callback to return the results
      callback(movie);
    });
  }

  /**
   * CRUD method to create an Movie.
   *
   * @param movie Movie to insert.
   * @param callback Callback function with -1 if an error else Movie ID created.
   */
  public create(movie: Movie, callback: any) {
    // Get pooled database connection and run queries
    this.pool.getConnection(async function (err: any, connection: any) {
      // Release connection in the pool
      connection.release();

      // Throw error if an error
      if (err) throw err;

      // Use Promisfy Util to make an async function and insert Movie
      connection.query = util.promisify(connection.query);
      let result1 = await connection.query(
        "INSERT INTO MOVIES (TITLE, GENRE, PRICE, QUANTITY) VALUES(?,?,?,?)",
        [movie.Title, movie.Genre, movie.Price, movie.Quantity]
      );
      if (result1.affectedRows != 1) callback(-1);

      let movieId = result1.insertId;

      // Do a callback to return the results
      callback(movieId);
    });
  }

  /**
   * CRUD method to update an Movie.
   *
   * @param movie Movie to update.
   * @param callback Callback function with number of rows updated.
   */
  public update(movie: Movie, callback: any) {
    // Get pooled database connection and run queries
    this.pool.getConnection(async function (err: any, connection: any) {
      // Release connection in the pool
      connection.release();

      // Throw error if an error
      if (err) throw err;

      // Use Promisfy Util to make an async function and update Movie
      let changes = 0;
      connection.query = util.promisify(connection.query);
      let result1 = await connection.query(
        "UPDATE MOVIES SET TITLE=?, GENRE=?, PRICE=?, QUANTITY=? WHERE ID=?",
        [movie.Title, movie.Genre, movie.Price, movie.Quantity, movie.Id]
      );
      if (result1.changedRows != 0) ++changes;

      // Do a callback to return the results
      callback(changes);
    });
  }

  /**
   * CRUD method to delete an Movie.
   *
   * @param movieId Movie ID to delete.
   * @param callback Callback function with number of rows deleted.
   * */
  public delete(movieId: number, callback: any) {
    // Get pooled database connection and run queries
    this.pool.getConnection(async function (err: any, connection: any) {
      // Release connection in the pool
      connection.release();

      // Throw error if an error
      if (err) throw err;

      // Use Promisfy Util to make an async function and run query to delete the Movie
      let changes = 0;
      connection.query = util.promisify(connection.query);
      let result1 = await connection.query("DELETE FROM MOVIES WHERE ID=?", [
        movieId,
      ]);
      changes = changes + result1.affectedRows;

      // Do a callback to return the results
      callback(changes);
    });
  }

  //* **************** Private Helper Methods **************** */

  /**
   * Private helper method to initialie a Database Connection
   */
  private initDbConnection(): any {
    return mysql.createPool({
      host: this.host,
      port: this.port,
      user: this.username,
      password: this.password,
      database: this.schema,
      connectionLimit: 10,
    });
  }
}
