import React from 'react'
import { makeStyles } from '@mui/styles'
import Footer from '../../components/shared/Footer';
import NavBar from '../../components/shared/NavBar';

const useStyles = makeStyles({
    page: {
        background: 'black',
        marginTop: '4rem',
        paddingTop: '2rem',
        paddingBottom: '3rem',
    }
})
const Layout = ({ children }) => {
    const classes = useStyles();
    
    return (
        <div>
            <NavBar />
                <div className={classes.page}>
                    {children}
                </div>
            <Footer />
        </div>
    )
}

export default Layout
