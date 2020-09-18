/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getShiftMaster = /* GraphQL */ `
  query GetShiftMaster($id: ID!) {
    getShiftMaster(id: $id) {
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
export const listShiftMasters = /* GraphQL */ `
  query ListShiftMasters(
    $filter: ModelShiftMasterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShiftMasters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
