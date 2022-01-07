import { styled, Box, Button, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

// material
// components
import { MotionContainer, varBounceIn } from '@/components/animate';
import Page from '@/components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(2),
}));

// ----------------------------------------------------------------------

export function RestrictedPage() {
  const { t } = useTranslation();
  return (
    <RootStyle title={t('restrictedMessage')}>
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <motion.div variants={varBounceIn}>
              <Typography variant="h3" paragraph>
                {t('restrictedMessage')}
              </Typography>
            </motion.div>

            {/* <Typography sx={{ color: 'text.secondary' }}>{t('maintenanciSubMessage')}</Typography> */}
            <motion.div variants={varBounceIn}>
              <Box
                component="img"
                src="/img/personalization.svg"
                sx={{ height: 260, mx: 'auto', my: { xs: 3, sm: 7 } }}
              />
            </motion.div>

            <Button to="/" size="large" variant="contained" component={RouterLink}>
              {t('goToHome')}
            </Button>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
