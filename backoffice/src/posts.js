import * as React from "react";
import { Create, SimpleForm, TextInput, DateInput, required } from 'react-admin';

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" validate={[required()]} fullWidth />
            <TextInput source="teaser" multiLine={true} label="Short description" />
            <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
        </SimpleForm>
    </Create>
);
