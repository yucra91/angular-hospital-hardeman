import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {

      titulo:'Dashboard!',
      icon:'mdi mdi-gauge',
      submenu:[
        {
          titulo:'main',
          url:'/'
        },
        {
          titulo:'ProgressBar',
          url:'progress'
        },
        {
          titulo:'Grafica',
          url:'grafica1'
        }
      ]
    }
  ]

  constructor() { }
}
