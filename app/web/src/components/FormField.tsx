import React from 'react'
import type { FormField as FormFieldType } from '@/types/sanity'

interface FormFieldProps {
  field?: FormFieldType
}

export default function FormField({ field }: FormFieldProps) {
  if (!field) return null

  if (field.input_type === 'checkbox') {
    return (
      <div className="form-group form-checkbox">
        <input
          type="checkbox"
          id={field.name}
          name={field.name}
          required={field.is_required}
        />
        {field.label && (
          <label htmlFor={field.name}>{field.label}</label>
        )}
      </div>
    )
  }

  if (field.input_type === 'select') {
    return (
      <div className="form-group">
        {field.label && (
          <label htmlFor={field.name}>{field.label}</label>
        )}
        <div className="form-select-wrap">
          <select
            id={field.name}
            name={field.name}
            required={field.is_required}
          >
            {field.default_value && (
              <option value="">{field.default_value}</option>
            )}
            {field.options?.map((option, option_idx) => (
              <option key={option_idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }

  if (field.input_type === 'textarea') {
    return (
      <div className="form-group">
        {field.label && (
          <label htmlFor={field.name}>{field.label}</label>
        )}
        <textarea
          name={field.name}
          id={field.name}
          rows={5}
          placeholder={field.default_value}
          required={field.is_required}
        />
        <span className="animate-border" aria-hidden="true" />
      </div>
    )
  }

  return (
    <div className="form-group">
      {field.label && (
        <label htmlFor={field.name}>{field.label}</label>
      )}
      <input
        type={field.input_type || 'text'}
        name={field.name}
        id={field.name}
        placeholder={field.default_value}
        required={field.is_required}
      />
      <span className="animate-border" aria-hidden="true" />
    </div>
  )
}
