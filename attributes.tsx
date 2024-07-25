import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ProductAttributesForm() {
  const [attributes, setAttributes] = useState({
    season: 'All Seasons',
    quantityPerPack: '',
    careInstructions: ['Hand Wash'],
    clothingLength: '',
    occasion: '',
    sleeveLength: '',
    fit: '',
    pattern: '',
    sleeveType: '',
    style: '',
    embellishment: '',
    sizeType: '',
    design: '',
    feature: '',
    holiday: '',
    closureType: '',
    backStyle: '',
    collarType: '',
    neckline: '',
    material: '',
  });

  const handleAttributeChange = (event) => {
    const { name, value } = event.target;
    setAttributes({
      ...attributes,
      [name]: value,
    });
  };

  const handleCareInstructionsChange = (event) => {
    const { value } = event.target;
    setAttributes({
      ...attributes,
      careInstructions: value,
    });
  };

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={isMobile ? 12 : 4}>
          <FormControl fullWidth>
            <InputLabel>Season</InputLabel>
            <Select
              value={attributes.season}
              onChange={handleAttributeChange}
              name="season"
            >
              <MenuItem value="All Seasons">All Seasons</MenuItem>
              <MenuItem value="Summer">Summer</MenuItem>
              <MenuItem value="Winter">Winter</MenuItem>
              <MenuItem value="Spring">Spring</MenuItem>
              <MenuItem value="Autumn">Autumn</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label="Quantity per Pack"
            variant="outlined"
            fullWidth
            name="quantityPerPack"
            value={attributes.quantityPerPack}
            onChange={handleAttributeChange}
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <FormControl fullWidth>
            <InputLabel>Care Instructions</InputLabel>
            <Select
              multiple
              value={attributes.careInstructions}
              onChange={handleCareInstructionsChange}
              name="careInstructions"
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              <MenuItem value="Hand Wash">Hand Wash</MenuItem>
              <MenuItem value="Machine Wash">Machine Wash</MenuItem>
              <MenuItem value="Dry Clean">Dry Clean</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label="Clothing Length"
            variant="outlined"
            fullWidth
            name="clothingLength"
            value={attributes.clothingLength}
            onChange={handleAttributeChange}
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label="Occasion"
            variant="outlined"
            fullWidth
            name="occasion"
            value={attributes.occasion}
            onChange={handleAttributeChange}
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label="Sleeve Length"
            variant="outlined"
            fullWidth
            name="sleeveLength"
            value={attributes.sleeveLength}
            onChange={handleAttributeChange}
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label="Fit"
            variant="outlined"
            fullWidth
            name="fit"
            value={attributes.fit}
            onChange={handleAttributeChange}
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label="Pattern"
            variant="outlined"
            fullWidth
            name="pattern"
            value={attributes.pattern}
            onChange={handleAttributeChange}
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label="Sleeve Type"
            variant="outlined"
            fullWidth
            name="sleeveType"
            value={attributes.sleeveType}
            onChange={handleAttributeChange}
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label="Style"
            variant="outlined"
            fullWidth
            name="style"
            value={attributes.style}
            onChange={handleAttributeChange}
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label="Embellishment"
            variant="outlined"
            fullWidth
            name="embellishment"
            value={attributes.embellishment}
            onChange={handleAttributeChange}
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label="Size Type"
            variant="outlined"
            fullWidth
            name="sizeType"
            value={attributes.sizeType}
            onChange={handleAttributeChange}
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label="Design"
            variant="outlined"
            fullWidth
            name="design"
            value={attributes.design}
            onChange={handleAttributeChange}
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label="Feature"
            variant="outlined"
            fullWidth
            name="feature"
            value={attributes.feature}
            onChange={handleAttributeChange}
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label="Holiday"
            variant="outlined"
            fullWidth
            name="holiday"
            value={attributes.holiday}
            onChange={handleAttributeChange}
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label="Closure Type"
            variant="outlined"
            fullWidth
            name="closureType"
            value={attributes.closureType}
            onChange={handleAttributeChange}
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label="Back Style"
            variant="outlined"
            fullWidth
            name="backStyle"
            value={attributes.backStyle}
            onChange={handleAttributeChange}
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label="Collar Type"
            variant="outlined"
            fullWidth
            name="collarType"
            value={attributes.collarType}
            onChange={handleAttributeChange}
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label="Neckline"
            variant="outlined"
            fullWidth
            name="neckline"
            value={attributes.neckline}
            onChange={handleAttributeChange}
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label="Material"
            variant="outlined"
            fullWidth
            name="material"
            value={attributes.material}
            onChange={handleAttributeChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
