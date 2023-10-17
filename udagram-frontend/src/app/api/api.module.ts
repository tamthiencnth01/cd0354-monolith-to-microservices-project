import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


const components = [];
// ThienNLNT
@NgModule({
  imports: [
    HttpClientModule,
  ],
  declarations: components,
  exports: components,
  providers: []
})
export class ApiModule {}
