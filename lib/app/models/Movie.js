"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Movie = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Movie = /*#__PURE__*/function () {
  function Movie(id, title, genre, price, quantity) {
    (0, _classCallCheck2["default"])(this, Movie);
    (0, _defineProperty2["default"])(this, "id", -1);
    (0, _defineProperty2["default"])(this, "title", "");
    (0, _defineProperty2["default"])(this, "genre", "");
    (0, _defineProperty2["default"])(this, "price", -1);
    (0, _defineProperty2["default"])(this, "quantity", -1);
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.price = price;
    this.quantity = quantity;
  }
  /**
   * Getter $id
   * @return {number }
   */


  (0, _createClass2["default"])(Movie, [{
    key: "Id",
    get: function get() {
      return this.id;
    }
    /**
     * Getter $title
     * @return {string }
     */
    ,
    set:
    /**
     * Setter $id
     * @param {number } value
     */
    function set(value) {
      this.id = value;
    }
    /**
     * Setter $title
     * @param {string } value
     */

  }, {
    key: "Title",
    get: function get() {
      return this.title;
    }
    /**
     * Getter $genre
     * @return {string }
     */
    ,
    set: function set(value) {
      this.title = value;
    }
    /**
     * Setter $genre
     * @param {string } value
     */

  }, {
    key: "Genre",
    get: function get() {
      return this.genre;
    }
    /**
     * Getter $price
     * @return {number }
     */
    ,
    set: function set(value) {
      this.genre = value;
    }
    /**
     * Setter $price
     * @param {number } value
     */

  }, {
    key: "Price",
    get: function get() {
      return this.price;
    }
    /**
     * Getter $quantity
     * @return {number }
     */
    ,
    set: function set(value) {
      this.price = value;
    }
    /**
     * Setter $quantity
     * @param {number } value
     */

  }, {
    key: "Quantity",
    get: function get() {
      return this.quantity;
    },
    set: function set(value) {
      this.quantity = value;
    }
  }]);
  return Movie;
}();

exports.Movie = Movie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9tb2RlbHMvTW92aWUudHMiXSwibmFtZXMiOlsiTW92aWUiLCJpZCIsInRpdGxlIiwiZ2VucmUiLCJwcmljZSIsInF1YW50aXR5IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUFhQSxLO0FBUVgsaUJBQ0VDLEVBREYsRUFFRUMsS0FGRixFQUdFQyxLQUhGLEVBSUVDLEtBSkYsRUFLRUMsUUFMRixFQU1FO0FBQUE7QUFBQSxpREFabUIsQ0FBQyxDQVlwQjtBQUFBLG9EQVhzQixFQVd0QjtBQUFBLG9EQVZzQixFQVV0QjtBQUFBLG9EQVRzQixDQUFDLENBU3ZCO0FBQUEsdURBUnlCLENBQUMsQ0FRMUI7QUFDQSxTQUFLSixFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7Ozs7O1NBQ0UsZUFBaUI7QUFDZixhQUFPLEtBQUtKLEVBQVo7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUE2QkU7QUFDRjtBQUNBO0FBQ0E7QUFDRSxpQkFBT0ssS0FBUCxFQUFzQjtBQUNwQixXQUFLTCxFQUFMLEdBQVVLLEtBQVY7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7O1NBdkNFLGVBQW9CO0FBQ2xCLGFBQU8sS0FBS0osS0FBWjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7O1NBaUNFLGFBQVVJLEtBQVYsRUFBeUI7QUFDdkIsV0FBS0osS0FBTCxHQUFhSSxLQUFiO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7OztTQXZDRSxlQUFvQjtBQUNsQixhQUFPLEtBQUtILEtBQVo7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOztTQWlDRSxhQUFVRyxLQUFWLEVBQXlCO0FBQ3ZCLFdBQUtILEtBQUwsR0FBYUcsS0FBYjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7Ozs7U0F2Q0UsZUFBb0I7QUFDbEIsYUFBTyxLQUFLRixLQUFaO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7U0FpQ0UsYUFBVUUsS0FBVixFQUF5QjtBQUN2QixXQUFLRixLQUFMLEdBQWFFLEtBQWI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7O1NBdkNFLGVBQXVCO0FBQ3JCLGFBQU8sS0FBS0QsUUFBWjtBQUNELEs7U0FzQ0QsYUFBYUMsS0FBYixFQUE0QjtBQUMxQixXQUFLRCxRQUFMLEdBQWdCQyxLQUFoQjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1vdmllXG57XG4gIHByaXZhdGUgaWQ6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIHRpdGxlOiBzdHJpbmcgPSBcIlwiO1xuICBwcml2YXRlIGdlbnJlOiBzdHJpbmcgPSBcIlwiO1xuICBwcml2YXRlIHByaWNlOiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBxdWFudGl0eTogbnVtYmVyID0gLTE7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgaWQ6IG51bWJlcixcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGdlbnJlOiBzdHJpbmcsXG4gICAgcHJpY2U6IG51bWJlcixcbiAgICBxdWFudGl0eTogbnVtYmVyXG4gICkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5nZW5yZSA9IGdlbnJlO1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLnF1YW50aXR5ID0gcXVhbnRpdHk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyICRpZFxuICAgKiBAcmV0dXJuIHtudW1iZXIgfVxuICAgKi9cbiAgZ2V0IElkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuaWQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyICR0aXRsZVxuICAgKiBAcmV0dXJuIHtzdHJpbmcgfVxuICAgKi9cbiAgZ2V0IFRpdGxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyICRnZW5yZVxuICAgKiBAcmV0dXJuIHtzdHJpbmcgfVxuICAgKi9cbiAgZ2V0IEdlbnJlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2VucmU7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyICRwcmljZVxuICAgKiBAcmV0dXJuIHtudW1iZXIgfVxuICAgKi9cbiAgZ2V0IFByaWNlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucHJpY2U7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyICRxdWFudGl0eVxuICAgKiBAcmV0dXJuIHtudW1iZXIgfVxuICAgKi9cbiAgZ2V0IFF1YW50aXR5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucXVhbnRpdHk7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyICRpZFxuICAgKiBAcGFyYW0ge251bWJlciB9IHZhbHVlXG4gICAqL1xuICBzZXQgSWQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuaWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgJHRpdGxlXG4gICAqIEBwYXJhbSB7c3RyaW5nIH0gdmFsdWVcbiAgICovXG4gIHNldCBUaXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciAkZ2VucmVcbiAgICogQHBhcmFtIHtzdHJpbmcgfSB2YWx1ZVxuICAgKi9cbiAgc2V0IEdlbnJlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmdlbnJlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyICRwcmljZVxuICAgKiBAcGFyYW0ge251bWJlciB9IHZhbHVlXG4gICAqL1xuICBzZXQgUHJpY2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMucHJpY2UgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgJHF1YW50aXR5XG4gICAqIEBwYXJhbSB7bnVtYmVyIH0gdmFsdWVcbiAgICovXG4gIHNldCBRdWFudGl0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5xdWFudGl0eSA9IHZhbHVlO1xuICB9XG59XG4iXX0=