import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  if (!message) return null;

  return (
    <div className="toast-container" role="status" aria-live="polite">
      <div className="toast">
        {type === 'success' ? (
          <CheckCircle2 size={18} color="var(--accent)" />
        ) : (
          <Info size={18} color="var(--warm)" />
        )}
        <span>{message}</span>
      </div>
    </div>
  );
}
