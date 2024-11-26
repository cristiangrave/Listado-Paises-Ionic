import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  /*  variable donde vamos poder guardar nuestra data */
  constructor(private http: HttpClient) {}
  data: any;
  ngOnInit() {
    this.getAllCountries();
  }

  getAllCountries() {
    /* funcion para consultar nuestro api rest  */
    return this.http
      .get('https://restcountries.com/v3.1/all')
      .subscribe((res) => {
        /* guardamos la respuesta en nuestra variable data de tipo  */
        this.data = res;
        console.log(this.data);
      });
  }
}
