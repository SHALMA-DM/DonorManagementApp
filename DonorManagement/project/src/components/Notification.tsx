import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import type { NotificationProps } from '../types/notification';

const Notification: React.FC<NotificationProps> = ({ 
  message, 
  type = 'success', 
  onDismiss, 
  duration = 3000 
}) => {
  useEffect(() => {
    const timer = setTimeout(onDismiss, duration);
    return () => clearTimeout(timer);
  }, [duration, onDismiss]);

  const baseStyles = "fixed top-4 right-4 p-4 rounded-lg shadow-lg flex items-center space-x-2 animate-fade-in";
  const typeStyles = type === 'success' 
    ? "bg-green-50 text-green-800 border border-green-200" 
    : "bg-red-50 text-red-800 border border-red-200";

  return (
    <div className={`${baseStyles} ${typeStyles}`}>
      <span>{message}</span>
      <button
        onClick={onDismiss}
        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Dismiss notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Notification;