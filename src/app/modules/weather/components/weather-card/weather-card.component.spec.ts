import { ComponentFixture, TestBed } from '@angular/core/testing'

import { WheatherCardComponent } from './weather-card.component'

describe('WeatherCardComponent', () => {
  let component: WheatherCardComponent
  let fixture: ComponentFixture<WheatherCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WheatherCardComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(WheatherCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
