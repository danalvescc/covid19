import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api'

const CountryPicker = (props) => {
    const [fetchedCountries, setFechedCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setFechedCountries(await fetchCountries())
        }

        fetchAPI()
    }, [setFechedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => props.handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )

}

export default CountryPicker;