import { Component, type OnDestroy, type OnInit } from '@angular/core'
import { WeatherService } from '../../services/weather.service'
import { HttpClientModule } from '@angular/common/http'
import { Weather } from '../../../../models/interfaces/Weather'
import { Subject, takeUntil } from 'rxjs'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { WheatherCardComponent } from '../../components/weather-card/weather-card.component'

@Component({
  selector: 'app-wheater-home',
  standalone: true,
  templateUrl: './weather-home.component.html',
  imports: [
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    WheatherCardComponent
  ],
  providers: [WeatherService]
})
export class WheaterHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>()
  initialCity = 'Guaruja'
  weatherData!: Weather
  searchIcon = faMagnifyingGlass

  constructor (private readonly wheatherClient: WeatherService) {}

  ngOnInit (): void {
    this.getWheather(this.initialCity)
  }

  getWheather (cityName: string): void {
    this.wheatherClient.getWheather(cityName)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (response) => {
          this.weatherData = response
        },
        error: (error) => { console.log(error) }
      })
  }

  onSubmit (): void {
    this.getWheather(this.initialCity)
    this.initialCity = ''
  }

  ngOnDestroy (): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
