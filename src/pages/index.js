import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title={`Home`}
      description="We're creating the best experience for you and your users from a simple VM to large networks providing services to thousands of users.">
        <main style={{ width: '100%', display: 'grid', placeItems: 'center', height: '50vh' }}>
          <div>
            <a href="/" style={{
              fontSize: '2rem',
            }}>Click here to go back to home.</a>
          </div>
        </main>
    </Layout>
  );
}
