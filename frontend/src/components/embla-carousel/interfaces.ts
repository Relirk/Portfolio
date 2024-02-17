import {
  PropsWithChildren,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from "react";

export type IButtonsPropType = PropsWithChildren<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

export type ILazyLoadImagePropType = {
  project: any;
  inView: boolean;
  index: number;
};
