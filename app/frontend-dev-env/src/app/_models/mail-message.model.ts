export class MailMessage {

  username: string
  piece: number;
  short_name: string;
  value: number;
  commodity: string;
  email: string;

  constructor(username: string, piece: number, short_name: string, value: number, commodity: string){
      this.username = username;
      this.piece = piece;
      this.short_name = short_name;
      this.value = value;
      this.commodity = commodity;
  }

}
