import { ButtonGenereCode } from "./ButtonGenereCode";

export const Form = ({ transformUrlToCode }) => {
  const onSubmit = (evt) => {
    evt.preventDefault();
    const urlInput = document.getElementById("url");
    transformUrlToCode(urlInput.value);
  };

  return (
    <form className="w-full max-w-lg mx-auto mb-5" onSubmit={onSubmit}>
      <div className="mb-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          URL de la imagen
        </label>
        <input
          type="url"
          id="url"
          name="url"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="https://www.google.com/tu-imagen.jpg"
          required
        />
      </div>
      <ButtonGenereCode />
    </form>
  );
};
