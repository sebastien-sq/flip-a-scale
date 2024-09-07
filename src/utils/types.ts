export interface scaleData {
  name: string;
  accidental: string;
  scales: Scale[];
}
export interface Scale {
  id: number;
  name: string;
  notes: string[];
}

export interface RootNote {
  name: string;
  scales: Scale[];
  accidental: string;
}
export interface CardContainerProps {
  className: string;
  useFlats: boolean;
  useSharps: boolean;
}
export interface CardProps {
  imageUrl: string;
}
export interface FrontCardProps extends CardProps {
  rootNote: RootNote;
  scale: Scale;
}
export interface BackfrontCardProps extends CardProps {}

export interface StartingCardProps extends CardProps {
  style?: React.CSSProperties;
}

export interface CheckboxContainerProps {
  className: string;
  onAccidentalChange: (accidental: {
    useFlats: boolean;
    useSharps: boolean;
  }) => void;
}
export interface CheckboxProps {
  imageUrl: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export interface FlatCheckboxProps extends CheckboxProps {}

export interface SharpCheckboxProps extends CheckboxProps {}
