import React from 'react';
import { AutocompleteInput, Create, SimpleForm, TextInput } from 'react-admin';

const PostCreateCategorySimple = (props) => {
  console.log("PostCreateCategorySimple/props=",props)
    const categories = [
        { name: 'Tech', id: 'tech' },
        { name: 'Lifestyle', id: 'lifestyle' },
    ];

    return (
        <Create {...props}>
            <SimpleForm>
                <AutocompleteInput
                    onCreate={() => {
                        const newCategoryName = prompt('Enter a new category');
                        const newCategory = { id: newCategoryName.toLowerCase(), name: newCategoryName };
                        categories.push(newCategory);
                        return newCategory;
                    }}
                    source="category"
                    choices={categories}
                />
            </SimpleForm>
        </Create>
    );
}

export default PostCreateCategorySimple;
