import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./layout/footer/footer.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import * as AOS from 'aos';
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { SkillsComponent } from "./pages/skills/skills.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ContactComponent } from "./pages/contact/contact.component";



@Component({
  selector: 'app-root',
  imports: [ HomeComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'satish-profile';
  ngOnInit() {
    AOS.init({
     // duration: 1000, // Optional: animation duration in ms
      //once: true      // Optional: whether animation should happen only once
    });
  }

}
