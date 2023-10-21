import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'text'
  code = '';
  locked = false;

  constructor(private clipboardService: ClipboardService) { }

  copyCode(): void {
    this.clipboardService.copy(this.code);
  }

  saveCode(): void {
    localStorage.setItem('code', this.code);
  }

  toggleLock(): void {
    this.locked = !this.locked;
  }

  ngOnInit(): void {
    const savedCode = localStorage.getItem('code');
    if (savedCode) {
      this.code = savedCode;
    }
  }
}