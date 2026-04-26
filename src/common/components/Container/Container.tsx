import s from './Container.module.css';
import type {ReactNode} from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

export const Container = ({ children, className }: Props) => {
    return (
        <div className={`${s.container} ${className || ''}`}>
            {children}
        </div>
    );
};