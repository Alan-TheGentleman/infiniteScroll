export interface FirstState {
  stateProperty: string | null;
}

export enum FirstStateProperties {
  STATEPROPERTY = 'stateProperty',
}

export enum StoreKeys {
  FIRSTSTATE = 'firstState',
  LAZYLOADEDSTATE = 'lazyLoadedState',
} 
