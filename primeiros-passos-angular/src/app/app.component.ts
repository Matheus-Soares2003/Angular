import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root', //seletor a ser chamado no html -> <app-root></app-root>
  standalone: true,
  imports: [RouterOutlet, HomeComponent], 
  templateUrl: './app.component.html', //template hmtl que o component vai renderizar
  styleUrl: './app.component.scss' //estilo que o component vai utilizar
})

export class AppComponent {
  title = 'primeiros-passos-angular';
}
