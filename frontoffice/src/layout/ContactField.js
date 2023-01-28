import React, { useState } from 'react';
import { useRecordContext, useGetIdentity } from 'react-admin';
import { Typography, Link } from "@material-ui/core";
import ContactDialog from './ContactDialog';

const ContactField = ({ source }) => {
  const [showDialog, setShowDialog] = useState(false);
  const record = useRecordContext();
  const { identity } = useGetIdentity();
  console.log('identity', identity);

  if (record) {
    return (
      <>
        <Link href="#" onClick={() => setShowDialog(true)}>
          <Typography component="span" variant="body2">
            Envoyer un email
          </Typography>
        </Link>
        <ContactDialog
          user={record}
          emailPredicate={source}
          open={showDialog}
          onClose={() => setShowDialog(false)}
          initialValues={{ name: identity?.fullName }}
        />
      </>
    );
  } else {
    return null;
  }
};

ContactField.defaultProps = {
  addLabel: true,
};

export default ContactField;
