import { Component, Input } from '@angular/core'
import { Weather } from '../../../../models/interfaces/Weather'
import { CommonModule } from '@angular/common'
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './weather-card.component.html'
})
export class WeatherCardComponent {
  @Input() weatherDataInput!: Weather
  minTemperatureIcon = faTemperatureLow
  maxTemperatureIcon = faTemperatureHigh
  humidityIcon = faDroplet
  windIcon = faWind
}
