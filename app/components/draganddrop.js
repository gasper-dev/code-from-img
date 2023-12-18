"use client";

import { Dropzone, ExtFile } from "@files-ui/react";
export const DragAndDrop = ({ transformImageToCode }) => {
  const updateFiles = (files) => {
    const file = files[0].file;
    if (file != null) transformImageToCode(file);
  };

  return (
    <Dropzone
      header={false}
      footer={false}
      maxFiles={1}
      label="Arrastra aquí tu captura de pantalla"
      accept="image/*"
      onChange={updateFiles}
    />
  );
};
