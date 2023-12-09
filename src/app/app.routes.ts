import { Routes } from '@angular/router';
import { WheaterHomeComponent } from './modules/pages/wheater-home/wheater-home.component';

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
];
