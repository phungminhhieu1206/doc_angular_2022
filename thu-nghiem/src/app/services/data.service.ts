import { Injectable } from '@angular/core';

/**
 * Injectable() liên quan đến khái niệm "dependency injection" trong design pattern
 * Mục đích: Hệ thống sẽ tạo ra 1 instance từ class ở dứoi, dùng chung cho các components
 */
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _textFromHello: string | undefined;

  get textFromHello(): string | undefined {
    return this._textFromHello;
  }

  setTextFromHello(text: string | undefined) {
    this._textFromHello = text;
  }
}
