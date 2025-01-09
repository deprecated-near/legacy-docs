import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
export default function NotFoundContent({ className }) {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--12">
          <Heading as="h1" className="hero__title text-center">
              📕 Oops! We Couldn't Find That Page
          </Heading>
        </div>
      </div>
    </main>
  );
}
