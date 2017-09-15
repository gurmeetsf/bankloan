import {Component, ViewChild} from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('gridView') gridView;

  columnNum = 3;
  columnNumTab2 = 3;

  divSize = 900;
  fontSize = 36;

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(media: ObservableMedia) {
    media.asObservable()
      .subscribe((change: MediaChange) => {
        // alert(change.mqAlias);
        console.log(change.mqAlias);
        if (change.mqAlias === 'xs') {
          this.columnNumTab2 = 1;
        } else if (change.mqAlias === 'sm') {
          this.columnNumTab2 = 2;
        } else {
          this.columnNumTab2 = 3;
        }
      });
  }


  setColNum(div) {
    // console.log(div);
    if (this.gridView.nativeElement.offsetWidth < 400) {
      this.columnNum = 1;
      this.fontSize = 12;
    }
    if (this.gridView.nativeElement.offsetWidth >= 400
      && this.gridView.nativeElement.offsetWidth < 800) {
      this.columnNum = 2;
      this.fontSize = 24;
    }
    if (this.gridView.nativeElement.offsetWidth >= 800) {
      this.columnNum = 3;
      this.fontSize = 36;
    }
  }
}
