import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lawn } from 'src/app/models/lawn';
import { LawnService } from 'src/app/services/lawn.service';

@Component({
  selector: 'app-edit-lawn',
  templateUrl: './edit-lawn.component.html',
  styleUrls: ['./edit-lawn.component.css']
})
export class EditLawnComponent implements OnInit {

  @Input() lawn:Lawn;
  @Output() updateLawn: EventEmitter<Lawn> = new EventEmitter<Lawn>();

  constructor(private lawnService: LawnService) { }

  ngOnInit() {
  }

  public onSubmit(){
    this.lawnService.updateLawn(this.lawn).subscribe ( res => {
       this.updateLawn.emit(res);
    });
  }

}
