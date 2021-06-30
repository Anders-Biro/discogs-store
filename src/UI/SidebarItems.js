import styles from './SidebarItems.module.css';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FormLabel } from '@material-ui/core';

const SidebarItems = ({ open, setFormat }) => {
    const handleFormatChange = (e) => {
        setFormat(e.target.value);
    }
    
    return (
        <nav className={styles['styled-menu'] } style={ open ? {transform: 'translateX(0)'} : {transform: 'translateX(-100%)'}}>
            <div>
                <span role="img" aria-label="format"></span>
                <FormControl>
                    <FormLabel component="label">Format</FormLabel>
                    <FormGroup>
                        <FormControlLabel 
                            control={<Checkbox color="primary" name="vinyl" value="Vinyl" onChange={e => handleFormatChange(e)} />}
                            label="Vinyl"
                        />
                        <FormControlLabel 
                            control={<Checkbox color="primary" name="CD" value="CD" onChange={e => handleFormatChange(e)} />}
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