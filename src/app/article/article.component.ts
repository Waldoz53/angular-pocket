import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // @HostBinding('attr.class') cssClass = 'cards';
  @Input() article: Article;

  constructor() {
      // this.article = new Article(23, 'This is a test post.', 'Waleed', 'Whoa. This is an Angular version of my Laravel Pocket ripoff.');
  }

  saveArticle() {
      this.article.saveArticle();
      return false;
  }

  ngOnInit() {
  }

}
