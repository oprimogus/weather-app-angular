import { type Routes } from '@angular/router'
import { WheaterHomeComponent } from './modules/weather/pages/weather-home/weather-home.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'wheater',
    pathMatch: 'full'
  },
  {
    path: 'wheather',
    component: WheaterHomeComponent
  }
]
