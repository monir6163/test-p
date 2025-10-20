'use client';

import { Toaster } from 'sonner';

const ToastProvider = () => {
  return (
    <div>
      <Toaster
        position="bottom-right"
        richColors
        duration={1500}
        expand={false}
      />
    </div>
  );
};

export default ToastProvider;
