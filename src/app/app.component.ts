import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle(title: HTMLInputElement, author: HTMLInputElement, content: HTMLInputElement): boolean {
      console.log(`Adding article title: ${title.value}, author: ${author.value}, and content: ${content.value}`);
      return false;
  }
}
