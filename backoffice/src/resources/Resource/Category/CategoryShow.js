import React from 'react';
import { Grid } from '@material-ui/core';
import { MainList } from '../../../common/list';
import { MarkdownField } from '@semapps/markdown-components';
import CategoryTitle from './CategoryTitle';
import Show from "../../../layout/show/Show";


// Par rapport aux thèmes, nous n'affichons pas les liens vers les acteurs à droite
// <Grid item xs={12} sm={3}>
//   <SideList>
//     <ReferenceArrayField reference="Agent" source="pair:topicOf">
//       <SingleFieldList linkType="show">
//         <ChipField source="pair:label" color="secondary" />
//       </SingleFieldList>
//     </ReferenceArrayField>
//   </SideList>
// </Grid>

const CategoryShow = props => {
  console.log("category props",props)
  return(
  <Show title={<CategoryTitle />} {...props}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={9}>
        <MainList>
          <MarkdownField source="pair:description" />
        </MainList>
      </Grid>
    </Grid>
  </Show>
)};

export default CategoryShow;
