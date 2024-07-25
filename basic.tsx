import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const Input = styled('input')({
  display: 'none',
});

const ImagePlaceholder = ({ onClick, image, label }) => (
  <Box
    onClick={onClick}
    sx={{
      width: 120,
      height: 120,
      border: '1px dashed grey',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      backgroundColor: image ? 'transparent' : 'background.paper',
      backgroundImage: image ? `url(${URL.createObjectURL(image)})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
    }}
  >
    {!image && (
      <Box sx={{ textAlign: 'center' }}>
        <AddPhotoAlternateIcon />
        <Typography variant="caption">{label}</Typography>
      </Box>
    )}
  </Box>
);

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [images, setImages] = useState(Array(8).fill(null));
  const [sizeChart, setSizeChart] = useState(null);
  const [video, setVideo] = useState(null);
  const [sizeChartOption, setSizeChartOption] = useState('upload');

  const handleImageChange = (index) => (event) => {
    const newImages = [...images];
    newImages[index] = event.target.files[0];
    setImages(newImages);
  };

  const handlePlaceholderClick = (index) => {
    document.getElementById(`upload-image-${index}`).click();
  };

  const handleSizeChartChange = (event) => {
    setSizeChart(event.target.files[0]);
  };

  const handleVideoChange = (event) => {
    setVideo(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  const labels = [
    'Upload main image',
    'Primary',
    'Secondary',
    'Different angle',
    'In use',
    'Variations',
    'Styled scenes',
    'Close-up',
    'Size & Scale',
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Product Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {images.map((image, index) => (
                  <Grid item key={index}>
                    <Input
                      accept="image/*"
                      id={`upload-image-${index}`}
                      type="file"
                      onChange={handleImageChange(index)}
                    />
                    <ImagePlaceholder
                      onClick={() => handlePlaceholderClick(index)}
                      image={image}
                      label={labels[index]}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Size Chart
              </Typography>
              <RadioGroup
                row
                value={sizeChartOption}
                onChange={(e) => setSizeChartOption(e.target.value)}
              >
                <FormControlLabel
                  value="template"
                  control={<Radio />}
                  label="Use template"
                />
                <FormControlLabel
                  value="upload"
                  control={<Radio />}
                  label="Upload Image"
                />
              </RadioGroup>
              {sizeChartOption === 'upload' && (
                <>
                  <Input
                    accept="image/*"
                    id="upload-size-chart"
                    type="file"
                    onChange={handleSizeChartChange}
                  />
                  <ImagePlaceholder
                    onClick={() =>
                      document.getElementById('upload-size-chart').click()
                    }
                    image={sizeChart}
                    label="Size Chart"
                  />
                </>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Video
              </Typography>
              <Input
                accept="video/*"
                id="upload-video"
                type="file"
                onChange={handleVideoChange}
              />
              <Box
                onClick={() => document.getElementById('upload-video').click()}
                sx={{
                  width: 120,
                  height: 120,
                  border: '1px dashed grey',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  backgroundColor: video ? 'transparent' : 'background.paper',
                  backgroundImage: video
                    ? `url(${URL.createObjectURL(video)})`
                    : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {!video && (
                  <Box sx={{ textAlign: 'center' }}>
                    <VideoLibraryIcon />
                    <Typography variant="caption">Video</Typography>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProductForm;
