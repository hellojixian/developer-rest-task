import { SHOW_DISTRIBUTION } from './../const';

export function showDistrubution(value){
  return{
    type: SHOW_DISTRIBUTION,
    payload: value
  };
}