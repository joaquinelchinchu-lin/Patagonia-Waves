// ============================================
// DATOS DE PAQUETES TURÍSTICOS
// ============================================
const paquetes = [
    // TURISMO RECEPTIVO (LOCAL - PATAGONIA)
    {
        id: 1,
        nombre: "Avistaje de Ballenas",
        precio: 45000,
        categoria: "receptivo",
        tipo: "local",
        descripcion: "El Golfo Nuevo concentra la mayor cantidad de Ballenas Francas Australes. Saltos, coletazos y ballenatos en su hábitat natural.",
        duracion: "3-4 horas",
        imagen: "https://valleyadventours.com/wp-content/uploads/2017/10/avistamiento-ballenas-valley-adventours.jpg",
        incluye: ["Guía profesional", "Transporte", "Navegación"]
    },
    {
        id: 2,
        nombre: "Pingüinera Punta Tombo Full Day",
        precio: 38000,
        categoria: "receptivo",
        tipo: "local",
        descripcion: "Colonia de pingüinos de Magallanes más importante de Sudamérica. Experiencia única entre miles de pingüinos.",
        duracion: "10 horas",
        imagen: "https://tse3.mm.bing.net/th/id/OIP.vfgUiRH1J_hD1zsNWLWQnwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        incluye: ["Transporte", "Guía profesional", "Centro de visitantes"]
    },
    {
        id: 3,
        nombre: "Península Valdés Full Day",
        precio: 52000,
        categoria: "receptivo",
        tipo: "local",
        descripcion: "Recorrido de 380 km en reserva de fauna con mayor biodiversidad de Patagonia. Lobos, elefantes marinos y más.",
        duracion: "10 horas",
        imagen: "https://cdn.getyourguide.com/img/location/5ee89259e8b12.jpeg/88.jpg",
        incluye: ["Transporte", "Guía profesional", "Centro de Interpretación"]
    },
    {
        id: 4,
        nombre: "City Tour Puerto Madryn con Lobería",
        precio: 15000,
        categoria: "receptivo",
        tipo: "local",
        descripcion: "Recorrido por casco histórico, centro comercial y Punta Loma para observar lobos marinos desde miradores.",
        duracion: "4 horas",
        imagen: "https://tripin.travel/wp-content/uploads/2018/01/1-playa-madryn9-Foto-Maxi-Jonas.jpg",
        incluye: ["Transporte", "Guía profesional", "Miradores"]
    },
    
    // AMÉRICA DEL NORTE - INTERNACIONAL
    {
        id: 5,
        nombre: "Circuito 8 días por Canadá",
        precio: 2607298,
        categoria: "internacional",
        tipo: "america-norte",
        descripcion: "Ottawa, Montreal y Cataratas del Niágara. Descubre los grandes tesoros de Canadá en circuito con guía en español.",
        duracion: "8 días",
        imagen: "https://www.vacacionesnuevayork.com/wp-content/uploads/2021/12/excursion-cataratas-niagara-razones-viajar.jpg",
        incluye: ["Guía en español", "7 noches con desayuno", "Tours panorámicos", "Crucero"]
    },
    {
        id: 6,
        nombre: "Excursión Gran Cañón desde Las Vegas",
        precio: 252512,
        categoria: "internacional",
        tipo: "america-norte",
        descripcion: "West Rim del Gran Cañón con guía en español. Incluye presa Hoover, Guano Point y Eagle Point con tribu Hualapai.",
        duracion: "9-11 horas",
        imagen: "https://th.bing.com/th/id/OIP.Khaks1yin1HKYdHp1zw3gwHaEc?w=474&h=284&rs=1&pid=ImgDetMain",
        incluye: ["Transporte", "Guía español", "Almuerzo", "Entrada Skywalk opcional"]
    },
    {
        id: 7,
        nombre: "Cataratas del Niágara - Espectáculo Nocturno",
        precio: 180000,
        categoria: "internacional",
        tipo: "america-norte",
        descripcion: "Lado canadiense con cascadas de día y mágico espectáculo de luces nocturno. Experiencia completa.",
        duracion: "10-11 horas",
        imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/ed/a5/17/foz-do-iguacu.jpg?w=900&h=500&s=1",
        incluye: ["Transporte", "Guía", "Paseo en barco", "Cena 3 platos"]
    },
    {
        id: 8,
        nombre: "Tour Aurora Boreal + Termas Chena",
        precio: 320000,
        categoria: "internacional",
        tipo: "america-norte",
        descripcion: "Combinación perfecta en Fairbanks: Aurora boreal y relajación en termas naturales. Experiencia inolvidable.",
        duracion: "17 horas",
        imagen: "https://images.squarespace-cdn.com/content/v1/5f4032978f7b8279d7fe55f9/8e35a37d-cf65-40cb-b5aa-bde7d80e8336/chenahotsprings.jpg",
        incluye: ["Transporte", "Guía", "Entrada termas", "Aurora Ice Museum"]
    },
    
    // AMÉRICA DEL SUR - NACIONAL
    {
        id: 9,
        nombre: "Glaciar Perito Moreno con Navegación",
        precio: 285000,
        categoria: "nacional",
        tipo: "america-sur",
        descripcion: "El Calafate: Glaciar Perito Moreno con pasarelas y navegación opcional. Uno de los glaciares más imponentes del mundo.",
        duracion: "8 horas",
        imagen: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/c3/fa/94.jpg",
        incluye: ["Transporte", "Guía", "Entrada parque", "Navegación opcional"]
    },
    {
        id: 10,
        nombre: "Cataratas del Iguazú - Lado Argentino",
        precio: 195000,
        categoria: "nacional",
        tipo: "america-sur",
        descripcion: "Maravilla natural del mundo. Circuitos superior e inferior, Garganta del Diablo y selva subtropical.",
        duracion: "8 horas",
        imagen: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/10/0b/4a/a3.jpg",
        incluye: ["Entrada parque", "Tren ecológico", "Guía", "Transporte"]
    },
    
    // AMÉRICA DEL SUR - INTERNACIONAL
    {
        id: 11,
        nombre: "Tour Río de Janeiro: Corcovado y Pan de Azúcar",
        precio: 420000,
        categoria: "internacional",
        tipo: "america-sur",
        descripcion: "Visita los iconos de Río: Cristo Redentor en Corcovado y teleférico al Pan de Azúcar con vistas panorámicas.",
        duracion: "8 horas",
        imagen: "https://lh3.googleusercontent.com/-RpuApDHrrM0/UgibjhV4jQI/AAAAAAAACKE/iE4Mr_IhiOQ/s600/riodejaneiro.jpg",
        incluye: ["Guía español", "Transporte", "Entradas", "Teleférico"]
    },
    {
        id: 12,
        nombre: "Tour Multi-Islas Cartagena",
        precio: 350000,
        categoria: "internacional",
        tipo: "america-sur",
        descripcion: "Colombia: Islas del Rosario y playas paradisíacas. Snorkel, playas de arena blanca y aguas cristalinas.",
        duracion: "8 horas",
        imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/10/1a/67/caption.jpg?w=500&h=400&s=1",
        incluye: ["Transporte marítimo", "Almuerzo", "Equipo snorkel", "Guía"]
    },
    {
        id: 13,
        nombre: "Viña del Mar y Valparaíso desde Santiago",
        precio: 290000,
        categoria: "internacional",
        tipo: "america-sur",
        descripcion: "Chile: Ciudad jardín, Valparaíso patrimonio UNESCO, viñedos de Casablanca y costa del Pacífico.",
        duracion: "10 horas",
        imagen: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/d7/d9/f1.jpg",
        incluye: ["Transporte", "Guía", "Degustación vinos", "Almuerzo"]
    },
    
    // ASIA - INTERCONTINENTAL
    {
        id: 14,
        nombre: "Circuito Japón: Tokyo, Fuji y Kioto - 7 días",
        precio: 4850000,
        categoria: "intercontinental",
        tipo: "asia",
        descripcion: "Experiencia completa: Tokyo moderno, Monte Fuji sagrado, Kioto ancestral. Templos, geishas, tecnología y tradición.",
        duracion: "7 días",
        imagen: "https://media.tacdn.com/media/attractions-splice-spp-674x446/13/2b/81/01.jpg",
        incluye: ["6 noches alojamiento", "Guía español", "Desayunos", "3 cenas", "Entradas templos"]
    },
    
    // EUROPA - INTERCONTINENTAL
    {
        id: 15,
        nombre: "Grecia al Completo - 7 días",
        precio: 1052940,
        categoria: "intercontinental",
        tipo: "europa",
        descripcion: "Atenas, Olimpia, Delfos y Meteora. Acrópolis, estadio olímpico, monasterios en las nubes. Historia viva de Grecia.",
        duracion: "7 días",
        imagen: "https://travelviajes.net/image/acropolis-de-atenas-grecia-174.jpg",
        incluye: ["6 noches", "Desayunos", "3 cenas", "Guía hispana", "Entradas incluidas"]
    }
];

