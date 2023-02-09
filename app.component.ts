import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rebecka';

  isDrawerOpen: boolean = false;
  drawerToggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.isDrawerOpen = false;    
  }

  toggleNavDrawer(isDrawerOpen: boolean) {
    this.isDrawerOpen = isDrawerOpen;
    this.drawerToggleEmitter.emit(this.isDrawerOpen);
  }

  
}
