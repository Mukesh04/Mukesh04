import { NgModule } from '@angular/core';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductListComponent } from './product-list-component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpaces } from '../shared/convert-to-spaces';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,ProductDetailComponent, ConvertToSpaces
  ],
  imports: [
     RouterModule.forChild([
      {path:'products', component:ProductListComponent},
      {
        path:'products/:id',
        canActivate: [ProductDetailGuard],
         component:ProductDetailComponent
        }
    ]), SharedModule
  ]
})
export class ProductModule { }
