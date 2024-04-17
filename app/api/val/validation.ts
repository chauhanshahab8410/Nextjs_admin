import { exit } from "process";
import CryptoJS from 'crypto-js'

export const validateFormData = () => {
    const form = document.getElementById('form') as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (email === "jatin@gmail.com" && password === "1234") {
        if (confirm("Login Success! Click OK to proceed")) {
           
        } 
      }
    else {
        alert("Incorrect email or password");
        form.action = '';
      }
  };

  