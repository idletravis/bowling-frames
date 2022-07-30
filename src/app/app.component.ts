import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles.scss']
})
export class AppComponent {
  title: string = 'Bowling-JS';
  frameNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  columnNames: string[] = ['bowler', 'frame1', 'frame2', 'frame3', 'frame4', 'frame5', 'frame6', 'frame7', 'frame8', 'frame9', 'frame10',];
  bowlers: string[] = ['Travis'];
}
