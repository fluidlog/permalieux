import React from 'react';
import Create from "../../../layout/create/Create";
import { LexiconImportForm, fetchWikidata } from '@semapps/interop-components';

const SkillCreate = (props) => (
  <Create {...props}>
    <LexiconImportForm
      fetchLexicon={fetchWikidata()}
      selectData={data => ({
        'pair:label': data.label,
        'pair:comment': data.summary,
        'http://www.w3.org/ns/prov#wasDerivedFrom': data.uri,
      })}
      redirect="show"
    />
  </Create>
);

export default SkillCreate;
