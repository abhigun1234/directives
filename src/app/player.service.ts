import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  msg
  constructor() { }
  getData() {
    return this.msg
  }
  setData(_msg: any) {
    this.msg = _msg
  }

}
