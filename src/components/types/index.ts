import {  ReactNode } from 'react';
export type CardType = {
    children:ReactNode, className?: string, rest?:any
};

export interface InputType extends React.InputHTMLAttributes<HTMLInputElement>{
  className?:string;
  children?:ReactNode;
  startIcon? : ReactNode,
  inputClassName?: string;
  id?:string,
  type?:string
}

