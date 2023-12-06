import Container from '@mui/material/Box';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useForm } from '../../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import SelectInput from '../../selectinput/SelectInput';
import Datepicker from '../../datepicker/Datepicker';
import { ENDPOINTS } from '../../../constants/endpoints';
import useFetchApi from '../../../hooks/useFetchApi';


const SearchBar = () => {

  const navigate = useNavigate();
  const { data: categories } = useFetchApi(`${ENDPOINTS.CATEGORY}`);
  const { data: cities } = useFetchApi(`${ENDPOINTS.CITY}`);

  const { values, handleChange } = useForm({
    city: '',
    sport: '',
    date: '',
    time: ''
  });

  const handleClick = () => {
    const queryParams = `city=${encodeURIComponent(values.city.id)}&sport=${encodeURIComponent(values.sport.id)}&date=${encodeURIComponent(values.date)}&time=${encodeURIComponent(values.time)}`;
    navigate(`/club/search?${queryParams}`);
  };

  return (
    <Container

      sx={{
        color: '#1F2E7B',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        flexWrap: 'wrap',
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        paddingBottom:'50px',
      }}
    >
      <h2>Buscá un turno para tu cancha</h2>

      <Box sx={{
        color: '#1F2E7B',
        display: 'flex',
        backgroundColor: '#FFFFFF',
        flexWrap: 'wrap',
        gap: '20px',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: '20px'
      }}>
      <SelectInput handleChange={handleChange} options={cities} name="city" />
      <SelectInput handleChange={handleChange} options={categories} name="sport" />
      <Datepicker handleChange={handleChange} name="date" type="DatePicker" label='Elegí un día'/>
      <Datepicker handleChange={handleChange} name="time" type="DatePicker" label='Elegí un horario'/>

      <Button variant="contained" onClick={handleClick} type='submit'
        sx={{
          height: '3.6rem',
        }}
      >Buscar Turno</Button>
      </Box>
    </Container >

  );
}

export default SearchBar;
