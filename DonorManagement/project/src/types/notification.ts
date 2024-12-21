export interface Notification {
  message: string;
  type: 'success' | 'error';
}

export interface NotificationProps extends Notification {
  onDismiss: () => void;
  duration?: number;
}