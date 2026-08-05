$(document).ready(function() {
    
    // --- Load Officers ---
    // Runs only if the #officers-container exists on the page
    if ($('#officers-container').length) {
        $.getJSON('../../asset/data/officers.json', function(data) {
            let container = $('#officers-container');
            container.empty(); // Clear loading text

            console.log(data);
            
            $.each(data, function(index, officer) {
                // Alternating offset logic for a staggered grid look
                let offsetClass = (index % 2 === 0) ? "offset-md-2 col-md-4" : "col-md-4";
                
                let cardHtml = `
                    <div class="${offsetClass} mb-4">
                        <div class="card border-0 shadow-sm p-4 text-center custom-card h-100">
                            <h4 class="fw-bold mb-1">${officer.name}</h4>
                            <p class="text-danger fw-bold mb-3">${officer.title}</p>
                            <p class="text-muted small mb-0">${officer.bio || 'Dedicated volunteer.'}</p>
                        </div>
                    </div>
                `;
                container.append(cardHtml);
            });
        }).fail(function() {
            $('#officers-container').html('<div class="col-12 text-center text-danger">Error loading officers data.</div>');
        });
    }

    // --- Load Events ---
    // Runs only if the #events-container exists on the page
    if ($('#events-container').length) {
        $.getJSON('../../asset/data/events.json', function(data) {
            let container = $('#events-container');
            container.empty();
            
            $.each(data, function(index, event) {
                let cardHtml = `
                    <div class="col-md-8 offset-md-2 mb-3">
                        <div class="card border-0 shadow-sm custom-card">
                            <div class="card-body d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 class="fw-bold mb-1">${event.title}</h5>
                                    <p class="text-muted mb-0 small">${event.description}</p>
                                </div>
                                <div class="text-end ms-3">
                                    <span class="badge bg-danger p-2">${event.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                container.append(cardHtml);
            });
        }).fail(function() {
            $('#events-container').html('<div class="col-12 text-center text-danger">Error loading events data.</div>');
        });
    }

    // --- Volunteer Form Handling ---
    $('#volunteerForm').on('submit', function(e) {
        e.preventDefault();
        // Here you would typically send data to a backend or email service via AJAX
        alert('Thank you for your interest! Your request has been received.');
        $(this).trigger('reset');
    });

});
