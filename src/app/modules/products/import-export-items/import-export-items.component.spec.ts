import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportExportItemsComponent } from './import-export-items.component';

describe('ImportExportItemsComponent', () => {
  let component: ImportExportItemsComponent;
  let fixture: ComponentFixture<ImportExportItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportExportItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportExportItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
