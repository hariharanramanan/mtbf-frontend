/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createShiftMaster = /* GraphQL */ `
  mutation CreateShiftMaster(
    $input: CreateShiftMasterInput!
    $condition: ModelShiftMasterConditionInput
  ) {
    createShiftMaster(input: $input, condition: $condition) {
      id
      shiftName
      shiftStartTime
      shiftEndTime
      breakName
      breakStartTime
      breakEndTime
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateShiftMaster = /* GraphQL */ `
  mutation UpdateShiftMaster(
    $input: UpdateShiftMasterInput!
    $condition: ModelShiftMasterConditionInput
  ) {
    updateShiftMaster(input: $input, condition: $condition) {
      id
      shiftName
      shiftStartTime
      shiftEndTime
      breakName
      breakStartTime
      breakEndTime
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteShiftMaster = /* GraphQL */ `
  mutation DeleteShiftMaster(
    $input: DeleteShiftMasterInput!
    $condition: ModelShiftMasterConditionInput
  ) {
    deleteShiftMaster(input: $input, condition: $condition) {
      id
      shiftName
      shiftStartTime
      shiftEndTime
      breakName
      breakStartTime
      breakEndTime
      status
      createdAt
      updatedAt
    }
  }
`;
