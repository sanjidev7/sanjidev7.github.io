import { v as createVNode, T as Fragment, _ as __astro_tag_component__ } from './astro/server.BcuEOnZl.js';
import 'clsx';

const frontmatter = {
  "title": "Instalación de impresora Wi-Fi (por red) en Windows",
  "slug": "instalacion-de-impresora-por-red",
  "category": "Gestión y Operaciones",
  "categorySlug": "gestion-y-operaciones",
  "description": "Aprende a instalar una impresora por red en Windows asignándole una IP fija con Printer Test (printer_test_v_3_1.zip), agregándola por puerto TCP/IP y verificando el funcionamiento con una página de prueba.",
  "author": "Jhon Perez",
  "date": "2026-01-06",
  "tags": ["instalar impresora wifi", "agregar impresora windows", "impresora por red tcp ip", "printer test", "ip fija impresora"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introducción",
    "text": "Introducción"
  }, {
    "depth": 2,
    "slug": "antes-de-empezar-lo-que-necesitas",
    "text": "Antes de empezar: lo que necesitas"
  }, {
    "depth": 2,
    "slug": "paso-1-conecta-la-impresora-por-usb-al-computador",
    "text": "Paso 1: Conecta la impresora por USB al computador"
  }, {
    "depth": 2,
    "slug": "paso-2-revisa-la-ip-del-computador-con-ipconfig-para-elegir-la-ip-de-la-impresora",
    "text": "Paso 2: Revisa la IP del computador con ipconfig para elegir la IP de la impresora"
  }, {
    "depth": 2,
    "slug": "paso-3-asigna-una-ip-fija-con-printer-test-usando-printer_test_v_3_1zip",
    "text": "Paso 3: Asigna una IP fija con Printer Test usando printer_test_v_3_1.zip"
  }, {
    "depth": 2,
    "slug": "paso-4-desconecta-el-usb-y-conecta-la-impresora-a-la-red-por-ethernet",
    "text": "Paso 4: Desconecta el USB y conecta la impresora a la red por Ethernet"
  }, {
    "depth": 2,
    "slug": "paso-5-agrega-la-impresora-en-windows-panel-de-control--dispositivos-e-impresoras",
    "text": "Paso 5: Agrega la impresora en Windows (Panel de control → Dispositivos e impresoras)"
  }, {
    "depth": 3,
    "slug": "configuración-del-puerto-si-windows-lo-pregunta",
    "text": "Configuración del puerto (si Windows lo pregunta)"
  }, {
    "depth": 3,
    "slug": "selección-del-driver",
    "text": "Selección del driver"
  }, {
    "depth": 2,
    "slug": "paso-6-imprime-una-página-de-prueba-para-verificar",
    "text": "Paso 6: Imprime una página de prueba para verificar"
  }, {
    "depth": 2,
    "slug": "conclusión",
    "text": "Conclusión"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "introducción",
      children: "Introducción"
    }), "\n", createVNode(_components.p, {
      children: ["Configurar una impresora para que funcione ", createVNode(_components.strong, {
        children: "por red"
      }), " (ya sea conectada por ", createVNode(_components.strong, {
        children: "Ethernet al router"
      }), " o directamente por ", createVNode(_components.strong, {
        children: "Wi-Fi"
      }), ") te ahorra cables, evita reinstalaciones en cada equipo y permite que varios computadores impriman sin depender de un solo PC."]
    }), "\n", createVNode(_components.p, {
      children: "En esta guía verás un paso a paso práctico para:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Conectar la impresora inicialmente por ", createVNode(_components.strong, {
          children: "USB"
        }), " para configurarla."]
      }), "\n", createVNode(_components.li, {
        children: ["Identificar la ", createVNode(_components.strong, {
          children: "IP"
        }), " correcta de tu red con ", createVNode(_components.code, {
          children: "ipconfig"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Asignar una ", createVNode(_components.strong, {
          children: "IP fija"
        }), " usando ", createVNode(_components.strong, {
          children: "Printer Test"
        }), " (desde ", createVNode(_components.a, {
          href: "https://github.com/sanji-pos/utils/raw/refs/heads/main/printers/printer_test_v_3_1.zip",
          children: "printer_test_v_3_1.zip"
        }), ") cambiando el último número a ", createVNode(_components.strong, {
          children: "220"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Conectar la impresora a la red y ", createVNode(_components.strong, {
          children: "agregarla en Windows"
        }), " por ", createVNode(_components.strong, {
          children: "TCP/IP"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Imprimir una ", createVNode(_components.strong, {
          children: "página de prueba"
        }), " para validar que todo quedó bien."]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["Nota rápida: Aunque a veces se diga “impresora Wi-Fi”, en este procedimiento la impresora queda “en red” conectada por ", createVNode(_components.strong, {
          children: "Ethernet"
        }), " al router. Eso igual permite imprimir desde computadores conectados por ", createVNode(_components.strong, {
          children: "Wi-Fi"
        }), " (todos en la misma red)."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "antes-de-empezar-lo-que-necesitas",
      children: "Antes de empezar: lo que necesitas"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Un computador con Windows (10 u 11) con permisos para instalar impresoras."
      }), "\n", createVNode(_components.li, {
        children: ["La impresora y su cable ", createVNode(_components.strong, {
          children: "USB"
        }), " (solo para el primer paso)."]
      }), "\n", createVNode(_components.li, {
        children: ["Un cable ", createVNode(_components.strong, {
          children: "Ethernet"
        }), " para conectarla al router/switch."]
      }), "\n", createVNode(_components.li, {
        children: ["El software ", createVNode(_components.strong, {
          children: "Printer Test"
        }), " en el archivo ", createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "https://github.com/sanji-pos/utils/raw/refs/heads/main/printers/printer_test_v_3_1.zip",
            children: "printer_test_v_3_1.zip"
          })
        }), " (debes descomprimirlo para usarlo)."]
      }), "\n", createVNode(_components.li, {
        children: ["(Recomendado) Tener a la mano el ", createVNode(_components.strong, {
          children: "driver"
        }), " de la impresora (o permitir que Windows lo descargue con Windows Update)."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "paso-1-conecta-la-impresora-por-usb-al-computador",
      children: "Paso 1: Conecta la impresora por USB al computador"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Conecta la impresora al computador usando ", createVNode(_components.strong, {
          children: "USB"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Enciende la impresora y espera a que Windows la detecte."
      }), "\n", createVNode(_components.li, {
        children: "Si Windows instala un driver básico automáticamente, déjalo terminar (esto ayuda a que el software la reconozca mejor)."
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "💡 Consejo: cierra programas de impresión abiertos para evitar que “ocupen” el puerto mientras configuras."
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "paso-2-revisa-la-ip-del-computador-con-ipconfig-para-elegir-la-ip-de-la-impresora",
      children: ["Paso 2: Revisa la IP del computador con ", createVNode(_components.code, {
        children: "ipconfig"
      }), " para elegir la IP de la impresora"]
    }), "\n", createVNode(_components.p, {
      children: ["La idea es asignar a la impresora una IP ", createVNode(_components.strong, {
        children: "en el mismo rango"
      }), " (misma red) que tu computador."]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Presiona ", createVNode(_components.code, {
            children: "Windows + R"
          }), ", escribe ", createVNode(_components.code, {
            children: "cmd"
          }), " y presiona ", createVNode(_components.strong, {
            children: "Enter"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Ejecuta:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: createVNode(_components.code, {
              children: "ipconfig"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Busca estas líneas (pueden variar según tu red):"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Dirección IPv4"
            }), " (ej: ", createVNode(_components.code, {
              children: "192.168.1.34"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Máscara de subred"
            }), " (ej: ", createVNode(_components.code, {
              children: "255.255.255.0"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Puerta de enlace predeterminada"
            }), " (ej: ", createVNode(_components.code, {
              children: "192.168.1.1"
            }), ")"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/images/blog/ip-example.png",
        alt: "Ejemplo de comando ipconfig en Windows"
      })
    }), "\n", createVNode(_components.p, {
      children: "En este ejemplo, es 192.168.1.2 la ip del computador."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "paso-3-asigna-una-ip-fija-con-printer-test-usando-printer_test_v_3_1zip",
      children: ["Paso 3: Asigna una IP fija con Printer Test usando ", createVNode(_components.a, {
        href: "https://github.com/sanji-pos/utils/raw/refs/heads/main/printers/printer_test_v_3_1.zip",
        children: "printer_test_v_3_1.zip"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["En este paso vas a usar ", createVNode(_components.strong, {
        children: "Printer Test"
      }), " para colocarle a la impresora una IP fija terminada en ", createVNode(_components.strong, {
        children: ".220"
      }), "."]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Ubica el archivo ", createVNode(_components.strong, {
            children: createVNode(_components.a, {
              href: "https://github.com/sanji-pos/utils/raw/refs/heads/main/printers/printer_test_v_3_1.zip",
              children: "printer_test_v_3_1.zip"
            })
          }), " y ", createVNode(_components.strong, {
            children: "descomprímelo"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Abre la carpeta resultante y ejecuta ", createVNode(_components.strong, {
            children: "Printer Test"
          }), " (si puedes, clic derecho → ", createVNode(_components.strong, {
            children: "Ejecutar como administrador"
          }), ")."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Dentro del programa:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Selecciona la impresora conectada por USB (si hay opción de “buscar” o “detectar”, úsala).\n", createVNode(_components.img, {
              src: "/images/blog/select-usb.png",
              alt: "Selección de USB inicial"
            })]
          }), "\n", createVNode(_components.li, {
            children: ["En la sección de red/IP, asigna:\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: [createVNode(_components.strong, {
                  children: "IP:"
                }), " la misma red de tu PC, pero cambiando el último número a ", createVNode(_components.strong, {
                  children: "220"
                }), "\n", createVNode(_components.ul, {
                  children: ["\n", createVNode(_components.li, {
                    children: ["Ejemplo: si tu PC es ", createVNode(_components.code, {
                      children: "192.168.1.34"
                    }), ", la impresora quedaría ", createVNode(_components.code, {
                      children: "192.168.1.220"
                    }), "\n", createVNode(_components.img, {
                      src: "/images/blog/set-ip.png",
                      alt: "Ejemplo de comando ipconfig en Windows"
                    })]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Haz clic en “Set new IP”"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "✅ Importante: este paso es clave. Sin asignar IP fija, es común que la impresora cambie de IP y “se pierda” en Windows."
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "paso-4-desconecta-el-usb-y-conecta-la-impresora-a-la-red-por-ethernet",
      children: "Paso 4: Desconecta el USB y conecta la impresora a la red por Ethernet"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Desconecta el cable ", createVNode(_components.strong, {
          children: "USB"
        }), " del computador."]
      }), "\n", createVNode(_components.li, {
        children: ["Conecta la impresora al router/switch con el cable ", createVNode(_components.strong, {
          children: "Ethernet"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Espera 30–60 segundos para que enlace la red (muchas impresoras tienen una luz de “link” o “network”)."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Verificación rápida (recomendada):"
      }), " desde el PC, abre CMD y ejecuta:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "ping 192.168.1.220"
        }), " ", createVNode(_components.em, {
          children: "(cambia la red según tu caso)"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Si responde, la impresora ya está “visible” en la red."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "paso-5-agrega-la-impresora-en-windows-panel-de-control--dispositivos-e-impresoras",
      children: "Paso 5: Agrega la impresora en Windows (Panel de control → Dispositivos e impresoras)"
    }), "\n", createVNode(_components.p, {
      children: "Ahora sí: vamos a agregarla usando su IP fija."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Abre ", createVNode(_components.strong, {
          children: "Panel de control"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Entra a ", createVNode(_components.strong, {
          children: "Dispositivos e impresoras"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Haz clic en ", createVNode(_components.strong, {
          children: "Agregar una impresora"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Como muchas veces Windows no la encuentra sola, haz esto:"
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: ["Haz clic en ", createVNode(_components.strong, {
          children: "La impresora que quiero no está en la lista"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Elige: ", createVNode(_components.strong, {
          children: "Agregar una impresora usando una dirección TCP/IP o un nombre de host"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["En “Tipo de dispositivo”, selecciona ", createVNode(_components.strong, {
          children: "Dispositivo TCP/IP"
        }), " (o “TCP/IP Device”)."]
      }), "\n", createVNode(_components.li, {
        children: ["En ", createVNode(_components.strong, {
          children: "Nombre de host o dirección IP"
        }), ", escribe la IP que asignaste:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: createVNode(_components.code, {
              children: "192.168.X.220"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["(Opcional pero útil) Desmarca: ", createVNode(_components.strong, {
          children: "Consultar la impresora y seleccionar automáticamente el controlador"
        }), " si te da errores de detección."]
      }), "\n", createVNode(_components.li, {
        children: ["Dale a ", createVNode(_components.strong, {
          children: "Siguiente"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "configuración-del-puerto-si-windows-lo-pregunta",
      children: "Configuración del puerto (si Windows lo pregunta)"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Lo más común es que cree un ", createVNode(_components.strong, {
          children: "Standard TCP/IP Port"
        }), " automáticamente."]
      }), "\n", createVNode(_components.li, {
        children: ["Si te pide protocolo:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Prueba primero ", createVNode(_components.strong, {
              children: "RAW"
            }), " con puerto ", createVNode(_components.strong, {
              children: "9100"
            }), " (muy común)."]
          }), "\n", createVNode(_components.li, {
            children: "Si tu impresora usa LPR (menos común), necesitarás el “Queue name” (cola) del fabricante."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "selección-del-driver",
      children: "Selección del driver"
    }), "\n", createVNode(_components.ol, {
      start: "10",
      children: ["\n", createVNode(_components.li, {
        children: "Windows te pedirá el controlador:"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Si tu modelo aparece, selecciónalo."
      }), "\n", createVNode(_components.li, {
        children: ["Si no aparece:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Clic en ", createVNode(_components.strong, {
              children: "Windows Update"
            }), " (puede tardar un poco) y vuelve a buscar."]
          }), "\n", createVNode(_components.li, {
            children: ["O clic en ", createVNode(_components.strong, {
              children: "Usar disco…"
            }), " si tienes el driver del fabricante."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "11",
      children: ["\n", createVNode(_components.li, {
        children: "Ponle un nombre (ej: “Impresora Cocina Red” o “Impresora Recepción”) y finaliza."
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "paso-6-imprime-una-página-de-prueba-para-verificar",
      children: "Paso 6: Imprime una página de prueba para verificar"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Vuelve a ", createVNode(_components.strong, {
          children: "Dispositivos e impresoras"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Clic derecho sobre la impresora → ", createVNode(_components.strong, {
          children: "Propiedades de la impresora"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Haz clic en ", createVNode(_components.strong, {
          children: "Imprimir página de prueba"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Si imprime correctamente, ¡listo! Ya quedó instalada por red."
    }), "\n", createVNode(_components.p, {
      children: "Si no imprime, revisa esta mini-lista:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["¿El ", createVNode(_components.code, {
          children: "ping"
        }), " a ", createVNode(_components.code, {
          children: "192.168.X.220"
        }), " responde?"]
      }), "\n", createVNode(_components.li, {
        children: ["¿La impresora y el PC están en la ", createVNode(_components.strong, {
          children: "misma red"
        }), " (mismo rango ", createVNode(_components.code, {
          children: "192.168.X"
        }), " o ", createVNode(_components.code, {
          children: "10.0.X"
        }), ")?"]
      }), "\n", createVNode(_components.li, {
        children: "¿Elegiste el driver correcto?"
      }), "\n", createVNode(_components.li, {
        children: ["Si se queda en cola: prueba cambiar el puerto a ", createVNode(_components.strong, {
          children: "RAW 9100"
        }), " en:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Propiedades de la impresora → pestaña ", createVNode(_components.strong, {
              children: "Puertos"
            }), " → ", createVNode(_components.strong, {
              children: "Configurar puerto…"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "conclusión",
      children: "Conclusión"
    }), "\n", createVNode(_components.p, {
      children: ["Instalar una impresora por red en Windows se vuelve mucho más fácil (y estable) cuando le asignas una ", createVNode(_components.strong, {
        children: "IP fija"
      }), ". Siguiendo este paso a paso —USB para configurar, ", createVNode(_components.code, {
        children: "ipconfig"
      }), " para validar el rango, ", createVNode(_components.strong, {
        children: ["Printer Test desde ", createVNode(_components.code, {
          children: "printer_test_v_3_1.zip"
        })]
      }), " para asignar la IP terminada en ", createVNode(_components.strong, {
        children: ".220"
      }), ", y luego agregarla por ", createVNode(_components.strong, {
        children: "TCP/IP"
      }), "— tendrás una impresora lista para usarse desde varios equipos sin dolores de cabeza."]
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

const url = "src/blog/instalacion-de-impresora-por-red.mdx";
const file = "/home/runner/work/landing/landing/src/blog/instalacion-de-impresora-por-red.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/landing/landing/src/blog/instalacion-de-impresora-por-red.mdx";
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
