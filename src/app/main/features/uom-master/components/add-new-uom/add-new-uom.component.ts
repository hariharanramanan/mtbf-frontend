import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-add-new-uom',
  templateUrl: './add-new-uom.component.html',
  styleUrls: ['./add-new-uom.component.scss']
})
export class AddNewUomComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<AddNewUomComponent>) { }

  ngOnInit(): void {
  }

  close(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
