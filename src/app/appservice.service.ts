import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {


   }

   getRestaurantData(pageno) {
     return this.http.get<any>(`https://safe-dusk-70776.herokuapp.com/api/european_restaurants/?pageNo={pageno}`);
   }


}
