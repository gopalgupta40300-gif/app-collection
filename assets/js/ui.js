export const ui = {
  toast: (message, type = 'info') => {
    const container = document.querySelector('[data-toast-root]') || document.body;
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.setAttribute('role', 'status');
    toast.textContent = message;
    container.appendChild(toast);
    window.setTimeout(() => toast.remove(), 2600);
  }
};

export function initToasts() {
  if (!document.querySelector('[data-toast-root]')) {
    const root = document.createElement('div');
    root.setAttribute('data-toast-root', 'true');
    root.setAttribute('aria-live', 'polite');
    root.setAttribute('aria-atomic', 'true');
    root.className = 'toast-root';
    document.body.appendChild(root);
  }
}

export default ui;
