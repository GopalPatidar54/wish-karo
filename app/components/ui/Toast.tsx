"use client";

import { useEffect, useState, useCallback } from "react";

export type ToastType = "success" | "error" | "info";

interface ToastState {
  message: string;
  type: ToastType;
  id: number;
}

let toastId = 0;
const listeners: Set<(toast: ToastState) => void> = new Set();

/**
 * Imperative API: call `showToast("Copied!", "success")` from anywhere.
 */
export function showToast(message: string, type: ToastType = "success") {
  const toast: ToastState = { message, type, id: ++toastId };
  listeners.forEach((fn) => fn(toast));
}

const icons: Record<ToastType, string> = {
  success: "✅",
  error: "❌",
  info: "ℹ️",
};

const bgColors: Record<ToastType, string> = {
  success: "bg-green-600",
  error: "bg-red-600",
  info: "bg-blue-600",
};

export default function ToastContainer() {
  const [toasts, setToasts] = useState<(ToastState & { exiting: boolean })[]>(
    []
  );

  const addToast = useCallback((toast: ToastState) => {
    setToasts((prev) => [...prev, { ...toast, exiting: false }]);
    // Auto-dismiss after 3s
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === toast.id ? { ...t, exiting: true } : t))
      );
      // Remove from DOM after exit animation
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, 300);
    }, 3000);
  }, []);

  useEffect(() => {
    listeners.add(addToast);
    return () => {
      listeners.delete(addToast);
    };
  }, [addToast]);

  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-2"
      aria-live="polite"
      aria-label="Notifications"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            flex items-center gap-3 rounded-xl px-5 py-3 text-white shadow-xl
            ${bgColors[toast.type]}
            ${toast.exiting ? "animate-slide-out-right" : "animate-slide-in-right"}
          `}
          role="status"
        >
          <span aria-hidden="true">{icons[toast.type]}</span>
          <span className="text-sm font-medium">{toast.message}</span>
        </div>
      ))}
    </div>
  );
}

