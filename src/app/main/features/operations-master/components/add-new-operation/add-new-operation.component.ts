import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-add-new-operation',
  templateUrl: './add-new-operation.component.html',
  styleUrls: ['./add-new-operation.component.scss']
})
export class AddNewOperationComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<AddNewOperationComponent>) { }

  close(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
  }

}
