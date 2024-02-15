import { atom, selector } from "recoil";
import axios from "axios";

export const recoildFormValues = atom({
  key: "formValues",
  default: {
    accountName: "",
    key: "",
    company: "",
    phone: "",
    websiteUrl: "",
    email: "",
  },
});

export const submitForm = atom({
  key: "submitFormValues",
  default: selector({
    key: "receivedFormValues",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res?.data;
    },
  }),
});
