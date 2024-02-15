import { useRecoilState } from "recoil";

import { recoildFormValues } from "../store/atoms/values";

const Form = () => {
  const [formValues, setFormValues] = useRecoilState(recoildFormValues);

  function handleClick() {}

  function onChangeValues(val: any, objectKey: string) {
    setFormValues({ ...formValues, [objectKey]: val.target.value });
  }

  return (
    <form>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Account name
          </label>
          <input
            type="text"
            id="account_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
            placeholder="Account name"
            required
            onChange={(val) => onChangeValues(val, "accountName")}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Key
          </label>
          <input
            type="text"
            id="Key"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
            placeholder="Key"
            required
            onChange={(val) => onChangeValues(val, "key")}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Company
          </label>
          <input
            type="text"
            id="company"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
            placeholder="Flowbite"
            required
            onChange={(val) => onChangeValues(val, "company")}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
            placeholder="123-45-678"
            required
            onChange={(val) => onChangeValues(val, "phone")}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Website URL
          </label>
          <input
            type="url"
            id="website"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
            placeholder="flowbite.com"
            required
            onChange={(val) => onChangeValues(val, "websiteUrl")}
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
          placeholder="john.doe@company.com"
          required
          onChange={(val) => onChangeValues(val, "email")}
        />
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-rose-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-rose-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          I agree with the{" "}
          <a
            href="#"
            className="text-rose-600 hover:underline dark:text-rose-500"
          >
            terms and conditions
          </a>
          .
        </label>
      </div>
      <button
        onClick={handleClick}
        type="submit"
        className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
