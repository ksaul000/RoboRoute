import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseStorageRoomComponent } from './warehouse-storage-room.component';

describe('WarehouseStorageRoomComponent', () => {
  let component: WarehouseStorageRoomComponent;
  let fixture: ComponentFixture<WarehouseStorageRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseStorageRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseStorageRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
