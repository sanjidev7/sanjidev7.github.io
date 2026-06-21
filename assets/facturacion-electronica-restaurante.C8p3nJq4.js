import { v as createVNode, T as Fragment, _ as __astro_tag_component__ } from './astro/server.BcuEOnZl.js';
import 'clsx';

const frontmatter = {
  "title": "Facturación electrónica en restaurantes: normativa y POS tributario",
  "slug": "facturacion-electronica-restaurante",
  "category": "Gestión y Operaciones",
  "categorySlug": "gestion-y-operaciones",
  "description": "Entiende las reglas colombianas de facturación electrónica para restaurantes y cómo un POS tributario facilita su emisión válida ante la DIAN.",
  "author": "Daniel Mantilla",
  "date": "2026-06-04",
  "tags": ["facturación electrónica restaurante", "POS tributario", "DIAN", "gestión de restaurantes"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "resumen-ejecutivo",
    "text": "Resumen ejecutivo"
  }, {
    "depth": 2,
    "slug": "introducción",
    "text": "Introducción"
  }, {
    "depth": 2,
    "slug": "qué-es-la-facturación-electrónica-en-colombia",
    "text": "¿Qué es la facturación electrónica en Colombia?"
  }, {
    "depth": 2,
    "slug": "por-qué-es-importante-para-restaurantes",
    "text": "¿Por qué es importante para restaurantes?"
  }, {
    "depth": 2,
    "slug": "qué-es-un-pos-tributario-y-cómo-ayuda",
    "text": "¿Qué es un POS tributario y cómo ayuda?"
  }, {
    "depth": 2,
    "slug": "pasos-prácticos-para-implementar-facturación-electrónica-en-tu-restaurante",
    "text": "Pasos prácticos para implementar facturación electrónica en tu restaurante"
  }, {
    "depth": 2,
    "slug": "preguntas-frecuentes",
    "text": "Preguntas frecuentes"
  }, {
    "depth": 2,
    "slug": "conclusión-y-llamado-a-la-acción",
    "text": "Conclusión y llamado a la acción"
  }, {
    "depth": 2,
    "slug": "recursos-adicionales-y-siguientes-pasos",
    "text": "Recursos adicionales y siguientes pasos"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    circle: "circle",
    defs: "defs",
    div: "div",
    em: "em",
    feDropShadow: "feDropShadow",
    filter: "filter",
    foreignObject: "foreignObject",
    g: "g",
    h2: "h2",
    li: "li",
    marker: "marker",
    ol: "ol",
    p: "p",
    path: "path",
    polygon: "polygon",
    rect: "rect",
    span: "span",
    strong: "strong",
    style: "style",
    svg: "svg",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "resumen-ejecutivo",
      children: "Resumen ejecutivo"
    }), "\n", createVNode(_components.p, {
      children: ["La facturación electrónica es obligatoria para la mayoría de los restaurantes en Colombia, especialmente aquellos responsables del Impuesto Nacional al Consumo o del IVA. Este blog explica la normativa clave que marca la DIAN (reglas, fechas y obligaciones), destaca los beneficios fiscales y operativos para los restaurantes, y muestra cómo un ", createVNode(_components.strong, {
        children: "POS tributario"
      }), " simplifica el proceso al emitir facturas electrónicas automáticamente. Además, se ofrece una guía de pasos prácticos, preguntas frecuentes y se invita a conocer ", createVNode(_components.em, {
        children: "KosmoPOS"
      }), ", un sistema POS diseñado para cumplir con la normativa colombiana y facilitar la facturación electrónica en tu restaurante."]
    }), "\n", createVNode(_components.h2, {
      id: "introducción",
      children: "Introducción"
    }), "\n", createVNode(_components.p, {
      children: ["En la era digital, los restaurantes deben modernizar sus procesos administrativos. En Colombia, la factura electrónica sustituye a la factura en papel y tiene la misma validez legal. Esto significa que cada venta debe documentarse en un sistema autorizado por la DIAN. Conocer las reglas vigentes es clave para evitar sanciones y aprovechar las ventajas operativas. A continuación, revisamos qué exige la norma colombiana sobre facturación electrónica y cómo un ", createVNode(_components.strong, {
        children: "POS tributario"
      }), " puede ayudar a tu negocio a cumplirla de forma sencilla."]
    }), "\n", createVNode(_components.h2, {
      id: "qué-es-la-facturación-electrónica-en-colombia",
      children: "¿Qué es la facturación electrónica en Colombia?"
    }), "\n", createVNode(_components.p, {
      children: ["La factura electrónica es la evolución digital de la factura en papel, con idéntica validez legal. Según la Ley 1819 de 2016 y regulaciones posteriores, la DIAN define un “Sistema de Facturación Electrónica” donde los comprobantes (facturas de venta) se generan, transmiten y almacenan por medios electrónicos. La resolución DIAN 000165 de 2023 afirma que ", createVNode(_components.em, {
        children: "“todo responsable de facturar deberá hacerlo electrónicamente”"
      }), ", incluyendo obligatoriamente a los responsables del Impuesto al Valor Agregado y del Impuesto al Consumo."]
    }), "\n", createVNode(_components.p, {
      children: ["De acuerdo con la DIAN, ", createVNode(_components.strong, {
        children: "“todas las personas o entidades que tengan la calidad de comerciantes”"
      }), " deben expedir factura o documento equivalente. En particular, los establecimientos que expiden alimentos y bebidas (restaurantes, cafés, pastelerías, servicios de catering, bares, etc.) pagan Impuesto Nacional al Consumo, por lo que están obligados a facturar electrónicamente. Por ley, el tiquete de una máquina registradora con sistema POS se considera “documento equivalente” a la factura electrónica; sin embargo, la DIAN exige que cuando un cliente lo requiera, el restaurante emita de inmediato la factura electrónica oficial."]
    }), "\n", createVNode(_components.p, {
      children: "Las reglas actuales incluyen: estar inscritos en la DIAN para facturación electrónica, emitir cada factura de venta con validación previa de la DIAN (en tiempo real), y usar un software autorizado por la DIAN. La factura debe contener datos del vendedor y cliente, valor total, IVA e Impoconsumo según corresponda. Además, es obligatorio conservar los documentos electrónicos durante 5 años. El incumplimiento de estas obligaciones puede llevar a sanciones fiscales graves, que incluso incluyen el cierre del establecimiento."
    }), "\n", createVNode(_components.h2, {
      id: "por-qué-es-importante-para-restaurantes",
      children: "¿Por qué es importante para restaurantes?"
    }), "\n", createVNode(_components.p, {
      children: "Más allá de la obligación legal, la facturación electrónica trae múltiples beneficios para los restaurantes. Entre ellos:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Ahorro de tiempo y recursos:"
        }), " Al digitalizar los documentos, se reduce el papeleo y la captura manual de datos. Un software que genera la factura automáticamente ahorra tiempo en caja y evita errores de transcripción."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Mejor atención al cliente:"
        }), " Los clientes reciben sus facturas más rápido (puede enviarse por correo electrónico inmediatamente) y pasan menos tiempo en la línea de caja. Una experiencia más ágil refuerza la imagen profesional del restaurante."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Mayor control interno:"
        }), " La facturación electrónica permite tener trazabilidad de cada venta e integra la información en tiempo real. Esto facilita generar reportes de ventas, IVA e Impoconsumo diarios, y conocer con exactitud el inventario y las finanzas del negocio."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cumplimiento fiscal y ventajas tributarias:"
        }), " Emitir factura electrónica garantiza que las ventas se registran formalmente ante la DIAN. Así las compras con factura electrónica del restaurante pueden descontarse de impuestos de renta o IVA. Adicionalmente, conservar facturas electrónicas (en nube) aporta seguridad en la información, con respaldo por al menos 5 años."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Ambiente más sostenible:"
        }), " Menos papel significa un restaurante más moderno y ecológico, algo que valoran muchos clientes."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["En resumen, facturar electrónicamente no sólo evita multas, sino que optimiza procesos internos. Como explica un especialista: la facturación electrónica ", createVNode(_components.em, {
        children: "“te ayuda a ahorrar espacio y recursos… e incrementar tus índices de servicio al cliente”"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "qué-es-un-pos-tributario-y-cómo-ayuda",
      children: "¿Qué es un POS tributario y cómo ayuda?"
    }), "\n", createVNode(_components.p, {
      children: ["Un ", createVNode(_components.strong, {
        children: "POS tributario"
      }), " es un sistema de punto de venta especializado que incluye la facturación electrónica cumpliendo los requisitos de la DIAN. A diferencia de un POS tradicional que solo emite tiquetes simples, un POS tributario genera facturas electrónicas autorizadas, las envía automáticamente a la DIAN y al cliente (por ejemplo, por correo), y registra impuestos como IVA e Impoconsumo según la normativa. Todo esto se hace en segundos, sin que el cajero tenga que hacer trámites adicionales."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Figura: Ejemplo de interfaz de KosmoPOS adaptada a un restaurante (plan completo con facturación electrónica incluida). Un POS tributario integrado permite gestionar mesas y comandas, emitir facturas electrónicas con un solo clic, y sincronizar datos con la DIAN al instante."
      })
    }), "\n", createVNode(_components.p, {
      children: ["Prácticamente, un POS tributario combina funcionalidades de un software de restaurante (gestión de mesas, domicilios, inventarios, reportes, etc.) con la capacidad de facturar cumpliendo la ley. Por ejemplo, ", createVNode(_components.strong, {
        children: "KosmoPOS"
      }), " ofrece un plan completo que incluye ", createVNode(_components.em, {
        children: "“facturación electrónica habilitada por la DIAN”"
      }), ", listo para emitir facturas válidas sin complicaciones. Un POS así mantiene el control de ventas, calcula automáticamente impuestos aplicables (IVA, Impoconsumo) y envía copias al cliente. En definitiva, simplifica enormemente la tarea de facturar conforme a la normativa, al mismo tiempo que optimiza la operación diaria del restaurante."]
    }), "\n", createVNode(_components.svg, {
      id: "mermaid-0",
      width: "100%",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      class: "flowchart",
      style: {
        maxWidth: "417.84375px"
      },
      viewBox: "0 0 417.84375 105",
      role: "graphics-document document",
      "aria-roledescription": "flowchart-v2",
      children: [createVNode(_components.style, {
        children: "#mermaid-0{font-family:arial,sans-serif;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#mermaid-0 .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#mermaid-0 .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#mermaid-0 .error-icon{fill:#552222;}#mermaid-0 .error-text{fill:#552222;stroke:#552222;}#mermaid-0 .edge-thickness-normal{stroke-width:1px;}#mermaid-0 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-0 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-0 .edge-thickness-invisible{stroke-width:0;fill:none;}#mermaid-0 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-0 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-0 .marker{fill:#333333;stroke:#333333;}#mermaid-0 .marker.cross{stroke:#333333;}#mermaid-0 svg{font-family:arial,sans-serif;font-size:16px;}#mermaid-0 p{margin:0;}#mermaid-0 .label{font-family:arial,sans-serif;color:#333;}#mermaid-0 .cluster-label text{fill:#333;}#mermaid-0 .cluster-label span{color:#333;}#mermaid-0 .cluster-label span p{background-color:transparent;}#mermaid-0 .label text,#mermaid-0 span{fill:#333;color:#333;}#mermaid-0 .node rect,#mermaid-0 .node circle,#mermaid-0 .node ellipse,#mermaid-0 .node polygon,#mermaid-0 .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#mermaid-0 .rough-node .label text,#mermaid-0 .node .label text,#mermaid-0 .image-shape .label,#mermaid-0 .icon-shape .label{text-anchor:middle;}#mermaid-0 .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#mermaid-0 .rough-node .label,#mermaid-0 .node .label,#mermaid-0 .image-shape .label,#mermaid-0 .icon-shape .label{text-align:center;}#mermaid-0 .node.clickable{cursor:pointer;}#mermaid-0 .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#mermaid-0 .arrowheadPath{fill:#333333;}#mermaid-0 .edgePath .path{stroke:#333333;stroke-width:1px;}#mermaid-0 .flowchart-link{stroke:#333333;fill:none;}#mermaid-0 .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#mermaid-0 .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#mermaid-0 .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#mermaid-0 .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#mermaid-0 .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#mermaid-0 .cluster text{fill:#333;}#mermaid-0 .cluster span{color:#333;}#mermaid-0 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:arial,sans-serif;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-0 .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#mermaid-0 rect.text{fill:none;stroke-width:0;}#mermaid-0 .icon-shape,#mermaid-0 .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#mermaid-0 .icon-shape p,#mermaid-0 .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#mermaid-0 .icon-shape .label rect,#mermaid-0 .image-shape .label rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#mermaid-0 .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#mermaid-0 .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#mermaid-0 .node .neo-node{stroke:#9370DB;}#mermaid-0 [data-look=\"neo\"].node rect,#mermaid-0 [data-look=\"neo\"].cluster rect,#mermaid-0 [data-look=\"neo\"].node polygon{stroke:#9370DB;filter:drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));}#mermaid-0 [data-look=\"neo\"].node path{stroke:#9370DB;stroke-width:1px;}#mermaid-0 [data-look=\"neo\"].node .outer-path{filter:drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));}#mermaid-0 [data-look=\"neo\"].node .neo-line path{stroke:#9370DB;filter:none;}#mermaid-0 [data-look=\"neo\"].node circle{stroke:#9370DB;filter:drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));}#mermaid-0 [data-look=\"neo\"].node circle .state-start{fill:#000000;}#mermaid-0 [data-look=\"neo\"].icon-shape .icon{fill:#9370DB;filter:drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));}#mermaid-0 [data-look=\"neo\"].icon-shape .icon-neo path{stroke:#9370DB;filter:drop-shadow(1px 2px 2px rgba(185, 185, 185, 1));}#mermaid-0 :root{--mermaid-font-family:arial,sans-serif;}"
      }), createVNode(_components.g, {
        children: [createVNode(_components.marker, {
          id: "mermaid-0_flowchart-v2-pointEnd",
          class: "marker flowchart-v2",
          viewBox: "0 0 10 10",
          refX: "5",
          refY: "5",
          markerUnits: "userSpaceOnUse",
          markerWidth: "8",
          markerHeight: "8",
          orient: "auto",
          children: createVNode(_components.path, {
            d: "M 0 0 L 10 5 L 0 10 z",
            class: "arrowMarkerPath",
            style: {
              strokeWidth: "1",
              strokeDasharray: "1, 0"
            }
          })
        }), createVNode(_components.marker, {
          id: "mermaid-0_flowchart-v2-pointStart",
          class: "marker flowchart-v2",
          viewBox: "0 0 10 10",
          refX: "4.5",
          refY: "5",
          markerUnits: "userSpaceOnUse",
          markerWidth: "8",
          markerHeight: "8",
          orient: "auto",
          children: createVNode(_components.path, {
            d: "M 0 5 L 10 10 L 10 0 z",
            class: "arrowMarkerPath",
            style: {
              strokeWidth: "1",
              strokeDasharray: "1, 0"
            }
          })
        }), createVNode(_components.marker, {
          id: "mermaid-0_flowchart-v2-pointEnd-margin",
          class: "marker flowchart-v2",
          viewBox: "0 0 11.5 14",
          refX: "11.5",
          refY: "7",
          markerUnits: "userSpaceOnUse",
          markerWidth: "10.5",
          markerHeight: "14",
          orient: "auto",
          children: createVNode(_components.path, {
            d: "M 0 0 L 11.5 7 L 0 14 z",
            class: "arrowMarkerPath",
            style: {
              strokeWidth: "0",
              strokeDasharray: "1, 0"
            }
          })
        }), createVNode(_components.marker, {
          id: "mermaid-0_flowchart-v2-pointStart-margin",
          class: "marker flowchart-v2",
          viewBox: "0 0 11.5 14",
          refX: "1",
          refY: "7",
          markerUnits: "userSpaceOnUse",
          markerWidth: "11.5",
          markerHeight: "14",
          orient: "auto",
          children: createVNode(_components.polygon, {
            points: "0,7 11.5,14 11.5,0",
            class: "arrowMarkerPath",
            style: {
              strokeWidth: "0",
              strokeDasharray: "1, 0"
            }
          })
        }), createVNode(_components.marker, {
          id: "mermaid-0_flowchart-v2-circleEnd",
          class: "marker flowchart-v2",
          viewBox: "0 0 10 10",
          refX: "11",
          refY: "5",
          markerUnits: "userSpaceOnUse",
          markerWidth: "11",
          markerHeight: "11",
          orient: "auto",
          children: createVNode(_components.circle, {
            cx: "5",
            cy: "5",
            r: "5",
            class: "arrowMarkerPath",
            style: {
              strokeWidth: "1",
              strokeDasharray: "1, 0"
            }
          })
        }), createVNode(_components.marker, {
          id: "mermaid-0_flowchart-v2-circleStart",
          class: "marker flowchart-v2",
          viewBox: "0 0 10 10",
          refX: "-1",
          refY: "5",
          markerUnits: "userSpaceOnUse",
          markerWidth: "11",
          markerHeight: "11",
          orient: "auto",
          children: createVNode(_components.circle, {
            cx: "5",
            cy: "5",
            r: "5",
            class: "arrowMarkerPath",
            style: {
              strokeWidth: "1",
              strokeDasharray: "1, 0"
            }
          })
        }), createVNode(_components.marker, {
          id: "mermaid-0_flowchart-v2-circleEnd-margin",
          class: "marker flowchart-v2",
          viewBox: "0 0 10 10",
          refY: "5",
          refX: "12.25",
          markerUnits: "userSpaceOnUse",
          markerWidth: "14",
          markerHeight: "14",
          orient: "auto",
          children: createVNode(_components.circle, {
            cx: "5",
            cy: "5",
            r: "5",
            class: "arrowMarkerPath",
            style: {
              strokeWidth: "0",
              strokeDasharray: "1, 0"
            }
          })
        }), createVNode(_components.marker, {
          id: "mermaid-0_flowchart-v2-circleStart-margin",
          class: "marker flowchart-v2",
          viewBox: "0 0 10 10",
          refX: "-2",
          refY: "5",
          markerUnits: "userSpaceOnUse",
          markerWidth: "14",
          markerHeight: "14",
          orient: "auto",
          children: createVNode(_components.circle, {
            cx: "5",
            cy: "5",
            r: "5",
            class: "arrowMarkerPath",
            style: {
              strokeWidth: "0",
              strokeDasharray: "1, 0"
            }
          })
        }), createVNode(_components.marker, {
          id: "mermaid-0_flowchart-v2-crossEnd",
          class: "marker cross flowchart-v2",
          viewBox: "0 0 11 11",
          refX: "12",
          refY: "5.2",
          markerUnits: "userSpaceOnUse",
          markerWidth: "11",
          markerHeight: "11",
          orient: "auto",
          children: createVNode(_components.path, {
            d: "M 1,1 l 9,9 M 10,1 l -9,9",
            class: "arrowMarkerPath",
            style: {
              strokeWidth: "2",
              strokeDasharray: "1, 0"
            }
          })
        }), createVNode(_components.marker, {
          id: "mermaid-0_flowchart-v2-crossStart",
          class: "marker cross flowchart-v2",
          viewBox: "0 0 11 11",
          refX: "-1",
          refY: "5.2",
          markerUnits: "userSpaceOnUse",
          markerWidth: "11",
          markerHeight: "11",
          orient: "auto",
          children: createVNode(_components.path, {
            d: "M 1,1 l 9,9 M 10,1 l -9,9",
            class: "arrowMarkerPath",
            style: {
              strokeWidth: "2",
              strokeDasharray: "1, 0"
            }
          })
        }), createVNode(_components.marker, {
          id: "mermaid-0_flowchart-v2-crossEnd-margin",
          class: "marker cross flowchart-v2",
          viewBox: "0 0 15 15",
          refX: "17.7",
          refY: "7.5",
          markerUnits: "userSpaceOnUse",
          markerWidth: "12",
          markerHeight: "12",
          orient: "auto",
          children: createVNode(_components.path, {
            d: "M 1,1 L 14,14 M 1,14 L 14,1",
            class: "arrowMarkerPath",
            style: {
              strokeWidth: "2.5"
            }
          })
        }), createVNode(_components.marker, {
          id: "mermaid-0_flowchart-v2-crossStart-margin",
          class: "marker cross flowchart-v2",
          viewBox: "0 0 15 15",
          refX: "-3.5",
          refY: "7.5",
          markerUnits: "userSpaceOnUse",
          markerWidth: "12",
          markerHeight: "12",
          orient: "auto",
          children: createVNode(_components.path, {
            d: "M 1,1 L 14,14 M 1,14 L 14,1",
            class: "arrowMarkerPath",
            style: {
              strokeWidth: "2.5",
              strokeDasharray: "1, 0"
            }
          })
        }), createVNode(_components.g, {
          class: "root",
          children: [createVNode(_components.g, {
            class: "clusters"
          }), createVNode(_components.g, {
            class: "edgePaths",
            children: [createVNode(_components.path, {
              d: "M117.813,44.699L121.979,43.082C126.146,41.466,134.479,38.233,142.146,36.616C149.813,35,156.813,35,160.313,35L163.813,35",
              id: "mermaid-0-L_Cliente_POS_0",
              class: "edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link",
              style: {},
              "data-edge": "true",
              "data-et": "edge",
              "data-id": "L_Cliente_POS_0",
              "data-points": "W3sieCI6MTE3LjgxMjUsInkiOjQ0LjY5ODg2NTg1ODQyNzg0NH0seyJ4IjoxNDIuODEyNSwieSI6MzV9LHsieCI6MTY3LjgxMjUsInkiOjM1fV0=",
              "data-look": "classic",
              "marker-end": "url(#mermaid-0_flowchart-v2-pointEnd)"
            }), createVNode(_components.path, {
              d: "M261.609,35L265.776,35C269.943,35,278.276,35,285.994,36.485C293.713,37.971,300.816,40.942,304.368,42.427L307.919,43.913",
              id: "mermaid-0-L_POS_DIAN_0",
              class: "edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link",
              style: {},
              "data-edge": "true",
              "data-et": "edge",
              "data-id": "L_POS_DIAN_0",
              "data-points": "W3sieCI6MjYxLjYwOTM3NSwieSI6MzV9LHsieCI6Mjg2LjYwOTM3NSwieSI6MzV9LHsieCI6MzExLjYwOTM3NSwieSI6NDUuNDU2NDE0MDQwMjY1NjN9XQ==",
              "data-look": "classic",
              "marker-end": "url(#mermaid-0_flowchart-v2-pointEnd)"
            }), createVNode(_components.path, {
              d: "M311.609,86.544L307.443,88.286C303.276,90.029,294.943,93.515,278.793,95.257C262.643,97,238.677,97,214.711,97C190.745,97,166.779,97,151.25,95.625C135.722,94.249,128.632,91.499,125.087,90.123L121.542,88.748",
              id: "mermaid-0-L_DIAN_Cliente_0",
              class: "edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link",
              style: {},
              "data-edge": "true",
              "data-et": "edge",
              "data-id": "L_DIAN_Cliente_0",
              "data-points": "W3sieCI6MzExLjYwOTM3NSwieSI6ODYuNTQzNTg1OTU5NzM0Mzd9LHsieCI6Mjg2LjYwOTM3NSwieSI6OTd9LHsieCI6MjE0LjcxMDkzNzUsInkiOjk3fSx7IngiOjE0Mi44MTI1LCJ5Ijo5N30seyJ4IjoxMTcuODEyNSwieSI6ODcuMzAxMTM0MTQxNTcyMTZ9XQ==",
              "data-look": "classic",
              "marker-end": "url(#mermaid-0_flowchart-v2-pointEnd)"
            })]
          }), createVNode(_components.g, {
            class: "edgeLabels",
            children: [createVNode(_components.g, {
              class: "edgeLabel",
              children: createVNode(_components.g, {
                class: "label",
                "data-id": "L_Cliente_POS_0",
                transform: "translate(0, 0)",
                children: createVNode(_components.foreignObject, {
                  width: "0",
                  height: "0",
                  children: createVNode(_components.div, {
                    xmlns: "http://www.w3.org/1999/xhtml",
                    class: "labelBkg",
                    style: {
                      display: "table-cell",
                      whiteSpace: "nowrap",
                      lineHeight: "1.5",
                      maxWidth: "200px",
                      textAlign: "center"
                    },
                    children: createVNode(_components.span, {
                      class: "edgeLabel"
                    })
                  })
                })
              })
            }), createVNode(_components.g, {
              class: "edgeLabel",
              children: createVNode(_components.g, {
                class: "label",
                "data-id": "L_POS_DIAN_0",
                transform: "translate(0, 0)",
                children: createVNode(_components.foreignObject, {
                  width: "0",
                  height: "0",
                  children: createVNode(_components.div, {
                    xmlns: "http://www.w3.org/1999/xhtml",
                    class: "labelBkg",
                    style: {
                      display: "table-cell",
                      whiteSpace: "nowrap",
                      lineHeight: "1.5",
                      maxWidth: "200px",
                      textAlign: "center"
                    },
                    children: createVNode(_components.span, {
                      class: "edgeLabel"
                    })
                  })
                })
              })
            }), createVNode(_components.g, {
              class: "edgeLabel",
              children: createVNode(_components.g, {
                class: "label",
                "data-id": "L_DIAN_Cliente_0",
                transform: "translate(0, 0)",
                children: createVNode(_components.foreignObject, {
                  width: "0",
                  height: "0",
                  children: createVNode(_components.div, {
                    xmlns: "http://www.w3.org/1999/xhtml",
                    class: "labelBkg",
                    style: {
                      display: "table-cell",
                      whiteSpace: "nowrap",
                      lineHeight: "1.5",
                      maxWidth: "200px",
                      textAlign: "center"
                    },
                    children: createVNode(_components.span, {
                      class: "edgeLabel"
                    })
                  })
                })
              })
            })]
          }), createVNode(_components.g, {
            class: "nodes",
            children: [createVNode(_components.g, {
              class: "node default",
              id: "mermaid-0-flowchart-Cliente-0",
              "data-look": "classic",
              transform: "translate(62.90625, 66)",
              children: [createVNode(_components.rect, {
                class: "basic label-container",
                style: {},
                x: "-54.90625",
                y: "-27",
                width: "109.8125",
                height: "54"
              }), createVNode(_components.g, {
                class: "label",
                style: {},
                transform: "translate(-24.90625, -12)",
                children: [createVNode(_components.rect, {}), createVNode(_components.foreignObject, {
                  width: "49.8125",
                  height: "24",
                  children: createVNode(_components.div, {
                    xmlns: "http://www.w3.org/1999/xhtml",
                    style: {
                      display: "table-cell",
                      whiteSpace: "nowrap",
                      lineHeight: "1.5",
                      maxWidth: "200px",
                      textAlign: "center"
                    },
                    children: createVNode(_components.span, {
                      class: "nodeLabel",
                      children: createVNode(_components.p, {
                        children: "Cliente"
                      })
                    })
                  })
                })]
              })]
            }), createVNode(_components.g, {
              class: "node default",
              id: "mermaid-0-flowchart-POS-1",
              "data-look": "classic",
              transform: "translate(214.7109375, 35)",
              children: [createVNode(_components.rect, {
                class: "basic label-container",
                style: {},
                x: "-46.8984375",
                y: "-27",
                width: "93.796875",
                height: "54"
              }), createVNode(_components.g, {
                class: "label",
                style: {},
                transform: "translate(-16.8984375, -12)",
                children: [createVNode(_components.rect, {}), createVNode(_components.foreignObject, {
                  width: "33.796875",
                  height: "24",
                  children: createVNode(_components.div, {
                    xmlns: "http://www.w3.org/1999/xhtml",
                    style: {
                      display: "table-cell",
                      whiteSpace: "nowrap",
                      lineHeight: "1.5",
                      maxWidth: "200px",
                      textAlign: "center"
                    },
                    children: createVNode(_components.span, {
                      class: "nodeLabel",
                      children: createVNode(_components.p, {
                        children: "POS"
                      })
                    })
                  })
                })]
              })]
            }), createVNode(_components.g, {
              class: "node default",
              id: "mermaid-0-flowchart-DIAN-3",
              "data-look": "classic",
              transform: "translate(360.7265625, 66)",
              children: [createVNode(_components.rect, {
                class: "basic label-container",
                style: {},
                x: "-49.1171875",
                y: "-27",
                width: "98.234375",
                height: "54"
              }), createVNode(_components.g, {
                class: "label",
                style: {},
                transform: "translate(-19.1171875, -12)",
                children: [createVNode(_components.rect, {}), createVNode(_components.foreignObject, {
                  width: "38.234375",
                  height: "24",
                  children: createVNode(_components.div, {
                    xmlns: "http://www.w3.org/1999/xhtml",
                    style: {
                      display: "table-cell",
                      whiteSpace: "nowrap",
                      lineHeight: "1.5",
                      maxWidth: "200px",
                      textAlign: "center"
                    },
                    children: createVNode(_components.span, {
                      class: "nodeLabel",
                      children: createVNode(_components.p, {
                        children: "DIAN"
                      })
                    })
                  })
                })]
              })]
            })]
          })]
        })]
      }), createVNode(_components.defs, {
        children: createVNode(_components.filter, {
          id: "mermaid-0-drop-shadow",
          height: "130%",
          width: "130%",
          children: createVNode(_components.feDropShadow, {
            dx: "4",
            dy: "4",
            stdDeviation: "0",
            "flood-opacity": "0.06",
            "flood-color": "#000000"
          })
        })
      }), createVNode(_components.defs, {
        children: createVNode(_components.filter, {
          id: "mermaid-0-drop-shadow-small",
          height: "150%",
          width: "150%",
          children: createVNode(_components.feDropShadow, {
            dx: "2",
            dy: "2",
            stdDeviation: "0",
            "flood-opacity": "0.06",
            "flood-color": "#000000"
          })
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Figura: Flujo de emisión de factura electrónica en un restaurante. El cliente compra, el POS genera la factura y la envía a la DIAN para validación, luego la factura se entrega al cliente."
      })
    }), "\n", createVNode(_components.h2, {
      id: "pasos-prácticos-para-implementar-facturación-electrónica-en-tu-restaurante",
      children: "Pasos prácticos para implementar facturación electrónica en tu restaurante"
    }), "\n", createVNode(_components.p, {
      children: "Para arrancar con la facturación electrónica, sigue estos pasos clave:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Verifica tu obligatoriedad:"
        }), " Confirma si tu negocio es ", createVNode(_components.em, {
          children: "responsable del IVA o del Impoconsumo"
        }), " (casi seguro si vendes comidas/bebidas preparadas). Si lo es, debes facturar electrónicamente."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Regístrate en la DIAN:"
        }), " Asegúrate de tener un RUT al día y de ingresar al servicio de factura electrónica de la DIAN. Obtén tu certificado digital de firma si aún no lo tienes."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Elige un proveedor autorizado:"
        }), " Selecciona un POS o software POS autorizado por la DIAN que incluya facturación electrónica. Trabajar con un proveedor certificado (como KosmoPOS) garantiza que cumples la normativa."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Integra tu POS y catálogo:"
        }), " Configura el sistema con tu carta o menú, actualiza precios e impuestos (IVA, Impoconsumo) por producto. Realiza pruebas iniciales emitiendo facturas de ejemplo para verificar que el flujo funciona."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Capacita a tu equipo:"
        }), " Entrena a cajeros y meseros en el nuevo proceso: cómo emitir la factura desde el POS, cómo verificar el RUT del cliente si necesita la factura, y cómo actuar en casos especiales (pedido cancelado, devoluciones, etc.)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Define un plan de contingencia:"
        }), " Aunque el POS tributario puede operar offline, define cómo proceder en fallas de red o en caso de necesitar facturación manual temporal (la DIAN permite “tiquetes de contingencia” solo en emergencias). En general, delega en tu POS la mayoría de las situaciones."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Monitorea y ajusta:"
        }), " Revisa periódicamente los reportes de ventas e impoconsumo que genere el sistema. Asegúrate de guardar copias electrónicas de todos los documentos y de resolver rápidamente cualquier factura rechazada por la DIAN."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "A modo de checklist: Regístrate ➜ Instala POS autorizado ➜ Configura menú e impuestos ➜ Emite facturas pruebas ➜ Capacita personal ➜ Activa facturación definitiva ➜ Guarda registros. Este proceso te permitirá migrar sin problemas al mundo electrónico."
    }), "\n", createVNode(_components.h2, {
      id: "preguntas-frecuentes",
      children: "Preguntas frecuentes"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "¿Todos los restaurantes están obligados a facturar electrónicamente?"
        }), " Sí, en general todos los establecimientos gastronómicos que venden comida o bebida para consumo propio o a domicilio y que son ", createVNode(_components.em, {
          children: "responsables de IVA o Impoconsumo"
        }), " deben emitir factura electrónica. Solo los negocios en Régimen Simplificado sin obligaciones de IVA/Impoconsumo podrían facturar en forma simplificada (boleta), pero es bueno verificarlo con tu contador."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "¿Desde cuándo debo hacerlo?"
        }), " La exigencia es vigente desde hace varios años. La facturación electrónica rige en Colombia desde 2020, y en los últimos cambios normativos la DIAN ha fijado plazos para incluir documentos equivalentes (tiquetes) desde 2024. Como restaurante, debes estar preparado para facturar electrónicamente en todo momento."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "¿No puedo usar solo un ticket POS normal?"
        }), " No. Un ticket POS tradicional no reemplaza la factura electrónica. Si el cliente lo pide (u por exigencia tributaria), debes emitir la factura electrónica completa inmediatamente. Un POS tributario está diseñado para generar ambos (tiquete y factura) sin saltos."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "¿Necesito conexión a Internet todo el tiempo?"
        }), " Idealmente sí para envío inmediato a la DIAN. Sin embargo, algunos POS modernos pueden funcionar offline y sincronizar luego. Por ejemplo, KosmoPOS ", createVNode(_components.em, {
          children: "funciona completamente sin conexión"
        }), ", sincronizando ventas e inventario al volver a conectarse. Esto permite operar en lugares con señal irregular y luego enviar las facturas pendientes."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "¿Qué ocurre si no emito la factura electrónica?"
        }), " Además de perder beneficios fiscales, expones tu restaurante a sanciones de la DIAN. Estas pueden incluir multas e incluso el cierre del establecimiento, como lo advierte la DIAN. Facturar electrónicamente es obligatorio para tu responsabilidad fiscal."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "¿Puedo usar el sistema gratuito de la DIAN?"
        }), " Sí, la DIAN ofrece un portal de factura electrónica gratis. Pero usar un POS integrado simplifica mucho el proceso, evita errores y agiliza las ventas. Con un POS autorizado (plan completo), la facturación se vuelve automática y transparente."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "¿Qué es un “documento equivalente” de un POS?"
        }), " Es el tiquete o recibo generado por la máquina registradora/POS. Actualmente la DIAN exige que dicho recibo se convierta en factura electrónica si el cliente la solicita. Los POS tributarios modernos están adaptados para emitir ya la factura electrónica en cada venta, cubriendo ambas necesidades."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusión-y-llamado-a-la-acción",
      children: "Conclusión y llamado a la acción"
    }), "\n", createVNode(_components.p, {
      children: ["La facturación electrónica en restaurantes es una obligación legal que, bien implementada, aporta más ventajas que inconvenientes. Te ayuda a ser más eficiente, mantener todo bajo control y ofrecer un mejor servicio al cliente. Para facilitar este proceso, un POS tributario como ", createVNode(_components.strong, {
        children: "KosmoPOS"
      }), " puede ser la solución ideal."]
    }), "\n", createVNode(_components.p, {
      children: ["KosmoPOS es un sistema de punto de venta pensado para restaurantes, ", createVNode(_components.strong, {
        children: "listo para cumplir la normatividad"
      }), " colombiana de facturación electrónica. Con su plan completo obtienes un POS que emite facturas electrónicas autorizadas por la DIAN automáticamente, integra mesas y domicilios, y cumple todos los requisitos fiscales sin que debas preocuparte por papeleos. Prueba KosmoPOS y transforma tu restaurante: cumple con la DIAN de forma sencilla y concentra tu energía en atender a tus comensales. ", createVNode(_components.a, {
        href: "https://kosmopos.co/",
        children: "Conoce más sobre KosmoPOS aquí"
      }), " y solicita una demo gratuita."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "KosmoPOS:"
      }), " Cumple con la DIAN y factura electrónico sin complicaciones, para que tú solo te enfoques en cocinar y servir."]
    }), "\n", createVNode(_components.h2, {
      id: "recursos-adicionales-y-siguientes-pasos",
      children: "Recursos adicionales y siguientes pasos"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "DIAN – Facturación electrónica:"
        }), " Revisa la sección oficial ", createVNode(_components.em, {
          children: "Obligados a facturar"
        }), " en el portal de la DIAN y la guía “Abece Factura Electrónica” (DIAN) para entender tus obligaciones legales."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Normatividad tributaria:"
        }), " Consulta la Ley 1819/2016, el Decreto 1625/2016 y las Resoluciones DIAN (por ejemplo, 000042/2020 y 000165/2023) para más detalles sobre fechas y requisitos."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Proveedor POS autorizado:"
        }), " Evalúa sistemas de punto de venta certificados. KosmoPOS ofrece un POS con facturación electrónica incluida y funciones avanzadas para restaurantes."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Asesoría profesional:"
        }), " Si tienes dudas puntuales, considera hablar con un contador especializado en facturación electrónica o asistir a talleres de capacitación en tu ciudad."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Consulta blogs especializados:"
        }), " Sitios como Actualícese, Loggro o Bibisoft también tienen guías actualizadas sobre facturación electrónica en restaurantes (por ejemplo, guía de Bibisoft)."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Con estos recursos y herramientas, tu restaurante estará listo para emitir facturas electrónicas de manera eficiente y en cumplimiento con la DIAN. ¡A facturar electrónicamente!"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/blog/facturacion-electronica-restaurante.mdx";
const file = "/home/runner/work/landing/landing/src/blog/facturacion-electronica-restaurante.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/landing/landing/src/blog/facturacion-electronica-restaurante.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_6 as _ };
