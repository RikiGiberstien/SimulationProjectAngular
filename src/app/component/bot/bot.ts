import { Component, OnInit } from '@angular/core';
import { createChat } from '@n8n/chat';
import '@n8n/chat/style.css';

@Component({
  selector: 'app-bot',
  imports: [],
  templateUrl: './bot.html',
  styleUrl: './bot.scss',
})
export class Bot implements OnInit {
 ngOnInit(): void {
    createChat({
     webhookUrl: "https://n8n.srv1251456.hstgr.cloud/webhook/f1ef39de-0857-4d1a-a764-5f3186998cf9/chat"

    });
  }
}
