import { Typography, Link } from '@mui/material';

function Copyright(props) {
    return (
      <Typography sx={{m: '1rem' }} variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://www.linkedin.com/in/profile-caio-c%C3%A9sar-link/">
          CaioCesarP
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

export default Copyright;