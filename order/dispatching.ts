export type DispatchingState =
  | undefined
  | 'idle'
  | 'matching'
  | 'unmatched'
  | 'no-match'
  | 'going-pickup'
  | 'arrived-pickup'
  | 'going-destination'
  | 'arrived-destination';

export interface OrderLocationEntry {
  createdOn: firebase.firestore.FieldValue;
  coordinates: firebase.firestore.GeoPoint;
  dispatchingState: DispatchingState;
}
