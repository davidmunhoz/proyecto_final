
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function SuscribirseAlert() {


  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
    </Stack>
  );
}