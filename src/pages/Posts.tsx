import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Post from '../components/Post';
import { PostType } from '../util/types';
import { FormControl } from '@mui/joy';
import SearchBar from '../components/SearchBar';

type PostsProps = {
    posts: PostType[],
    heading: string,
};

export default function Posts({ posts, heading }: PostsProps) {

    return (
        <Box sx={{ flex: 1, width: '100%' }}>
            <Box
                sx={{
                    position: 'sticky',
                    top: { sm: -100, md: -110 },
                    bgcolor: 'background.body',
                    zIndex: 9995,
                }}
            >
                <Box sx={{ px: { xs: 2, md: 6 } }}>
                    <Typography component="h1" sx={{ mt: 1, mb: 2 }}>
                        {heading}
                    </Typography>
                </Box>
            </Box>
            <Stack
                spacing={4}
                sx={{
                    display: 'flex',
                    maxWidth: '800px',
                    mx: 'auto',
                    px: { xs: 2, md: 6 },
                    py: { xs: 2, md: 3 },
                }}
            >
                <FormControl id="free-solo-demo"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <SearchBar />
                </FormControl>
                {
                    !posts ?
                        <></> :
                        (
                            posts.map((post: PostType) => {
                                return <Post key={post.id} post={post} />;
                            }
                            )
                        )
                }
            </Stack>
        </Box>
    )
}