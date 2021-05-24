export default class Message {
  test: string;

  constructor() {
    this.test = '123';
  }

  toString(): string {
    return this.test;
  }
}
