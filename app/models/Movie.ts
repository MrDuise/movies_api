export class Movie
{
  private id: number = -1;
  private title: string = "";
  private genre: string = "";
  private price: number = -1;
  private quantity: number = -1;

  constructor(
    id: number,
    title: string,
    genre: string,
    price: number,
    quantity: number
  ) {
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
  get Id(): number {
    return this.id;
  }

  /**
   * Getter $title
   * @return {string }
   */
  get Title(): string {
    return this.title;
  }

  /**
   * Getter $genre
   * @return {string }
   */
  get Genre(): string {
    return this.genre;
  }

  /**
   * Getter $price
   * @return {number }
   */
  get Price(): number {
    return this.price;
  }

  /**
   * Getter $quantity
   * @return {number }
   */
  get Quantity(): number {
    return this.quantity;
  }

  /**
   * Setter $id
   * @param {number } value
   */
  set Id(value: number) {
    this.id = value;
  }

  /**
   * Setter $title
   * @param {string } value
   */
  set Title(value: string) {
    this.title = value;
  }

  /**
   * Setter $genre
   * @param {string } value
   */
  set Genre(value: string) {
    this.genre = value;
  }

  /**
   * Setter $price
   * @param {number } value
   */
  set Price(value: number) {
    this.price = value;
  }

  /**
   * Setter $quantity
   * @param {number } value
   */
  set Quantity(value: number) {
    this.quantity = value;
  }
}
