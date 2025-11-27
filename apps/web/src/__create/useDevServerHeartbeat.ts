'use client';

import { useEffect } from 'react';

export function useDevServerHeartbeat() {
  useEffect(() => {
    let active = true;
    const ping = () => {
      if (!active) return;
      fetch('/', { method: 'GET' }).catch(() => {});
    };
    // Periodic ping every 3 minutes
    const interval = setInterval(ping, 60_000 * 3);
    // Also ping on basic user actions
    const onAction = () => ping();
    window.addEventListener('mousemove', onAction);
    window.addEventListener('keydown', onAction);
    window.addEventListener('click', onAction);
    return () => {
      active = false;
      clearInterval(interval);
      window.removeEventListener('mousemove', onAction);
      window.removeEventListener('keydown', onAction);
      window.removeEventListener('click', onAction);
    };
  }, []);
}
