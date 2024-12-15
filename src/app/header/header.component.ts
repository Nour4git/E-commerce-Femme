import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { RouterOutlet } from '@angular/router';
@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive, RouterOutlet],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone:true
})
export class HeaderComponent {

}