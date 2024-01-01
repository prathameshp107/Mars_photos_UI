import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mars-photos',
  templateUrl: './mars-photos.component.html',
  styleUrls: ['./mars-photos.component.css']
})
export class MarsPhotosComponent implements OnInit {
  marsPhotos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchMarsPhotos(1000); // Set the desired sol value
  }

  fetchMarsPhotos(sol: number): void {
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=DEMO_KEY`;

    this.http.get(apiUrl).subscribe(
      (data: any) => {
        if (Array.isArray(data.photos)) {
          this.marsPhotos = data.photos;
        } else {
          this.marsPhotos = [data];
        }
      },
      (error) => {
        console.error('Error fetching Mars photos', error);
      }
    );
  }
}
