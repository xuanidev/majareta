import styles from './PoliticaPrivacidad.module.css';
import { kodchasan } from "@/app/lib/fonts";

export default function PoliticaPrivacidadPage() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} ${kodchasan.className}`}>Política de Privacidad</h1>
      <div className={styles.content}>
        <h2>1. Recopilación de información</h2>
        <p>Recopilamos información personal cuando usted realiza una compra, se registra en nuestro sitio o participa en nuestras encuestas. Esta información puede incluir su nombre, dirección de correo electrónico, dirección postal y número de teléfono.</p>

        <h2>2. Uso de la información</h2>
        <p>Utilizamos la información recopilada para procesar pedidos, mejorar nuestros productos y servicios, y comunicarnos con usted sobre ofertas y actualizaciones.</p>

        <h2>3. Protección de la información</h2>
        <p>Implementamos una variedad de medidas de seguridad para mantener la seguridad de su información personal. Utilizamos encriptación de datos y protocolos seguros para proteger la información sensible transmitida en línea.</p>

        <h2>4. Divulgación a terceros</h2>
        <p>No vendemos, intercambiamos ni transferimos de ninguna otra manera su información personal identificable a terceros. Esto no incluye terceros de confianza que nos ayudan a operar nuestro sitio web o llevar a cabo nuestro negocio, siempre que dichas partes acuerden mantener esta información confidencial.</p>

        <h2>5. Cookies</h2>
        <p>Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Puede elegir que su computadora le advierta cada vez que se envía una cookie, o puede optar por desactivar todas las cookies. Esto se hace a través de la configuración de su navegador.</p>

        <h2>6. Consentimiento</h2>
        <p>Al utilizar nuestro sitio, usted consiente nuestra política de privacidad.</p>

        <h2>7. Cambios en la política de privacidad</h2>
        <p>Si decidimos cambiar nuestra política de privacidad, publicaremos esos cambios en esta página.</p>

        <h2>8. Contacto</h2>
        <p>Si tiene alguna pregunta sobre esta política de privacidad, puede contactarnos utilizando la información que se encuentra en nuestra página de contacto.</p>
      </div>
    </div>
  );
}
