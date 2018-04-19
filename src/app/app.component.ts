import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
      this.articles = [
          new Article('This is a test post.', 'Waleed', 'Whoa. This is an Angular version of my Laravel Pocket imitation.', 33),
          new Article('Angular 5', 'angular', 'Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.', 37),
          new Article('Dogs or Cats?', 'Pets101', 'Which is better? Dogs are better in some ways. Cats are better in other ways.', 29)
      ];
  }
  addArticle(title: HTMLInputElement, author: HTMLInputElement, content: HTMLInputElement): boolean {
      console.log(`Adding article title: ${title.value}, author: ${author.value}, and content: ${content.value}`);
      this.articles.push(new Article(title.value, author.value, content.value, 0));
      title.value = '';
      author.value = '';
      content.value = '';
      return false;
  }

  sortedArticles(): Article[] {
      return this.articles.sort((a: Article, b: Article) => b.saves - a.saves);
  }
}
