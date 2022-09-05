import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';

/**
 * @Decorator: Tất cả các thành phần trong angular đều viết dưới dạng class và được annotaion bằng decoration !
 * @Decorator là một hàm, nhận vào 'metadata': giúp cho Decorator biết được cần phải làm gì với class này
 */
@NgModule({
  declarations: [ // Nơi khai báo component, một component muốn hđ được thì cần khai báo trong 1 module nào đó !
    AppComponent, ContentComponent
  ],
  imports: [ // Nếu dùng các thành phần của module khác
    BrowserModule,
    // RouterModule
  ],
  providers: [], // Khai báo các service dùng trong module này
  bootstrap: [AppComponent]
})
export class AppModule { }
