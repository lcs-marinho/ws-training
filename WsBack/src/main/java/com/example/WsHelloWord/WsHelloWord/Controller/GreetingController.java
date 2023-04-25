package com.example.WsHelloWord.WsHelloWord.Controller;

import com.example.WsHelloWord.WsHelloWord.Model.Chat;
import com.example.WsHelloWord.WsHelloWord.Model.Greeting;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;


@Controller
public class GreetingController {

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public Chat chatController(Chat chat) {
        System.out.println(chat);
        return chat;
    }
}
