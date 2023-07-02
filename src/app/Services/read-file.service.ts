import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReadFileService {

  constructor(private http: HttpClient) { }

  readJsonFile(): Promise<Book[]> {
    return new Promise<Book[]>((resolve, reject) => {
      this.http.get('./assets/books.json').subscribe(
        (data: any) => {
          resolve(data);
        },
        (error) => {
          console.error('Error occurred while reading JSON file:', error);
          reject(error);
        }
      );
    });
  }
}
