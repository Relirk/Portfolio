import {
  PropsWithChildren,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from "react";

export type IButtonsPropType = PropsWithChildren<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

export type ILazyLoadImagePropType = {
  imgSrc: string;
  inView: boolean;
  index: number;
  projectTitle: string;
};
