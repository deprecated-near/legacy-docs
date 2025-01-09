import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Root({ children, location }) {
  const { siteConfig: {customFields} } = useDocusaurusContext();

  return (
    <>
      {children}
    </>
  );
}

const router = withRouter(Root);

export default router;
