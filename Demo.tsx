import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

const initialVariation = () => ({
  id: Date.now(),
  name: '',
  options: [{ id: Date.now(), value: '' }],
});

export default function ProductVariationsForm() {
  const [variations, setVariations] = useState([initialVariation()]);
  const [submittedVariations, setSubmittedVariations] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const optionRefs = useRef({});

  const handleVariationNameChange = (id, event) => {
    setVariations(
      variations.map((variation) =>
        variation.id === id
          ? { ...variation, name: event.target.value }
          : variation
      )
    );
  };

  const handleOptionChange = (variationId, optionId, event) => {
    setVariations(
      variations.map((variation) =>
        variation.id === variationId
          ? {
              ...variation,
              options: variation.options.map((option) =>
                option.id === optionId
                  ? { ...option, value: event.target.value }
                  : option
              ),
            }
          : variation
      )
    );
  };

  const handleAddOption = (variationId) => {
    const newOptionId = Date.now();
    setVariations(
      variations.map((variation) =>
        variation.id === variationId
          ? {
              ...variation,
              options: [...variation.options, { id: newOptionId, value: '' }],
            }
          : variation
      )
    );
    optionRefs.current[newOptionId] = React.createRef();
  };

  useEffect(() => {
    const lastOptionId =
      variations[0]?.options[variations[0]?.options.length - 1]?.id;
    if (lastOptionId && optionRefs.current[lastOptionId]) {
      optionRefs.current[lastOptionId].current.focus();
    }
  }, [variations[0]?.options]);

  const handleRemoveOption = (variationId, optionId) => {
    setVariations(
      variations.map((variation) =>
        variation.id === variationId
          ? {
              ...variation,
              options: variation.options.filter(
                (option) => option.id !== optionId
              ),
            }
          : variation
      )
    );
  };

  const handleAddVariation = () => {
    setVariations([initialVariation()]);
    setShowForm(true);
    setIsEditing(false);
    setEditId(null);
  };

  const handleRemoveVariation = (id) => {
    setVariations(variations.filter((variation) => variation.id !== id));
  };

  const handleSubmit = () => {
    if (isEditing) {
      setSubmittedVariations(
        submittedVariations.map((variation) =>
          variation.id === editId
            ? { ...variation, ...variations[0] }
            : variation
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      setSubmittedVariations([...submittedVariations, ...variations]);
    }
    setVariations([initialVariation()]);
    setShowForm(false);
  };

  const handleEdit = (id) => {
    const variationToEdit = submittedVariations.find(
      (variation) => variation.id === id
    );
    setVariations([variationToEdit]);
    setShowForm(true);
    setIsEditing(true);
    setEditId(id);
  };

  const handleKeyPress = (event, variationId) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddOption(variationId);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      {showForm &&
        variations.map((variation) => (
          <Box key={variation.id} mb={2} p={2} border={1} borderRadius={1}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Variation Name"
                  variant="outlined"
                  fullWidth
                  value={variation.name}
                  onChange={(event) =>
                    handleVariationNameChange(variation.id, event)
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                {variation.options.map((option) => (
                  <Box
                    key={option.id}
                    display="flex"
                    alignItems="center"
                    mb={1}
                  >
                    <TextField
                      label={`Option`}
                      variant="outlined"
                      fullWidth
                      value={option.value}
                      onChange={(event) =>
                        handleOptionChange(variation.id, option.id, event)
                      }
                      onKeyPress={(event) =>
                        handleKeyPress(event, variation.id)
                      }
                      inputRef={
                        optionRefs.current[option.id] ||
                        (optionRefs.current[option.id] = React.createRef())
                      }
                    />
                    <IconButton
                      aria-label="delete"
                      onClick={() =>
                        handleRemoveOption(variation.id, option.id)
                      }
                      disabled={variation.options.length === 1}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
                <Button onClick={() => handleAddOption(variation.id)}>
                  Add Option
                </Button>
              </Grid>
            </Grid>
          </Box>
        ))}
      <Box mt={2}>
        {!showForm && (
          <Button variant="contained" onClick={handleAddVariation}>
            Add Variation
          </Button>
        )}
      </Box>
      {showForm && (
        <Box mt={2}>
          <Button variant="contained" onClick={handleSubmit}>
            {isEditing ? 'Update' : 'Submit'}
          </Button>
        </Box>
      )}

      {submittedVariations.length > 0 && (
        <Box mt={4}>
          <h2>Submitted Variations</h2>
          {submittedVariations.map((variation) => (
            <Box key={variation.id} mb={2} p={2} border={1} borderRadius={1}>
              <Box display="flex" justifyContent="space-between">
                <h3>{variation.name}</h3>
                <Button variant="text" onClick={() => handleEdit(variation.id)}>
                  Edit
                </Button>
              </Box>
              <Box display="flex" flexWrap="wrap">
                {variation.options.map((option) => (
                  <Chip key={option.id} label={option.value} sx={{ m: 0.5 }} />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
