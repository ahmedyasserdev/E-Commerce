import { Box, Typography, useTheme, Link, Tooltip } from '@mui/material';

const Copyright = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                textAlign: 'center',
                backgroundColor: theme.palette.primaryColor.main,
                p: '30px',
                width: '100%',
                color: 'white',
                borderTopRightRadius : "30px",
                borderTopLeftRadius : "30px"
            }}
        >
            <Typography variant="p" fontSize={{ xs: '15px', sm: '20px' }}>
                تم تصميمه و تطويره بواسطة{' '}
                <Tooltip title="github profile" placement="top">
                    <Link
                        href="https://github.com/ahmedyasserdev"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            textDecoration: 'none',
                            color: theme.palette.warningColor.main,
                        }}
                    >
                        احمد ياسر
                    </Link>
                </Tooltip>
            </Typography>
        </Box>
    );
};

export default Copyright;