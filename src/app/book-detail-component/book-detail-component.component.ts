import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReadFileService } from '../Services/read-file.service';

@Component({
  selector: 'app-book-detail-component',
  templateUrl: './book-detail-component.component.html',
  styleUrls: ['./book-detail-component.component.css']
})
export class BookDetailComponentComponent {
  bookId: any;
  book: any;
  data : any ;

  constructor(private route: ActivatedRoute ,private http: HttpClient,private fs : ReadFileService) { }

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id')?.toString?.();  
    
    this.fs.readJsonFile().then((data)=> {
      var _data = data;

        this.data = _data.filter((i: { id: number; }) => i.id == this.bookId  )[0];
    }, err => {
        console.error('Error');
    });
  }
}