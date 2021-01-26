import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebar: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  toggleSideBar() {
    this.toggleSidebar.emit();

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
