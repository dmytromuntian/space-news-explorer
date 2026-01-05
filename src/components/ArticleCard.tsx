import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Box } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import type { IArticle } from '../types';
import { HighlightedText } from '../utils/highlighter';
import { format } from 'date-fns';

interface Props {
  article: IArticle;
  keyword: string; 
}

export const ArticleCard: React.FC<Props> = ({ article, keyword }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="217"
        image={article.image_url}
        alt={article.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', opacity: 0.6, mb: 2, fontSize: '0.875rem' }}>
          <CalendarTodayIcon sx={{ fontSize: 16, mr: 1 }} />
          {format(new Date(article.published_at), 'MMMM do, yyyy')}
        </Box>
        
        <Typography variant="h6" component="h2" gutterBottom>
          <HighlightedText text={article.title} highlight={keyword} />
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
           <HighlightedText 
             text={article.summary.length > 100 ? article.summary.slice(0, 100) + '...' : article.summary} 
             highlight={keyword} 
           />
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2 }}>
        <Button size="small" component={Link} to={`/article/${article.id}`} endIcon={<ArrowForwardIcon />}>
          Read more
        </Button>
      </CardActions>
    </Card>
  );
};