import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarehouseStorageRoomComponent } from './warehouse-storage-room/warehouse-storage-room.component';

@NgModule({
  declarations: [
    AppComponent,
    WarehouseStorageRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
