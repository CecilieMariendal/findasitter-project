import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitter-register',
  templateUrl: './sitter-register.component.html',
  styleUrls: ['./sitter-register.component.scss']
})
export class SitterRegisterComponent implements OnInit {
  isSitter = false;

  constructor() { }
  ngOnInit() {
  }

  selectSitter(): void{
    this.isSitter = true;
  }
  selectParent(): void{
    this.isSitter = false;
  }

}
