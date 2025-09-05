import { useState, useCallback } from "react";

export const useEditMode = () => {
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = useCallback(() => {
    setEditMode((prev) => !prev);
  }, []);

  const enableEditMode = useCallback(() => {
    setEditMode(true);
  }, []);

  const disableEditMode = useCallback(() => {
    setEditMode(false);
  }, []);

  return {
    editMode,
    toggleEditMode,
    enableEditMode,
    disableEditMode,
  };
};
