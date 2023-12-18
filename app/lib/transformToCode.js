import { STEPS } from "./Steps";
import streamReader from "./streamReader";

export default async function transformToCode(body, setStep, setResult) {
  setStep(STEPS.LOADING);
  const res = await fetch("/api/imge-to-code", {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok || res.body == null) {
    setStep(STEPS.ERROR);
    throw new Error("Error al generar el código");
  }

  setStep(STEPS.PREVIEW);

  // leer el streaming de datos
  for await (const chunk of streamReader(res)) {
    setResult((prev) => prev + chunk);
  }
}
