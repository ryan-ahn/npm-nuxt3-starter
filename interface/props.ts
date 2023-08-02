import { TMainButtonAlias } from './alias';

export interface IAtomsButtonMainProps {
  type: TMainButtonAlias;
  text: string;
  attrDisabled: boolean;
  onClickFunction: () => void;
}
