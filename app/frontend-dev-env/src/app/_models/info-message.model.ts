export class InfoMessage {

  title: string;
  text: string;
  severity: string;

  constructor(title: string, text: string, severity: string){
      this.title = title;
      this.text = text;
      this.severity = severity;
  }

}
