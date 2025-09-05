import React, { useCallback } from "react";

const EditableField = ({
  tag: Tag = "div",
  field,
  value,
  onUpdate,
  onFocus,
  onBlur,
  editMode,
  className = "",
  children,
  ...props
}) => {
  const handleInput = useCallback(
    (e) => {
      onUpdate(field, e.target.innerHTML);
    },
    [field, onUpdate]
  );

  const handleFocus = useCallback(() => {
    onFocus && onFocus(field);
  }, [field, onFocus]);

  const handleBlur = useCallback(() => {
    onBlur && onBlur();
  }, [onBlur]);

  const handleKeyDown = useCallback(
    (e) => {
      // Prevent line breaks in single-line fields like titles
      if (Tag === "span" && e.key === "Enter") {
        e.preventDefault();
      }
    },
    [Tag]
  );

  return (
    <Tag
      className={`editable ${className}`}
      contentEditable={editMode}
      suppressContentEditableWarning={true}
      dangerouslySetInnerHTML={{ __html: value }}
      onInput={handleInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      data-field={field}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default EditableField;
