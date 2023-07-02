import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { ReadFileService } from '../Services/read-file.service';

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}

@Component({
  selector: 'app-book-list-component',
  templateUrl: './book-list-component.component.html',
  styleUrls: ['./book-list-component.component.css'],
})
export class BookListComponentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'author', 'description'];
  dataSource: MatTableDataSource<Book>;
  data: Book[] = [];
  pageIndex: number = 0;
  pageSize: number = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private router: Router, private http: HttpClient , private fs : ReadFileService) {
    this.dataSource = new MatTableDataSource<Book>([]);
  }

  ngOnInit() {
    this.fs.readJsonFile().then(data=> {
      this.data = data;
      const startIndex = this.pageIndex * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.dataSource.data = this.data.slice(startIndex, endIndex);
    }, err => {
        console.error('Error');
    });
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.dataSource.data = this.data.slice(startIndex, endIndex);
  }

  goToDetails(row: Book) {
    this.router.navigate(['/details', row.id]);
  }
}