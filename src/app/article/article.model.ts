export class Article {
    saves: number;
    title: string;
    author: string;
    content: string;

    constructor(title: string, author: string, content: string, saves?: number) {
        this.saves = saves || 0;
        this.title = title;
        this.author = author;
        this.content = content;
    }

    saveArticle(): void {
        this.saves += 1;
    }
}