// ============================================
// VARIABLES GLOBALES
// ============================================
let carrito = [];
let filtroCategoria = 'todos';
let busquedaTexto = '';

// ============================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    inicializarAplicacion();
});

function inicializarAplicacion() {
    cargarCarritoDesdeStorage();
    renderizarPaquetes();
    configurarEventListeners();
    actualizarContadorCarrito();
}

// ============================================
// GESTIÓN DEL CARRITO CON WHATSAPP
// ============================================
function agregarAlCarrito(idPaquete) {
    const paquete = paquetes.find(p => p.id === idPaquete);
    
    if (paquete) {
        const existeEnCarrito = carrito.find(item => item.id === idPaquete);
        
        if (!existeEnCarrito) {
            carrito.push({
                ...paquete,
                cantidad: 1
            });
            
            guardarCarritoEnStorage();
            actualizarContadorCarrito();
            renderizarCarrito();
            mostrarNotificacion(`${paquete.nombre} agregado al carrito`, 'success');
            
            // 🚀 NOTIFICACIÓN POR WHATSAPP AL AGREGAR AL CARRITO
           
            
        } else {
            mostrarNotificacion('Este paquete ya está en tu carrito', 'warning');
        }
    }
}

// ============================================
// FUNCIÓN PARA ENVIAR NOTIFICACIÓN WHATSAPP
// ============================================
function enviarNotificacionWhatsApp(paquete) {
    // Construir el mensaje personalizado
    let mensaje = `🎉 *¡Paquete agregado al carrito!*\n\n`;
    mensaje += `📦 *Paquete:* ${paquete.nombre}\n`;
    mensaje += `💰 *Precio:* $${paquete.precio.toLocaleString('es-AR')}\n`;
    mensaje += `⏱️ *Duración:* ${paquete.duracion}\n`;
    mensaje += `📝 *Descripción:* ${paquete.descripcion}\n\n`;
    mensaje += `🛒 *Productos en tu carrito:* ${carrito.length}\n`;
    mensaje += `💵 *Total actual:* $${calcularTotalCarrito().toLocaleString('es-AR')}\n\n`;
    mensaje += `¿Necesitas más información o quieres confirmar tu reserva? ¡Contáctanos!`;
    
    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Número de WhatsApp de TuriMadryn (puedes cambiarlo)
    const numeroWhatsApp = "5492804726682"; // Formato: código país + código área + número
    
    // Abrir WhatsApp en una nueva pestaña
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    window.open(urlWhatsApp, '_blank');
}

