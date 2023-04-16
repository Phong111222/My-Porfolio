import emailjs from '@emailjs/browser';

const ServiceId = 'service_7bfce5v';
const TemplateId = 'template_ye5x6qv';
const PublicKey = 'Vg7dKK2Va7TbvOS6r';

export interface EmailInfo extends Record<string, any> {
  from_name?: string;
  from_email?: string;
  to_name?: string;
  message?: string;
}

const sendEmail = async (emailInfo: EmailInfo) => {
  return emailjs.send(ServiceId, TemplateId, emailInfo, PublicKey);
};

export { sendEmail };
