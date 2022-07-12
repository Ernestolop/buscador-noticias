import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNoticias from '../Hooks/useNoticias';
import Noticia from './Noticia';

const ListadoNoticias = () => {

    const {noticias, totalNoticias, handleChangePagina, pagina} = useNoticias();
    
  return (
    <>
        <Typography
        textAlign={'center'}
        marginY={5}
        variant='h3'
        component={'h2'}
        >
            Ultimas Noticias
        </Typography>
        <Grid container spacing={2}>
            {noticias.map(noticia => (
                <Noticia
                noticia={noticia}
                key={noticia.url}
                />
            ))}
        </Grid>
        <Stack spacing={2}
        justifyContent='center'
        alignItems='center'
        sx={{marginTop:5}}
        >
            <Pagination count={(totalNoticias/20).toFixed()} color="primary" onChange={handleChangePagina} page={pagina} />
        </Stack>
    </>
  )
}

export default ListadoNoticias