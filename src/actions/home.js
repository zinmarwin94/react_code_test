
import { SPACE_LIST } from "./actionTypes";

export async function setSpaceList (space_list) { 
  return {
    type: SPACE_LIST,
    space_list
  };
};