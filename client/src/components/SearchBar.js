import React from 'react';
import Input from './Input';
import Select from './Select';
import './SearchBar.css';

export default function SearchBar({ query, onQuery, region, onRegion }) {
    return (
        <div className='searchbar'>
            <div className='sb-left'>
                <Input id="q" placeholder="Search countries..." value={query} onChange={(e) => onQuery(e.target.value)} />
            </div>
            <div className='sb-right'>
                <Select id="region" value={region} onChange={(e) => onRegion(e.target.value)}>
                    <option value="all">All Regions</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </Select>
            </div>
        </div>
    )
}
