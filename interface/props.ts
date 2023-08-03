import { TMainButtonAlias } from '@interface/alias';

export interface IAtomsButtonMainProps {
  type: TMainButtonAlias,
  text: string,
  attrDisabled: boolean,
  onClickFunction: () => void,
}

export interface IAtomsButtonSubProps {
  text: string,
}
