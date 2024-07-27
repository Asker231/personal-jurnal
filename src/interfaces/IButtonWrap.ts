import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonWrap extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode
}