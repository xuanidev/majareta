import styles from './TerminosCondiciones.module.css';
import { kodchasan } from "@/app/lib/fonts";

export default function TerminosCondicionesPage() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} ${kodchasan.className}`}>Términos y Condiciones</h1>
      <div className={styles.content}>
        <h2>1. Aceptación de los términos</h2>
        <p>Al acceder y utilizar este sitio web, usted acepta cumplir con estos términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios.</p>

        <h2>2. Productos y servicios</h2>
        <p>Ofrecemos productos NFC y servicios relacionados. Nos reservamos el derecho de modificar, discontinuar o agregar productos y servicios en cualquier momento.</p>

        <h2>3. Uso del producto</h2>
        <p>Nuestros productos NFC están diseñados para diversos usos, incluyendo enlaces, acciones personalizadas, tips y reviews. El usuario es responsable del contenido que decide compartir a través de nuestros productos.</p>

        <h2>4. Privacidad y seguridad</h2>
        <p>Respetamos su privacidad y protegemos sus datos personales. Para más información, consulte nuestra Política de Privacidad.</p>

        <h2>5. Propiedad intelectual</h2>
        <p>Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, imágenes y software, está protegido por derechos de autor y otras leyes de propiedad intelectual.</p>

        <h2>6. Limitación de responsabilidad</h2>
        <p>No nos hacemos responsables de cualquier daño directo, indirecto, incidental o consecuente que resulte del uso o la imposibilidad de usar nuestros productos o servicios.</p>

        <h2>7. Modificaciones de los términos</h2>
        <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.</p>

        <h2>8. Ley aplicable</h2>
        <p>Estos términos se regirán e interpretarán de acuerdo con las leyes de [tu país/región], sin tener en cuenta sus disposiciones sobre conflictos de leyes.</p>
      </div>
    </div>
  );
}
