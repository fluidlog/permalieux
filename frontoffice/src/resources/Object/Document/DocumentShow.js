import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { MainList, Show } from '@semapps/archipelago-layout';
import { MarkdownField } from '@semapps/markdown-components';
import DocumentTitle from './DocumentTitle';
import useDoubleClick from "../../../layout/useDoubleClick";
import FloatingImageField from "../../../pair/FloatingImageField";

const DocumentShow = props => {
  const history = useHistory();
  const [refCallback] = useDoubleClick(() => history.push(props.basePath + '/' + encodeURIComponent(props.id) + '/edit'));
  return (
    <Show title={<DocumentTitle />} {...props}>
      <>
        <Box ref={refCallback}>
          <MainList>
            <FloatingImageField source="pair:image" />
            <Typography variant="h3" color="primary" component="h1" id="react-admin-title" />
            <MarkdownField source="pair:description" addLabel={false} />
          </MainList>
        </Box>
      </>
    </Show>
  );
}

export default DocumentShow;
