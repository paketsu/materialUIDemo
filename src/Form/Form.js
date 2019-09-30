import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import './Form.css';

const Form = (props)  => {
    return (
        <div className="formContainer">
            <form className="form">
                <FormLabel className="formTitle">
                    <Typography variant="h6">Jees! Haluan tilata karkkeja:</Typography></FormLabel>
                <TextField margin="normal" label="Etunimi" error variant="outlined"></TextField>
                <TextField margin="normal" label="Sukunimi" error variant="outlined"></TextField>

                <Typography variant= "subtitle1">Sukupuoli</Typography>
                    <RadioGroup>
                        <FormControlLabel value="female" control={<Radio/>} label="nainen" />
                        <FormControlLabel value="male" control={<Radio/>} label="mies" />
                    </RadioGroup>
                <TextField margin="normal" label="Sähköposti" type="email" required variant="outlined"></TextField>
                <TextField margin="normal" label="Puhelinnumero" type="phone" disabled variant="outlined"></TextField>
                <TextField margin="normal" label="Salasana" type="password" required variant="outlined"></TextField>
                    <FormGroup>
                    <Typography variant="subtitle1">Tilaan seuraavat karkit:</Typography>

                        <FormControlLabel 
                            control={<Checkbox color="primary"/>} 
                            value="first candy"
                            label="first candy">
                        </FormControlLabel>
                        <FormControlLabel 
                            control={<Checkbox color="primary"/>} 
                            value="second candy"
                            label="second candy">
                        </FormControlLabel>
                        <FormControlLabel 
                            control={<Checkbox color="primary"/>} 
                            value="third candy"
                            label="third candy">
                        </FormControlLabel>
                    </FormGroup>
                <Button variant="contained" color="primary">Submit</Button>
            </form>
        </div>
    )

}

export default Form