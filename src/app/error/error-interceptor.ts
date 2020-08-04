import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from '../main/shared/components/error/error.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error.error.errors[0].message);
        let errorMessage = 'An unknown error occured';
        if (error.error.errors[0].message) {
          errorMessage = error.error.errors[0].message;
        }
        this.dialog.open(ErrorComponent, { data: { message: errorMessage } });
        return throwError(error);
      })
    );
  }
}
