import { CardMedia, TextField, Select, MenuItem, InputLabel, FormControl, Slider, TableRow, TableContainer, TableBody, Table, TableCell, Paper, Chip, Button } from '@mui/material';
import * as React from 'react';
import { getCategories, getAppUser, getAuctionState, advancedSearch } from '../../../../database/Api';
import '../../../../css/gallery.css';

const Encherir = () => {
    const [prix, setPrix] = React.useState('');
    const location = useLocation();
    const data = location.state.id;
    console.log(id)
    const addPrix = (event) => {
        setPrix(event.target.value);
      };
      const bid = () => {
        bidid(localStorage.getItem('id'),data,prix)
      }
    return(
    <><TextField style={{ width: '100%' }} size='small' id="outlined-basic" label="Titre et description" variant="outlined" type="number" value={prix} onChange={addPrix}>

        </TextField><Button variant="contained" onClick={bid}>Encherir</Button></>
    )
}
export default Encherir