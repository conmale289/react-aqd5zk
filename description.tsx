import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MUIRichTextEditor from 'mui-rte';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const ProductDescriptionForm = () => {
  const save = (data) => {
    console.log(data);
  };
  const myTheme = createTheme({});
  return (
    <ThemeProvider theme={myTheme}>
      <MUIRichTextEditor
        label="Type something here..."
        onSave={save}
        inlineToolbar={true}
      />
    </ThemeProvider>
  );
};

export default ProductDescriptionForm;
