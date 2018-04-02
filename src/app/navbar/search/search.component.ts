import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() search:string
  @Output() onSend:EventEmitter<string> = new EventEmitter()

  options:string[] = []

  constructor() { }

  ngOnInit() {
      this.options = [
        'test'
      ]
  }

  send() {
    this.onSend.emit(this.search)
  }

}
