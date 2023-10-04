import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isNavbarOpened: boolean = false;
  @ViewChild('navbar') navbar!: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  openNavbar(event: any) {
    if (this.navbar.nativeElement.getAttribute('data-visible') === 'false') {
      this.isNavbarOpened = true;
      this.navbar.nativeElement.setAttribute('data-visible', 'true');
    } else if (
      this.navbar.nativeElement.getAttribute('data-visible') === 'true'
    ) {
      this.isNavbarOpened = false;
      this.navbar.nativeElement.setAttribute('data-visible', 'false');
    }
  }
}
