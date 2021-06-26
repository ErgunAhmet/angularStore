
export class UserModel {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpiretionDate: Date
  ) {}

  get token() {
    if (this._tokenExpiretionDate || new Date() > this._tokenExpiretionDate) {
      return null;
    }
    return this._token;
  }
}
