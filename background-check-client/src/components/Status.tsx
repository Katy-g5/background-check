import { DoneOutline, Clear } from '@mui/icons-material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export type StatusType = 'success' | 'error' | 'loading' | null;

export default function Status({status}: {status: StatusType}) {

    const renderStatus = () => {
        switch (status) {
            case 'success':
                return <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><DoneOutline /> Success!</Box>
            case 'error':
                return <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Clear /> Error.</Box>
            case 'loading':
                return <CircularProgress />
            default:
                return null
        }
    }

    return (
        renderStatus()
    )
}
