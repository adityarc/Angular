import { Component } from '@angular/core'
import {} from './arc.component'

@Component ({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: [ 'app/appstyle.css'
        
    ]
})

export class AppComponent
{  
    name;
    games = ["Cricket", "Football", "Hockey", "Polo"];
    constructor()
    { this.name = "Aditya Roy";}
}
