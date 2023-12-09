import { type Routes } from '@angular/router'
import { WeatherHomeComponent } from './modules/weather/pages/weather-home/weather-home.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  },
  {
    path: 'weather',
    component: WeatherHomeComponent
  }
]
