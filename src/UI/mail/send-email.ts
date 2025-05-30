import { FormData } from "@/app/types/form";


export function sendEmail(data: FormData) {
  const apiEndpoint = '@/app/api/email/route.ts';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}