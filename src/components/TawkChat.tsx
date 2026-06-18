import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export function TawkChat() {
  const propertyId = (import.meta as any).env?.VITE_TAWK_PROPERTY_ID || '6a2fc2638d5a241d4b8f27cb';
  const widgetId = (import.meta as any).env?.VITE_TAWK_WIDGET_ID || '1jr58ul6g';

  return (
    <TawkMessengerReact
      propertyId={propertyId}
      widgetId={widgetId}
    />
  );
}
