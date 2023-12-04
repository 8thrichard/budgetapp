import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        padding: '20px',
      }}
    >
      <h1 style={{ color: 'white' }}> Ops Page not Found</h1>
      <p>Uh oh! Lost in the internet jungle, but hey, we found "YOU!"</p>
      <img
        src="https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif"
        alt="Lost in the Jungle"
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
      />
      <p style={{ color: 'white', fontSize: '16px' }}>
        You are in the right place to get financially smart. <br /> Click{' '}
        <a
          href="/home"
          style={{
            color: '#00bfff', 
            textDecoration: 'underline', 
            fontWeight: 'bold', 
          }}
        >
          here
        </a>{' '}
        to learn more
      </p>
    </div>
  );
};

export default NotFound;
