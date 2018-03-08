import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingPictureLoadingScreenComponent } from './processing-picture-loading-screen.component';

describe('ProcessingPictureLoadingScreenComponent', () => {
  let component: ProcessingPictureLoadingScreenComponent;
  let fixture: ComponentFixture<ProcessingPictureLoadingScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingPictureLoadingScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingPictureLoadingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
