package com.example.WsHelloWord.WsHelloWord.Controller;

import com.example.WsHelloWord.WsHelloWord.Model.Greeting;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class GreetingController {

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public Greeting greeting(Greeting greeting) throws Exception {
        Thread.sleep(1000);
        Greeting greeting1 = greeting;
        System.out.println(greeting1);
        return greeting1;
    }
}
