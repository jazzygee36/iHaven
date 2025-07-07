// paystack.ts
export const loadPaystackScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const existingScript = document.getElementById("paystack-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://js.paystack.co/v1/inline.js";
      script.id = "paystack-script";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    } else {
      resolve(true);
    }
  });
};
