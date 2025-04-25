import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule } from '@angular/material/card'
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-nav',
  imports: [RouterOutlet,RouterLink,MatSidenavModule, MatListModule, MatIconModule,MatCardModule ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
