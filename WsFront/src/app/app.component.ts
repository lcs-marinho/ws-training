import { Component } from '@angular/core';
import { WebSocketService } from './web-socket-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'WsFront';

  messages: any[] = [];
  msg?: string;
  name?: string;
  private subscription: any;

  constructor(private wsService: WebSocketService){}

  ngOnInit() {
    this.subscription = this.wsService.connect().subscribe((message: any) => {
      // this.messages.push(JSON.parse(message.body).message);
      const msg = JSON.parse(message.body)
      
    });
  }

  public sendMessage(message: any): void {
    this.wsService.sendMessage({username: this.name, message: this.msg});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  show(){
    console.log(this.messages)
  }

}
