import { useState } from 'react';
import styles from './SidebarItems.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControl, FormLabel, FormGroup, FormControlLabel } from '@material-ui/core';

const SidebarItems = ({ open, setFormat }) => {
    const [vinylCheckbox, setVinylCheckbox] = useState(false);
    const [cdCheckbox, setCdCheckbox] = useState(false);

    const handleFormatChange = (e) => {
        console.log(e);
        if (e.target.value === 'Vinyl') {
            if (vinylCheckbox === true) {
                setVinylCheckbox(false);
                setCdCheckbox(false);
                setFormat('');
            } else {
                setVinylCheckbox(!vinylCheckbox);
                setCdCheckbox(false);
                setFormat(e.target.value);
            }
        } else if (e.target.value === 'CD') {
            if (cdCheckbox === true) {
                setVinylCheckbox(false);
                setCdCheckbox(false);
                setFormat('');
            } else {
                setCdCheckbox(!cdCheckbox);
                setVinylCheckbox(false);
                setFormat(e.target.value)
            }
        }
    }

    return (
        <nav className={styles['styled-menu']} style={open ? { transform: 'translateX(0)' } : { transform: 'translateX(-100%)' }}>
            <div>
                <span role="img" aria-label="format"></span>
                <FormControl>
                    <FormLabel component="label">Format</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={vinylCheckbox} color="primary" name="vinyl" value="Vinyl" onChange={e => handleFormatChange(e)} />}
                            label="Vinyl"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={cdCheckbox} color="primary" name="CD" value="CD" onChange={e => handleFormatChange(e)} />}
                            label="CD"
                        />
                    </FormGroup>
                </FormControl>
            </div>
            <div>
                <span role="img" aria-label="filter"></span>
                Filter
            </div>
        </nav>
    )
}

export default SidebarItems;