function eliminarDelCarrito(idPaquete) {
    const index = carrito.findIndex(item => item.id === idPaquete);
    
    if (index !== -1) {
        const paqueteEliminado = carrito[index];
        carrito.splice(index, 1);
        
        guardarCarritoEnStorage();
        actualizarContadorCarrito();
        renderizarCarrito();
        mostrarNotificacion(`${paqueteEliminado.nombre} eliminado del carrito`, 'info');
    }
}

function vaciarCarrito() {
    if (carrito.length > 0) {
        carrito = [];
        guardarCarritoEnStorage();
        actualizarContadorCarrito();
        renderizarCarrito();
        mostrarNotificacion('Carrito vaciado', 'info');
    }
}

function calcularTotalCarrito() {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
}

function actualizarContadorCarrito() {
    const contador = document.getElementById('carrito-contador');
    if (contador) {
        contador.textContent = carrito.length;
    }
}

// ============================================
// RENDERIZADO DE PAQUETES
// ============================================
function renderizarPaquetes() {
    const grid = document.getElementById('paquetes-grid');
    const contador = document.getElementById('contador-paquetes');
    
    if (!grid) return;
    
    const paquetesFiltrados = filtrarPaquetes();
    
    if (contador) {
        contador.textContent = paquetesFiltrados.length;
    }
    
    if (paquetesFiltrados.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h4 class="text-muted">No se encontraron paquetes</h4>
                <p class="text-muted">Intenta con otros filtros o términos de búsqueda</p>
            </div>
        `;
    } else {
        grid.innerHTML = paquetesFiltrados.map(paquete => crearCardPaquete(paquete)).join('');
    }
}

function filtrarPaquetes() {
    return paquetes.filter(paquete => {
        const coincideCategoria = filtroCategoria === 'todos' || paquete.categoria === filtroCategoria;
        
        const coincideTexto = !busquedaTexto || 
            paquete.nombre.toLowerCase().includes(busquedaTexto.toLowerCase()) ||
            paquete.descripcion.toLowerCase().includes(busquedaTexto.toLowerCase());
        
        return coincideCategoria && coincideTexto;
    });
}

function crearCardPaquete(paquete) {
    let categoriaInfo = obtenerInfoCategoria(paquete.categoria);
    
    return `
        <div class="col-md-6 col-lg-4">
            <div class="card paquete-card shadow-sm h-100">
                <div class="position-relative overflow-hidden">
                    <img src="${paquete.imagen}" class="card-img-top" alt="${paquete.nombre}">
                    <div class="categoria-badge" style="background-color: ${categoriaInfo.color};">
                        ${categoriaInfo.texto}
                    </div>
                    <div class="precio-badge">
                        <p class="precio">$${paquete.precio.toLocaleString('es-AR')}</p>
                        <p class="por-persona">por persona</p>
                    </div>
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${paquete.nombre}</h5>
                    <p class="card-text text-muted flex-grow-1">${paquete.descripcion}</p>
                    
                    <div class="paquete-info">
                        <div class="paquete-info-item">
                            <i class="fas fa-clock"></i>
                            <span>${paquete.duracion}</span>
                        </div>
                        <div class="paquete-info-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${obtenerDestinoTexto(paquete.tipo)}</span>
                        </div>
                    </div>
                    
                    <button class="btn btn-agregar mt-3" onclick="agregarAlCarrito(${paquete.id})">
                        <i class="fas fa-cart-plus me-2"></i>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    `;
}

function obtenerInfoCategoria(categoria) {
    const categorias = {
        'receptivo': { texto: 'Turismo Receptivo', color: '#06d6a0' },
        'nacional': { texto: 'Nacional', color: '#4361ee' },
        'internacional': { texto: 'Internacional', color: '#ff9f1c' },
        'intercontinental': { texto: 'Intercontinental', color: '#e63946' }
    };
    return categorias[categoria] || { texto: categoria, color: '#00b4d8' };
}

function obtenerDestinoTexto(tipo) {
    const destinos = {
        'local': 'Puerto Madryn',
        'america-norte': 'América del Norte',
        'america-sur': 'América del Sur',
        'asia': 'Asia',
        'europa': 'Europa'
    };
    return destinos[tipo] || 'Internacional';
}

// ============================================
// RENDERIZADO DEL CARRITO
// ============================================
function renderizarCarrito() {
    const lista = document.getElementById('carrito-lista');
    const acciones = document.getElementById('carrito-acciones');
    const total = document.getElementById('carrito-total');
    
    if (!lista) return;
    
    if (carrito.length === 0) {
        lista.innerHTML = `
            <div id="carrito-vacio" class="card border-0 shadow-sm rounded-4 p-5 text-center">
                <div class="mb-4">
                    <i class="fas fa-shopping-bag" style="font-size: 4rem; color: #00b4d8; opacity: 0.3;"></i>
                </div>
                <h5>Tu carrito está vacío</h5>
                <p class="text-muted">Agrega algunos paquetes increíbles para comenzar tu aventura</p>
            </div>
        `;
        acciones.classList.add('d-none');
    } else {
        lista.innerHTML = carrito.map(item => crearItemCarrito(item)).join('');
        acciones.classList.remove('d-none');
        
        if (total) {
            total.textContent = `$${calcularTotalCarrito().toLocaleString('es-AR')}`;
        }
    }
}

function crearItemCarrito(item) {
    const categoriaInfo = obtenerInfoCategoria(item.categoria);
    
    return `
        <div class="carrito-item carrito-item-enter">
            <div class="row align-items-center">
                <div class="col-md-2">
                    <img src="${item.imagen}" alt="${item.nombre}" class="img-fluid rounded">
                </div>
                <div class="col-md-6">
                    <h5 class="mb-2">${item.nombre}</h5>
                    <p class="text-muted mb-2">${item.descripcion}</p>
                    <div class="d-flex align-items-center">
                        <span class="badge text-white me-2" style="background-color: ${categoriaInfo.color};">
                            ${categoriaInfo.texto}
                        </span>
                        <span class="text-muted"><i class="fas fa-clock me-1"></i>${item.duracion}</span>
                    </div>
                </div>
                <div class="col-md-2 text-center">
                    <h5 class="text-primary">$${item.precio.toLocaleString('es-AR')}</h5>
                </div>
                <div class="col-md-2 text-end">
                    <button class="btn btn-eliminar" onclick="eliminarDelCarrito(${item.id})">
                        <i class="fas fa-trash-alt me-1"></i>
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// FILTROS Y BÚSQUEDA
// ============================================
function configurarFiltros() {
    const filtros = document.querySelectorAll('.btn-filter');
    const buscador = document.getElementById('buscar-paquete');
    
    filtros.forEach(filtro => {
        filtro.addEventListener('click', function() {
            filtros.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            filtroCategoria = this.dataset.categoria;
            renderizarPaquetes();
        });
    });
    
    if (buscador) {
        buscador.addEventListener('input', function() {
            busquedaTexto = this.value;
            renderizarPaquetes();
        });
    }
}

// ============================================
// FORMULARIO DE CONTACTO
// ============================================
function configurarFormularioContacto() {
    const formulario = document.getElementById('form-contacto');
    
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            
            if (!nombre || !email || !mensaje) {
                mostrarNotificacion('Por favor completa todos los campos', 'error');
                return;
            }
            
            mostrarNotificacion('¡Mensaje enviado! Te contactaremos pronto', 'success');
            formulario.reset();
        });
    }
}

