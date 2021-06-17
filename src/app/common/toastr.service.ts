import { Injectable } from "@angular/core";
import * as toastr from 'toastr';


@Injectable()
export class ToastrService{
  toastr: any
  success(message: string, title?: string){
    toastr.success(message, title)
  }
  warning(message: string, title?: string){
    toastr.warning(message, title)
  }
  info(message: string, title?: string){
    toastr.info(message, title)
  }
  error(message: string, title?: string){
    toastr.error(message, title)
  }


}
