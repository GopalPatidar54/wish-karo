"use client";

import { type InputHTMLAttributes, useId } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export default function Input({
  label,
  error,
  hint,
  className = "",
  id: propId,
  ...props
}: InputProps) {
  const autoId = useId();
  const id = propId ?? autoId;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
        {props.required && (
          <span className="ml-1 text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        className={`
          w-full rounded-xl border border-gray-300 bg-white px-4 py-3
          text-gray-900 placeholder-gray-400 shadow-sm
          transition-all duration-200
          focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20
          dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500
          dark:focus:border-purple-400 dark:focus:ring-purple-400/20
          ${error ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : ""}
          ${className}
        `}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={
          error ? `${id}-error` : hint ? `${id}-hint` : undefined
        }
        {...props}
      />
      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-gray-500 dark:text-gray-400">
          {hint}
        </p>
      )}
      {error && (
        <p
          id={`${id}-error`}
          className="text-xs text-red-500 dark:text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

