import ReactGA from 'react-ga4';

export function initializeGA() {
  ReactGA.initialize(import.meta.env.VITE_GA4_MEASUREMENT_ID);
}

export const trackPageView = (path = window.location.pathname) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const trackAddToCart = (
  currency = 'USD',
  value = 13,
  items = [{ item_name: 'Flight reservation', price: 13, quantity: 1 }]
) => {
  ReactGA.event('add_to_cart', {
    currency,
    value,
    items,
  });
};

export const trackBeginCheckout = (
  currency = 'USD',
  value = 13,
  items = [{ item_name: 'Flight reservation', price: 13, quantity: 1 }]
) => {
  ReactGA.event('begin_checkout', {
    currency,
    value,
    items,
  });
};

export const trackPurchaseEvent = (
  currency = 'USD',
  value,
  transactionId,
  items = [{ item_name: 'Flight reservation', price: value, quantity: 1 }]
) => {
  ReactGA.event('purchase', {
    transaction_id: transactionId,
    value,
    currency,
    items,
  });
};
