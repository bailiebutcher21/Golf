import {Component, OnInit, OnDestroy} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {GolfCourseService} from "../GolfCourse/golf-course-service";
import {Subscription} from 'rxjs/';

@Component({
  selector: 'app-table',
  templateUrl: './golf-card.component.html',
  styleUrls: ['./golf-card.component.css']
})
export class GolfCardComponent implements OnInit, OnDestroy {
  displayedColumns: string [] = [];
  dataSource = new MatTableDataSource<any>(SCORECARD_DATA);
  eighteenHoles = false;
  course;
  courseReceived: Subscription;
  columnTitles: any[] = [];

  constructor(public GolfData: GolfCourseService) {
  }

  ngOnInit() {
    console.log('ngOnInit');
//    this.course = this.GolfData.getCourse();
    this.courseReceived = this.GolfData.courseChanged.subscribe(result => {
      console.log(result);
      this.course = result;
      this.populateData();
    });
    console.log(this.GolfData.courseData);
    if (this.GolfData.courseData) {
      this.course = this.GolfData.courseData;
      this.populateData();
    }
  }
  ngOnDestroy() {
    this.courseReceived.unsubscribe();
  }
  populateData() {
    console.log('populateData');
    console.log(this.course);
    this.displayedColumns.push('player');
    const holes = this.course.course.holes;
    let hole;
    for (let i = 1; i <= holes.length; i++) {
      //    const name1 = 'Hole: ' + `${i + 1}`;
      this.displayedColumns.push(i.toString());
      hole = holes[i - 1];
      const tee_box = hole.tee_boxes.find(b => b.tee_type === this.GolfData.teeType);
      this.columnTitles.push(
        {
          hole: hole.hole_num,
          par: tee_box.par,
          hcp: tee_box.hcp,
          yards: tee_box.yards,
          name: this.displayedColumns[i]
        }
      );
      console.log(this.columnTitles[i - 1]);
    }
    if (this.eighteenHoles) {
      this.displayedColumns.push('out');
      for (let i = 10; i < 19; i++ ) {
//        const name2 = 'Hole: ' + `${i + 1}`;
        this.displayedColumns.push(i.toString());
      }
      this.displayedColumns.push('in');
    }
    this.displayedColumns.push('total');
    console.log(this.displayedColumns);
  }
}

const SCORECARD_DATA: any[] = [
  {
    'player': '',
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0,
    'total': 0
  }
];
