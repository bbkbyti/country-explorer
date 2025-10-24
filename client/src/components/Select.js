import React from 'react';
import "./Select.css";

export default function Select({ id, value, onChange, children, className = "", ...rest }) {
    return (
        <select id={id} className={`select ${className}`} value={value} onChange={onChange}{...rest}>
            {children}
        </select>
    )
}
