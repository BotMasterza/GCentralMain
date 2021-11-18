import * as React from 'react'
import { Container, Grid } from '@mui/material'
import { useHarmonyStyles } from './style'
import LeftHarmony from './LeftHarmony'
import MessageBox from './messageBox'

// interface IndexProps {

// }

const Index = () => {
  const classes = useHarmonyStyles()

  return (
    <Grid container className={classes.root}>
      <Grid item xs={3} className={classes.rightGrid}>
        <Container>
          <LeftHarmony />
        </Container>
      </Grid>
      <Grid item xs={6}>
        <Container>
          <MessageBox />
        </Container>
      </Grid>
      <Grid item xs={3} className={classes.leftGrid}>
        <Container>
          <p>three</p>
        </Container>
      </Grid>
    </Grid>
  )
}

export default Index
