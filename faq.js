(function () {
  // FAQ data
  const faqs = [
    {
      question: "¿Qué incluye el valor mensual de Kosmo?",
      answer:
        "La mensualidad de Kosmo es de $50,000 pesos e incluye acceso ilimitado para colaboradores, creación de mesas, ventas y domicilios sin restricciones, envío de informes de ventas e inventario cada vez que se realice el cierre de caja, soporte 24/7 y actualizaciones continuas del software.",
    },
    {
      question: "¿Qué sucede si no se realiza el pago mensual de Kosmo?",
      answer:
        "Si no se realiza el pago mensual de Kosmo, se suspenderá temporalmente el acceso al software hasta que se regularice el pago. Una vez se confirme el pago, se reactivará el acceso sin pérdida de datos.",
    },
    {
      question: "¿Cómo puedo instalar Kosmo en mi restaurante?",
      answer:
        "Nuestro equipo te ayudará con el paso a paso de la instalación del software.",
    },
    {
      question:
        "¿Es necesario instalar el software en los dispositivos de los meseros?",
      answer:
        "No es necesario. Con instalar Kosmo en el computador de tu caja y que tus meseros se conecten a tu red wifi, ya es suficiente.",
    },
    {
      question: "¿Kosmo es compatible con cualquier dispositivo?",
      answer:
        "Sí, Kosmo funciona en cualquier navegador y es compatible con dispositivos como computadoras, teléfonos y tabletas.",
    },
    {
      question:
        "¿Kosmo requiere una impresora específica para imprimir facturas y comandas?",
      answer:
        "No, Kosmo se adapta a cualquier impresora de POS, por lo que no es necesario tener una impresora específica.",
    },
    {
      question:
        "¿Es necesario contar con una buena conexión a internet para utilizar el software?",
      answer:
        "No, Kosmo funciona perfectamente de manera offline. Si no hay conexión a internet, podrás seguir operando sin problemas. Sin embargo, los informes de ventas e inventario se enviarán por correo electrónico tan pronto la conexión a internet se restablezca.",
    },
  ];

  // Inject CSS for the accordion and its animations
  const css = `
      .accordion {
        width: 100%;
        max-width: 600px;
        margin: 40px auto;
        font-family: -apple-system, BlinkMacSystemFont, Roboto, "Open Sans", "Helvetica Neue", sans-serif;
      }
      .accordion details {
        margin-bottom: 10px;
        border-bottom: 1px solid #ccc;
        padding: 15px 0;
        transition: background 0.3s ease;
      }
      .accordion summary {
        font-weight: bold;
        cursor: pointer;
        outline: none;
      }
      .accordion details[open] summary {
        color: #007BFF;
      }
      /* Animate the answer using max-height and opacity */
      .accordion details p {
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: max-height 0.4s ease, opacity 0.4s ease;
        margin: 0;
      }
      .accordion details[open] p {
        max-height: 500px;
        opacity: 1;
        margin-top: 10px;
      }
    `;
  const styleEl = document.createElement("style");
  styleEl.type = "text/css";
  styleEl.appendChild(document.createTextNode(css));
  document.head.appendChild(styleEl);

  // Function to build the accordion element with FAQ items
  function buildAccordion() {
    const container = document.createElement("div");
    container.className = "accordion";

    faqs.forEach((faq) => {
      const detail = document.createElement("details");

      const summary = document.createElement("summary");
      summary.textContent = faq.question;
      detail.appendChild(summary);

      const answer = document.createElement("p");
      answer.textContent = faq.answer;
      detail.appendChild(answer);

      container.appendChild(detail);
    });

    // Append the accordion to the document body (or adjust to a specific container if needed)
    document.body.appendChild(container);

    // Ensure only one accordion item is open at a time
    const detailsEls = container.querySelectorAll("details");
    detailsEls.forEach((detail) => {
      detail.addEventListener("toggle", function () {
        if (detail.open) {
          detailsEls.forEach((otherDetail) => {
            if (otherDetail !== detail && otherDetail.open) {
              otherDetail.removeAttribute("open");
            }
          });
        }
      });
    });
  }

  // Run buildAccordion after the DOM is fully loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildAccordion);
  } else {
    buildAccordion();
  }
})();
