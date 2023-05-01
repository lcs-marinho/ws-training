import { Component, HostBinding, HostListener } from '@angular/core';
import { WebSocketService } from './web-socket-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'WsFront';

  messages: any[] = [];
  msg?: string;
  name?: any = 'Qualquer nome';
  private subscription: any;

  constructor(private wsService: WebSocketService) {}

  ngOnInit() {
    this.subscription = this.wsService.connect().subscribe((message: any) => {
      this.messages.push(JSON.parse(message.body));
    });
  
    sessionStorage.setItem('username', this.name);
  }

  sendMessage(el: HTMLInputElement): void {
    el.value != ''
      ? this.wsService.sendMessage({ username: this.name, message: el.value })
      : '';
    el.value = '';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  show() {
    console.log(this.messages);
  }
}
