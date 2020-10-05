import React from 'react'
import { Button, Container, Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export default function Header() {
    const history = useHistory();
    const logout = () => {
        localStorage.removeItem('user');
        history.replace('/auth/login');
    }
    return (
        <Container maxWidth = "md">
            <Grid container>
                <Grid item>
                    <Button 
                        onClick = {() => history.replace("/")}>
                        Home
                    </Button>
                </Grid>

                <Grid item>
                    <Button 
                        onClick = {() => history.replace("/about-us")}>
                        About us
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick = {logout}>Logout</Button>
                </Grid>
            </Grid>
        </Container>
    )
}
