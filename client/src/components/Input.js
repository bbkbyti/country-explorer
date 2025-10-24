import React from 'react';
import './Input.css';

export default function Input({ id, value, onChange, placeholder, type = "text", className = "", ...rest }) {
    return (
        <input id={id} className={`input ${className}`} value={value} onChange={onChange} placeholder={placeholder} type={type} {...rest} />
    )
}