import React from 'react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'mr', name: 'मराठी' }
];

export default function LanguageSelector({ onSelect }) {
  return (
    <div>
      <h2>Select your language</h2>
      {languages.map(lang => (
        <button key={lang.code} onClick={() => onSelect(lang.code)}>
          {lang.name}
        </button>
      ))}
    </div>
  );
}