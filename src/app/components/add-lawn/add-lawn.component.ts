import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Lawn } from 'src/app/models/lawn';
import { LawnService } from 'src/app/services/lawn.service';


@Component({
  selector: 'app-add-lawn',
  templateUrl: './add-lawn.component.html',
  styleUrls: ['./add-lawn.component.css']
})
export class AddLawnComponent implements OnInit {

  @Output() addLawn: EventEmitter<Lawn> = new EventEmitter<Lawn>();
  private newLawn:Lawn;

  constructor(private lawnService:LawnService) { }

  ngOnInit() {
    this.newLawn = {
      _id: '',
      title: '',
      address: '',
      size: 0,
      application: []
    };
  }

  public onSubmit(){
    this.lawnService.addLawn(this.newLawn).subscribe (res => {
      this.addLawn.emit(res);
    });
  }

}
