import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles.scss']
})
export class AppComponent {
  title: string = 'Bowling-JS';
  frameNumbers: number[] = Array(10).fill(0).map((val, index) => index + 1);
  columnNames: string[] = ['bowler', 'frame1', 'frame2', 'frame3', 'frame4', 'frame5', 'frame6', 'frame7', 'frame8', 'frame9', 'frame10', 'score'];
  bowlers: Bowler[] = [{name: 'Travis', score: 100}];

  constructor() {
    console.log(this.frameNumbers);
  }
}

interface Bowler {
  name: string,
  score?: number
}