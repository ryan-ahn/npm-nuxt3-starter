import { TMainButtonAlias, TSubButtonAlias } from './alias';

export interface IAtomsButtonMainProps {
  type: TMainButtonAlias;
  text: string;
  attrDisabled: boolean;
  onClickFunction: () => void;
}

export interface IAtomsButtonSubProps {
  type: TSubButtonAlias;
  text: string;
  attrDisabled: boolean;
  onClickFunction: () => void;
}
