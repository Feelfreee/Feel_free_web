import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Post from '../../components/Post/Post'

let i=[1,2,3]
const Posts = () => {
    return (
        <div>
            
            <Container>
                <Grid item xs={12} style={{marginTop:'2rem'}}>
                    
                    {
                        i.map(j=>{
                            return(
                                <Post />
                            )
                        })
                    }
                    {/* <Post /> */}

                </Grid>
            </Container>

        </div>
    )
}

export default Posts
