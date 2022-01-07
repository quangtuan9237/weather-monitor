import { Box, Link, Card, Grid, Avatar, Typography, CardContent, Stack } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const CardMediaStyle = styled('div')({
  position: 'relative',
  paddingTop: 'calc(50%)',
});

const TitleStyle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

export function WeatherCard({ post }) {
  const { cover, title, localTime, currTemp, highTemp, lowTemp, weatherType, lon, lat } = post;

  const params = new URLSearchParams({
    lon,
    lat,
  });

  return (
    <Grid item xs={12} sm={12} md={6}>
      <Card sx={{ position: 'relative' }}>
        <CardMediaStyle
          sx={{
            '&:after': {
              top: 0,
              content: "''",
              width: '100%',
              height: '100%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            },
            // pt: {
            //   sm: 'calc(60%)',
            // },
          }}
        >
          <CoverImgStyle alt={title} src={cover} />
        </CardMediaStyle>

        <CardContent
          sx={{
            // pt: 4,
            top: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            fontSize: {
              xs: '15px',
              sm: '30px', // Phone
              md: '25px', // Tablet/Laptop
            },
          }}
        >
          <Grid container direction="column" justifyContent="space-between" sx={{ height: '100%' }}>
            <Grid container item alignItems="center">
              <Grid item xs={7}>
                <TitleStyle
                  to={`detail?${params.toString()}`}
                  variant="subtitle2"
                  underline="hover"
                  component={RouterLink}
                  sx={{
                    fontSize: '2em',
                    height: 'min-content',
                    color: 'common.white',
                  }}
                >
                  {title}
                </TitleStyle>
                <Typography
                  gutterBottom
                  variant="caption"
                  sx={{ color: 'common.white', display: 'block', fontSize: '1em' }}
                >
                  {localTime}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  sx={{
                    fontSize: '3em',
                    fontWeight: 100,
                    color: 'common.white',
                    textAlign: 'right',
                  }}
                >
                  {currTemp + '\u00b0'}
                </Typography>
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  variant="caption"
                  sx={{ color: 'common.white', display: 'block', fontSize: '1em' }}
                >
                  {weatherType}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  variant="caption"
                  noWrap
                  sx={{
                    color: 'common.white',
                    display: 'block',
                    fontSize: '1em',
                    textAlign: 'right',
                  }}
                >
                  H: {highTemp + '\u00b0'} L: {lowTemp + '\u00b0'}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
