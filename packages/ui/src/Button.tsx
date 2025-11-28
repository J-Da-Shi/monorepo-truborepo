// packages/ui/src/Button.tsx
import React from 'react';

export const Button = ({ children }: { children: React.ReactNode }) => (
    <button style={{ padding: '8px 16px', background: '#007bff', color: 'white' }}>
      {children}
    </button>
  );