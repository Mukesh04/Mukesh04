import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { IProduct } from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductServices{
private productUrl = 'api/products/products.json'
  constructor(private http : HttpClient){}


  //3
  getProduct() : Observable<IProduct[]> {
                                                      //A
    return this.http.get<IProduct[]>(this.productUrl).pipe(
     //B
      tap(data => JSON.stringify(data)),
      catchError(this.handleError)
    );
  }
  // handleError(handleError: any): any {
  //   throw new Error("Method not implemented.");
  // }

  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error Occured: ${err.error.message}`
    }
    else{
      errorMessage= `Server returned code : ${err.status}, error message is : ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
