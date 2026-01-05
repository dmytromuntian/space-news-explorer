import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Paper, Typography, Box, CircularProgress } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppSelector, useAppDispatch } from '../store/index';
import { fetchArticles } from '../store/articlesSlice';

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.articles);

  const article = items.find((item) => item.id === Number(id));

  useEffect(() => {
    if (!article && status === 'idle') {
      dispatch(fetchArticles());
    }
  }, [article, status, dispatch]);

  if (status === 'loading') {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!article) {
    return (
      <Container sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h5">Article not found</Typography>
        <Link to="/" style={{ textDecoration: 'none', display: 'block', marginTop: '20px' }}>
          Go Home
        </Link>
      </Container>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', pb: 8, backgroundColor: '#fff' }}>
      
      <Box 
        sx={{
          height: '245px',
          width: '100%',
          backgroundImage: `url(${article.image_url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      />

      <Container 
        maxWidth={false} 
        sx={{ 
          maxWidth: '1440px',
          position: 'relative', 
          mt: -10, 
          zIndex: 2,
          px: { xs: 2, md: 4 } 
        }}
      >
        <Paper 
          elevation={3} 
          sx={{ 
            p: { xs: 3, md: 6 },
            borderRadius: '5px',
            border: '1px solid #EAEAEA',
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)' 
          }}
        >
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              textAlign: 'center', 
              mb: 4, 
              fontWeight: 400,
              fontSize: '24px',
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
            {article.title}
          </Typography>
          
          <Typography 
            variant="body1" 
            component="div"
            sx={{ 
              lineHeight: 1.6, 
              color: '#000',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '18px'
            }}
          >
            <p style={{ marginTop: 0 }}>
              {article.summary}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>

            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
          </Typography>
        </Paper>

        <Box sx={{ mt: 4, ml: 4 }}>
           <Link to="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
               <ArrowBackIcon sx={{ fontSize: '14px', mr: 1, color: '#363636' }} />
               <Typography 
                 component="span" 
                 sx={{ fontWeight: 700, color: '#363636', fontSize: '16px' }}
               >
                 Back to homepage
               </Typography>
            </Box>
           </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default ArticlePage;