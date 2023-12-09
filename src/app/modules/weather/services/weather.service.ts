import { Injectable } from '@angular/core'
import { environment } from '../../../../environment/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly url = environment.openwheater.url
  private readonly apiKey = environment.openwheater.apiKey

  constructor (private readonly httpClient: HttpClient) { }

  getWeather (city: string): Observable<any> {
    return this.httpClient.get(`${this.url}?q=${city},BR&units=metric&mode=json&appid=${this.apiKey}`)
  }
}
