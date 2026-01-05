import { useEffect } from 'react';
import { Container, TextField, InputAdornment, Typography, Box, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch, useAppSelector } from '../store/index'; 
import { fetchArticles } from '../store/articlesSlice';
import { useArticleSearch } from '../hooks/useArticleSearch';
import { ArticleCard } from '../components/ArticleCard';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.articles);
  const { filterKeyword, setFilterKeyword, filteredArticles } = useArticleSearch(items);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArticles());
    }
  }, [dispatch, status]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Filter by keywords
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          value={filterKeyword}
          onChange={(e) => setFilterKeyword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: { boxShadow: 1, backgroundColor: 'white' }
          }}
        />
      </Box>

      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
        Results: {filteredArticles.length}
      </Typography>
      
      <Divider sx={{ mb: 4 }} />

      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, 
          gap: 4 
        }}
      >
        {filteredArticles.map((article) => (
          <Box key={article.id} sx={{ height: '100%' }}>
            <ArticleCard article={article} keyword={filterKeyword} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};