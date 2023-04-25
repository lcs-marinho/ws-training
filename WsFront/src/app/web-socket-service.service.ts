import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import * as SockJS from 'sockjs-client';
import { Client, Message, Stomp } from '@stomp/stompjs';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private stompClient?: Client;
  private subject?: Observer<Message>;
  private urlMessage = '/topic/greetings';

  constructor() {
  }

  public connect(): Observable<Message> {
    return new Observable<Message>((observer) => {
      const socket = new SockJS('http://localhost:8080/ws');
      this.stompClient = new Client({
        webSocketFactory: () => socket
      });
      this.stompClient.activate();
      this.stompClient.onConnect = () => {
        this.stompClient?.subscribe('/topic/greetings', (message:any) => {
          observer.next(message);
        });
      };

    });
  }

  public sendMessage(message: any): void {
    this.stompClient?.publish({
      destination: '/app/hello',
      body: JSON.stringify(message)
    });
  }


}
