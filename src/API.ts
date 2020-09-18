/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateShiftMasterInput = {
  id?: string | null,
  shiftName: string,
  shiftStartTime: string,
  shiftEndTime: string,
  breakName: string,
  breakStartTime: string,
  breakEndTime: string,
  status: string,
};

export type ModelShiftMasterConditionInput = {
  shiftName?: ModelStringInput | null,
  shiftStartTime?: ModelStringInput | null,
  shiftEndTime?: ModelStringInput | null,
  breakName?: ModelStringInput | null,
  breakStartTime?: ModelStringInput | null,
  breakEndTime?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelShiftMasterConditionInput | null > | null,
  or?: Array< ModelShiftMasterConditionInput | null > | null,
  not?: ModelShiftMasterConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateShiftMasterInput = {
  id: string,
  shiftName?: string | null,
  shiftStartTime?: string | null,
  shiftEndTime?: string | null,
  breakName?: string | null,
  breakStartTime?: string | null,
  breakEndTime?: string | null,
  status?: string | null,
};

export type DeleteShiftMasterInput = {
  id?: string | null,
};

export type ModelShiftMasterFilterInput = {
  id?: ModelIDInput | null,
  shiftName?: ModelStringInput | null,
  shiftStartTime?: ModelStringInput | null,
  shiftEndTime?: ModelStringInput | null,
  breakName?: ModelStringInput | null,
  breakStartTime?: ModelStringInput | null,
  breakEndTime?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelShiftMasterFilterInput | null > | null,
  or?: Array< ModelShiftMasterFilterInput | null > | null,
  not?: ModelShiftMasterFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateShiftMasterMutationVariables = {
  input: CreateShiftMasterInput,
  condition?: ModelShiftMasterConditionInput | null,
};

export type CreateShiftMasterMutation = {
  createShiftMaster:  {
    __typename: "ShiftMaster",
    id: string,
    shiftName: string,
    shiftStartTime: string,
    shiftEndTime: string,
    breakName: string,
    breakStartTime: string,
    breakEndTime: string,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateShiftMasterMutationVariables = {
  input: UpdateShiftMasterInput,
  condition?: ModelShiftMasterConditionInput | null,
};

export type UpdateShiftMasterMutation = {
  updateShiftMaster:  {
    __typename: "ShiftMaster",
    id: string,
    shiftName: string,
    shiftStartTime: string,
    shiftEndTime: string,
    breakName: string,
    breakStartTime: string,
    breakEndTime: string,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteShiftMasterMutationVariables = {
  input: DeleteShiftMasterInput,
  condition?: ModelShiftMasterConditionInput | null,
};

export type DeleteShiftMasterMutation = {
  deleteShiftMaster:  {
    __typename: "ShiftMaster",
    id: string,
    shiftName: string,
    shiftStartTime: string,
    shiftEndTime: string,
    breakName: string,
    breakStartTime: string,
    breakEndTime: string,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetShiftMasterQueryVariables = {
  id: string,
};

export type GetShiftMasterQuery = {
  getShiftMaster:  {
    __typename: "ShiftMaster",
    id: string,
    shiftName: string,
    shiftStartTime: string,
    shiftEndTime: string,
    breakName: string,
    breakStartTime: string,
    breakEndTime: string,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListShiftMastersQueryVariables = {
  filter?: ModelShiftMasterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShiftMastersQuery = {
  listShiftMasters:  {
    __typename: "ModelShiftMasterConnection",
    items:  Array< {
      __typename: "ShiftMaster",
      id: string,
      shiftName: string,
      shiftStartTime: string,
      shiftEndTime: string,
      breakName: string,
      breakStartTime: string,
      breakEndTime: string,
      status: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateShiftMasterSubscription = {
  onCreateShiftMaster:  {
    __typename: "ShiftMaster",
    id: string,
    shiftName: string,
    shiftStartTime: string,
    shiftEndTime: string,
    breakName: string,
    breakStartTime: string,
    breakEndTime: string,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateShiftMasterSubscription = {
  onUpdateShiftMaster:  {
    __typename: "ShiftMaster",
    id: string,
    shiftName: string,
    shiftStartTime: string,
    shiftEndTime: string,
    breakName: string,
    breakStartTime: string,
    breakEndTime: string,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteShiftMasterSubscription = {
  onDeleteShiftMaster:  {
    __typename: "ShiftMaster",
    id: string,
    shiftName: string,
    shiftStartTime: string,
    shiftEndTime: string,
    breakName: string,
    breakStartTime: string,
    breakEndTime: string,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