// ============================================
// WHATSAPP INTEGRATION
// ============================================
function configurarWhatsApp() {
    const btnWhatsApp = document.getElementById('btn-whatsapp');
    
    if (btnWhatsApp) {
        btnWhatsApp.addEventListener('click', function() {
            if (carrito.length === 0) {
                mostrarNotificacion('Agrega paquetes al carrito antes de consultar', 'warning');
                return;
            }
            
            let mensaje = "¡Hola! Estoy interesado en los siguientes paquetes:\n\n";
            
            carrito.forEach(item => {
                mensaje += `• ${item.nombre} - $${item.precio.toLocaleString('es-AR')}\n`;
            });
            
            mensaje += `\nTotal: $${calcularTotalCarrito().toLocaleString('es-AR')}\n\n`;
            mensaje += "Me gustaría recibir más información sobre disponibilidad y reservas.";
            
            const mensajeCodificado = encodeURIComponent(mensaje);
            const numeroWhatsApp = "5492804726682";
            
            window.open(`https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`, '_blank');
        });
    }
}

// ============================================
// NOTIFICACIONES
// ============================================
function mostrarNotificacion(mensaje, tipo = 'info') {
    const notificacion = document.createElement('div');
    notificacion.className = 'notification';
    
    const colores = {
        success: '#06d6a0',
        error: '#ef476f',
        warning: '#ffd166',
        info: '#118ab2'
    };
    
    notificacion.style.backgroundColor = colores[tipo] || colores.info;
    notificacion.style.color = tipo === 'warning' ? '#333' : 'white';
    
    notificacion.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-${tipo === 'success' ? 'check-circle' : tipo === 'error' ? 'exclamation-circle' : 'info-circle'} me-2"></i>
            <span>${mensaje}</span>
        </div>
    `;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.style.animation = 'slideOutRight 0.5s ease forwards';
        setTimeout(() => {
            if (notificacion.parentNode) {
                notificacion.parentNode.removeChild(notificacion);
            }
        }, 500);
    }, 3000);
}

// ============================================
// LOCAL STORAGE
// ============================================
function guardarCarritoEnStorage() {
    localStorage.setItem('turimadryn-carrito', JSON.stringify(carrito));
}

function cargarCarritoDesdeStorage() {
    const carritoGuardado = localStorage.getItem('turimadryn-carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
}

// ============================================
// CONFIGURACIÓN DE EVENT LISTENERS
// ============================================
function configurarEventListeners() {
    configurarFiltros();
    configurarFormularioContacto();
    configurarWhatsApp();
    
    const btnVaciar = document.getElementById('btn-vaciar-carrito');
    if (btnVaciar) {
        btnVaciar.addEventListener('click', vaciarCarrito);
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
}

// ============================================
// FUNCIONES GLOBALES PARA HTML
// ============================================
window.agregarAlCarrito = agregarAlCarrito;
window.eliminarDelCarrito = eliminarDelCarrito;
window.vaciarCarrito = vaciarCarrito;
// ============================================
// SISTEMA DE TEMAS
// ============================================
function inicializarTemas() {
    const body = document.body;
    const opcionesTema = document.querySelectorAll('.tema-option');
    
    // Cargar tema guardado
    const temaGuardado = localStorage.getItem('tema-actual') || 'oceano';
    aplicarTema(temaGuardado);
    
    // Event listeners para cada tema
    opcionesTema.forEach(opcion => {
        opcion.addEventListener('click', function(e) {
            e.preventDefault();
            const tema = this.getAttribute('data-tema');
            aplicarTema(tema);
            localStorage.setItem('tema-actual', tema);
            
            const nombresTemas = {
                'oceano': 'Océano 🌊',
                'noche': 'Noche 🌙',
                'atardecer': 'Atardecer 🌅',
                'natura': 'Natura 🌿'
            };
            
            mostrarNotificacion(`Tema ${nombresTemas[tema]} activado`, 'success');
        });
    });
}

function aplicarTema(tema) {
    const body = document.body;
    
    // Remover todos los temas
    body.classList.remove('tema-noche', 'tema-atardecer', 'tema-natura');
    
    // Aplicar el tema seleccionado (excepto océano que es el default)
    if (tema !== 'oceano') {
        body.classList.add(`tema-${tema}`);
    }
}

// Modificar la inicialización
document.addEventListener('DOMContentLoaded', function() {
    inicializarAplicacion();
    inicializarTemas(); // ← CAMBIAR inicializarModoOscuro() por esto
});