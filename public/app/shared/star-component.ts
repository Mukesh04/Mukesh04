import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl:'./star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
  @Input() rating:number = 0;
  cropWidth:number =75;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void{
    this.cropWidth = this.rating * 75/5;
  }

  onClick(): void {
    this.ratingClicked.emit(`Star is clicked with the rating ${this.rating}`)
  }
}
