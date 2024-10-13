import React from 'react';

interface EmailTemplateProps {
  nombre: string;
  email: string;
  mensaje: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ nombre, email, mensaje }) => (
  <div>
    <h1>Nuevo mensaje de contacto</h1>
    <p>{nombre} quiere contactar.</p>
    <p>Su mensaje es: {mensaje}</p>
    <p>Su email es: {email}</p>
  </div>
);

export default EmailTemplate;

