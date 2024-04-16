import {AfterViewInit, Component, ElementRef, VERSION, ViewChild} from '@angular/core';
import { Router } from '@angular/router'
import 'ids-enterprise-wc/enterprise-wc.js';

@Component({
  selector: 'app-ids-wc',
  templateUrl: './app.component.html',
  styleUrls: [ 
    './app.component.css'
  ]
})
export class AppComponent implements  AfterViewInit {
  @ViewChild('popupmenuEl', { read: ElementRef }) popupmenuEl;
  public name = 'Angular ' + VERSION.major;

  list1 = Array.from({ length: 25 }, (_, index) => "item" + (index + 1));

  list = Array.from({ length: 25 }, (_, index) => "item" + (index + 1)).map((v) => {
    return {
      id: v,
      text: v,
      click: () => this.itemClick()
    }
  });
  

  listObj = [{
    id: "edit-actions-group",
    select: "none",
    items: [...this.list]
  }]

  itemClick(): void {
    this.list = this.list.splice(10);
    this.listObj = [{
      id: "edit-actions-group",
      select: "none",
      items: [...this.list]
    }]

    setTimeout(() => {
      this.popupmenuEl.nativeElement.popup.align =  'top, left';
      this.popupmenuEl.nativeElement.data = this.listObj
    }, 500);
  }

  ngAfterViewInit(): void {
    this.popupmenuEl.nativeElement.popup.align =  'top, left';
    this.popupmenuEl.nativeElement.data = this.listObj;
    this.popupmenuEl.nativeElement.addEventListener('selected', (e: any) => {
      console.warn(`Item "${e.detail.elem.text}" was selected (id "${e.detail.elem.id}")`);
      this.itemClick()
    });
  }
}
