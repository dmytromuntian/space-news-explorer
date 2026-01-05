import { Box } from '@mui/material';

interface HighlightedTextProps {
  text: string;
  highlight: string;
}

export const HighlightedText = ({ text, highlight }: HighlightedTextProps) => {
  if (!highlight.trim()) {
    return <>{text}</>;
  }

  const keywords = highlight.split(/\s+/).filter(word => word.length > 0);

  const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
  
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => 
        keywords.some(k => k.toLowerCase() === part.toLowerCase()) ? (
          <Box 
            key={index} 
            component="span" 
            sx={{ backgroundColor: '#FFF500' }} 
          >
            {part}
          </Box>
        ) : (
          part
        )
      )}
    </>
  );
};