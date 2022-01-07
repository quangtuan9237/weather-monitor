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

export function ErrorFallback() {
  const { t } = useTranslation();
  return (
    <RootStyle title={t('somethingWrongMessage')}>
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <motion.div variants={varBounceIn}>
              <Typography variant="h3" paragraph>
                {t('somethingWrongMessage')}
              </Typography>
            </motion.div>
            <motion.div variants={varBounceIn}>
              <Box
                component="img"
                src="/img/error.svg"
                sx={{ height: 260, mx: 'auto', my: { xs: 3, sm: 7 } }}
              />
            </motion.div>

            <Button
              size="large"
              variant="contained"
              sx={{ backgroundColor: '#00AB55', ':hover': { backgroundColor: '#00AB55' } }}
              onClick={() => window.location.assign(window.location.origin)}
            >
              {t('tryAgainButton')}
            </Button>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
