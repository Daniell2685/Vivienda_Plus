// Validación de formularios
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = form.querySelectorAll('input, textarea, select');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });

        if (isValid) {
            alert('Formulario enviado con éxito!');
            form.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});

//  carrusel de Bootstrap 
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#carouselHero');
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 3000, // Cambia cada 3 segundos
            ride: 'carousel'
        });
    }
});



fetch('URL_DEL_SERVIDOR', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
}).then(response => response.json()).then(data => console.log(data)).catch(error => console.error('Error:', error));




document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const cards = document.querySelectorAll('.departamento-card');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const distrito = document.getElementById('ubicacion').value.toLowerCase();
        const precioMaximo = document.getElementById('precioMaximo').value;
        const habitaciones = document.getElementById('habitaciones').value;

        cards.forEach(card => {
            const cardDistrito = card.getAttribute('data-distrito');
            const cardPrecio = parseInt(card.getAttribute('data-precio'));
            const cardHabitaciones = card.getAttribute('data-habitaciones');

            let showCard = true;

            // Filtrar por distrito
            if (distrito && distrito !== '' && cardDistrito !== distrito) {
                showCard = false;
            }

            // Filtrar por precio máximo
            if (precioMaximo && precioMaximo !== '') {
                if (cardPrecio > parseInt(precioMaximo)) {
                    showCard = false;
                }
            }

            // Filtrar por habitaciones
            if (habitaciones && habitaciones !== '') {
                if (habitaciones === '3+' && cardHabitaciones !== '3' && cardHabitaciones !== '4') {
                    showCard = false;
                } else if (habitaciones !== '3+' && cardHabitaciones !== habitaciones) {
                    showCard = false;
                }
            }

            // Mostrar u ocultar la tarjeta
            card.parentElement.style.display = showCard ? 'block' : 'none';
        });

        alert('Búsqueda realizada. Revisa los resultados.');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const cards = document.querySelectorAll('.departamento-card');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const imagen = document.getElementById('imagen').value.toLowerCase();
        const precioMaximo = document.getElementById('precioMaximo').value;
        const habitaciones = document.getElementById('habitaciones').value;

        cards.forEach(card => {
            const cardImagen = card.getAttribute('data-imagen');
            const cardPrecio = parseInt(card.getAttribute('data-precio'));
            const cardHabitaciones = card.getAttribute('data-habitaciones');

            let showCard = true;

            // Filtrar por imagen
            if (imagen && imagen !== '') {
                if (cardImagen !== imagen) {
                    showCard = false;
                }
            }

            // Filtrar por precio máximo
            if (precioMaximo && precioMaximo !== '') {
                if (cardPrecio > parseInt(precioMaximo)) {
                    showCard = false;
                }
            }

            // Filtrar por habitaciones
            if (habitaciones && habitaciones !== '') {
                if (habitaciones === '3+' && cardHabitaciones !== '3' && cardHabitaciones !== '4') {
                    showCard = false;
                } else if (habitaciones !== '3+' && cardHabitaciones !== habitaciones) {
                    showCard = false;
                }
            }

            // Mostrar u ocultar la tarjeta
            card.parentElement.style.display = showCard ? 'block' : 'none';
        });

        alert('Búsqueda realizada. Revisa los resultados.');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const cards = document.querySelectorAll('.departamento-card');

    // Función para resetear la visibilidad de todas las tarjetas
    function resetCards() {
        cards.forEach(card => {
            card.parentElement.style.display = 'block';
        });
    }

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const titulo = document.getElementById('titulo').value.toLowerCase();
        const precioMaximo = document.getElementById('precioMaximo').value;
        const habitaciones = document.getElementById('habitaciones').value;

        // Ocultar todas las tarjetas primero
        cards.forEach(card => {
            card.parentElement.style.display = 'none';
        });

        let foundMatch = false;

        cards.forEach(card => {
            const cardTitulo = card.getAttribute('data-titulo').toLowerCase();
            const cardPrecio = parseInt(card.getAttribute('data-precio'));
            const cardHabitaciones = card.getAttribute('data-habitaciones');

            let showCard = true;

            // Si se selecciona un título específico, priorizar este filtro
            if (titulo && titulo !== '') {
                if (cardTitulo === titulo) {
                    showCard = true; // Mostrar solo esta tarjeta
                    foundMatch = true;
                } else {
                    showCard = false; // Ocultar todas las demás
                }
            } else {
                // Si no hay título seleccionado, aplicar filtros de precio y habitaciones
                showCard = true;

                if (precioMaximo && precioMaximo !== '') {
                    if (cardPrecio > parseInt(precioMaximo)) {
                        showCard = false;
                    }
                }

                if (habitaciones && habitaciones !== '') {
                    if (habitaciones === '3+' && cardHabitaciones !== '3' && cardHabitaciones !== '4') {
                        showCard = false;
                    } else if (habitaciones !== '3+' && cardHabitaciones !== habitaciones) {
                        showCard = false;
                    }
                }
            }

            // Mostrar u ocultar la tarjeta
            if (showCard) {
                card.parentElement.style.display = 'block';
            }
        });

        if (!foundMatch && titulo) {
            alert('No se encontró ningún departamento con ese título.');
        } else {
            alert('Búsqueda realizada. Revisa los resultados.');
        }
    });

    // Opcional: Resetear el filtro cuando se carga la página o se cambia algo
    searchForm.addEventListener('reset', () => {
        resetCards();
        alert('Filtros reiniciados. Mostrando todos los departamentos.');
    });
});