import { Component, OnInit } from '@angular/core';
import { GolfCourseService} from "../GolfCourse/golf-course-service";
import { Subscription } from 'rxjs/subscription'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  golfObject;
  pageTitle = 'Welcome to your golf card!';
  description = 'Please choose a golf course to begin';
  cardCourses;
  selectedCourse;
  teeType;
  course: string;
  tee: string;
  courseRetrieved: Subscription;

  constructor(private golfData: GolfCourseService) {
  }

  ngOnInit() {
    this.golfObject = this.golfData.getGolfData().subscribe(data => {
      this.golfObject = data;
      this.cardCourses = this.golfObject.courses;
    });
    this.courseRetrieved = this.golfData.courseChanged.subscribe(result => {
      this.selectedCourse = result;
    });

  }

  setCourse(course) {
    console.log('setCourse');
    this.golfData.setCurrentCourse(course);
//    this.golfData.getCourse().subscribe(p => {
//      this.selectedCourse = p;
//      this.golfData.setCurrentCourse(p);
//      console.log(this.selectedCourse);
//    });
    this.pageTitle = course.name;

  }
  setTeeType(tee) {
    this.teeType = tee;
    this.golfData.getSetTeeType(tee);
  }
  onclick() {
    console.log(this.tee);
    console.log('onclick');
  }
}

