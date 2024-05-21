import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'webapp-az-204';
  listaNomes: {title: string; link: string}[] =[{ title: 'Explore the Docs', link: 'https://angular.dev' },
  { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
  { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
  { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
  { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },] ;
  constructor(private readonly http: HttpClient){}
  ngOnInit(): void {
    this.http.get<string[]>(environment.triggers.http).subscribe((val:string[]) => {
      this.listaNomes =  [...this.listaNomes, ...val.map(val=>({title: val as string, link: ''}))];
    });
      console.log(this.listaNomes);
  }
}
