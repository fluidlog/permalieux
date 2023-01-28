import React, { useState } from 'react';
import { useCreate } from 'react-admin';
import {
    AutocompleteInput,
    Create,
    ReferenceInput,
    SimpleForm,
    TextInput,
    useCreateSuggestionContext
} from 'react-admin';

import {
    Box,
    BoxProps,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
} from '@material-ui/core';

const CreateCategory = () => {
    const { filter, onCancel, onCreate } = useCreateSuggestionContext();
    const [value, setValue] = useState(filter || '');
    const [create] = useCreate('Category');

    console.log("CreateCategory/value=", value)
    console.log("CreateCategory/create=", create)
    const handleSubmit = (event) => {
      console.log("CreateCategory/event=", event)
        event.preventDefault();
        create(
            {
                payload: {
                    data: {
                        title: value,
                    },
                },
            },
            {
                onSuccess: ({ data }) => {
                  console.log("onSuccess/data=", data)
                    setValue('');
                    onCreate(data);
                },
            }
        );
    };

    return (
        <Dialog open onClose={onCancel}>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <TextField
                        label="New category name"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                        autoFocus
                    />
                </DialogContent>
                <DialogActions>
                    <Button type="submit">Save</Button>
                    <Button onClick={onCancel}>Cancel</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default CreateCategory;
