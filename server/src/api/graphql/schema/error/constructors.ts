export class EmailError extends Error {
  mustIncludeCharacters: string;
  constructor(mustIncludeCharacters: string) {
    super(`Invalid email format, emails must include ${mustIncludeCharacters}`);
    this.mustIncludeCharacters = mustIncludeCharacters;
    this.name = 'EmailError';
  }
}