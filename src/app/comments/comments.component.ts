import {Component, OnInit} from '@angular/core';
import {Comment} from "./model/comment";
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.less']
})
export class CommentsComponent implements OnInit {

  commentsCatalog: Comment[] = [];
  commentsView: Comment[] = []; //to jest wyświetlane na widoku
  start = 0;
  pageSize = 5;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.load_comments();
  }

  load_comments() {
    let url = 'https://jsonplaceholder.typicode.com/comments';
    this.http.get<Comment[]>(url).subscribe(comments => {
      //ta funkcja jest wykonana dopiero gdy zapytanie zwróci dane
      this.commentsCatalog = comments.slice(0, 21);
      this.selectView();
    });
  }

  previous() {
    this.start -= this.pageSize;
    if (this.start < 0) {
      this.start = 0;
    }
    this.selectView();
  }

  next() {
    //zadanie: zablokować tak, by nie dało się przewinąć poza ostatnią stronę komentarzy
    //długość tablicy:  this.commentsCatalog.length
    if (this.start + this.pageSize < this.commentsCatalog.length) {
      this.start += this.pageSize;
    }
    this.selectView();
  }

  private selectView() {
    this.commentsView = this.commentsCatalog.slice(this.start, this.start + this.pageSize);
  }

  max_page() {
    return Math.floor(this.commentsCatalog.length / this.pageSize + 1)
  }

  sort_by_name() {
    this.commentsCatalog.sort((a, b) => a.name.localeCompare(b.name));
    this.start = 0;
    this.selectView();
  }
}
