import { EquipmentComponent } from "./equipment/equipment.component";
import { AddEquipmentComponent } from "./add-equipment/add-equipment.component";
import { EditEquipmentComponent } from "./edit-equipment/edit-equipment.component";
import { ViewEquipmentComponent } from "./view-equipment/view-equipment.component";
import { EquipmentInformationComponent } from "./add-equipment/equipment-information/equipment-information.component";
import { SpareInformationComponent } from "./add-equipment/spare-information/spare-information.component";
import { FileUploadComponent } from "./add-equipment/file-upload/file-upload.component";

export const components: any[] = [
    EquipmentComponent,
    AddEquipmentComponent,
    EditEquipmentComponent,
    ViewEquipmentComponent,
    EquipmentInformationComponent,
    SpareInformationComponent,
    FileUploadComponent,
];

export * from "./equipment/equipment.component";
export * from "./add-equipment/add-equipment.component";
export * from "./edit-equipment/edit-equipment.component";
export * from "./view-equipment/view-equipment.component";
export * from "./add-equipment/equipment-information/equipment-information.component";
export * from "./add-equipment/spare-information/spare-information.component";
export * from "./add-equipment/file-upload/file-upload.component";
