import { Component, type OnDestroy } from '@angular/core'
import { WeatherService } from '../../services/weather.service'
import { HttpClientModule } from '@angular/common/http'
import { Weather } from '../../../../models/interfaces/Weather'
import { Subject, takeUntil } from 'rxjs'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { WeatherCardComponent } from '../../components/weather-card/weather-card.component'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'

@Component({
  selector: 'app-weather-home',
  standalone: true,
  templateUrl: './weather-home.component.html',
  imports: [
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    WeatherCardComponent,
    MatSnackBarModule
  ],
  providers: [WeatherService]
})
export class WeatherHomeComponent implements OnDestroy {
  private readonly destroy$ = new Subject<void>()
  location = ''
  weatherData!: Weather
  searchIcon = faMagnifyingGlass

  constructor (
    private readonly weatherClient: WeatherService,
    private readonly snackBar: MatSnackBar) {}

  getWeather (location: string): void {
    if (location === '') {
      this.snackBar.open(
        'Insira uma localização para buscar informações. Exemplo: "São Paulo"', 'Fechar', {
          duration: 5000
        })
    }
    this.weatherClient.getWeather(location)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (response) => {
          this.weatherData = response
        },
        error: () => {
          this.snackBar.open(
            'Ocorreu um erro ao buscar dados do clima. Verifique a cidade escolhida ou tente novamente mais tarde.', 'Fechar', {
              duration: 5000
            })
        }
      })
  }

  onSubmit (): void {
    this.getWeather(this.location)
    this.location = ''
  }

  ngOnDestroy (): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
