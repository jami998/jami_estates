document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbar = document.querySelector('.navbar');
    
    mobileMenuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 100);
    });
    
    // Price range display
    const priceRange = document.getElementById('price');
    const priceValue = document.getElementById('price-value');
    
    priceRange.addEventListener('input', function() {
        const value = parseInt(this.value);
        if (value >= 1000000) {
            priceValue.textContent = `$${(value / 1000000).toFixed(1)}M`;
        } else {
            priceValue.textContent = `$${(value / 1000).toFixed(0)}K`;
        }
    });
    
    // Property search form
    const propertySearchForm = document.getElementById('property-search');
    propertySearchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const location = document.getElementById('location').value;
        const type = document.getElementById('type').value;
        const price = document.getElementById('price').value;
        
        // In a real application, you would send this data to a server
        console.log('Searching for properties with:', {
            location,
            type,
            price
        });
        
        // Show a success message (in a real app, you'd show actual search results)
        alert('Search completed! Check the console for search parameters.');
    });
    
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
    }
    
    prevBtn.addEventListener('click', function() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });
    
    nextBtn.addEventListener('click', function() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });
    
    // Auto-rotate testimonials
    setInterval(function() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this data to a server
        console.log('Contact form submitted:', {
            name,
            email,
            phone,
            message
        });
        
        // Show a success message
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        
        // In a real application, you would send this data to a server
        console.log('Newsletter subscription:', email);
        
        // Show a success message
        alert('Thank you for subscribing to our newsletter!');
        this.querySelector('input').value = '';
    });
    
    // Load properties dynamically
    const propertiesContainer = document.getElementById('properties-container');
    const properties = [

        {
            id: 1,
            title: 'Luxury Penthouse in Manhattan',
            location: 'New York, NY',
            bedrooms: 4,
            bathrooms: 3,
            area: 2800,
            price: 4500000,
            image: 'house2.jpeg'
        },

        {
            id: 2,
            title: 'Modern Villa in Beverly Hills',
            location: 'Los Angeles, CA',
            bedrooms: 5,
            bathrooms: 5,
            area: 5800,
            price: 12500000,
            image: 'house4.jpeg'
        },

        {
            id: 3,
            title: 'Waterfront Mansion in Miami',
            location: 'Miami, FL',
            bedrooms: 6,
            bathrooms: 5,
            area: 8200,
            price: 4500000,
            image: 'house3.jpg'
        },

        {
            id: 4,
            title: 'Historic Townhouse in London',
            location: 'London, UK',
            bedrooms: 4,
            bathrooms: 3,
            area: 3200,
            price: 900000,
            image: 'apartment2.jpeg'
        },

        {
            id: 5,
            title: 'French Countyside Villa in Paris',
            location: 'Provence, France',
            bedrooms: 8,
            bathrooms: 7,
            area: 12000,
            price: 1500000,
            image: 'paris.jpeg'
        },

        {
            id: 6,
            title: 'Skyline Apartment in Tokyo',
            location: 'Tokyo, Japan',
            bedrooms: 2,
            bathrooms: 2,
            area: 1800,
            price: 3800000,
            image: 'apartment.jpeg'
        },
        
    ];
    
    function displayProperties(propertiesToDisplay) {
        propertiesContainer.innerHTML = '';
        
        propertiesToDisplay.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'property-card';
            
            const priceFormatted = property.price >= 1000000 
                ? `$${(property.price / 1000000).toFixed(1)}M` 
                : `$${(property.price / 1000).toFixed(0)}K`;
            
            propertyCard.innerHTML = `
                <div class="property-img">
                    <img src="${property.image}" alt="${property.title}">
                </div>
                <div class="property-info">
                    <h3>${property.title}</h3>
                    <div class="property-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${property.location}</span>
                    </div>
                    <div class="property-features">
                        <span><i class="fas fa-bed"></i> ${property.bedrooms} Beds</span>
                        <span><i class="fas fa-bath"></i> ${property.bathrooms} Baths</span>
                        <span><i class="fas fa-ruler-combined"></i> ${property.area} sqft</span>
                    </div>
                    <div class="property-price">
                        <span class="price">${priceFormatted}</span>
                        <a href="#" class="btn">Details</a>
                    </div>
                </div>
            `;
            
            propertiesContainer.appendChild(propertyCard);
        });
    }
    
    // Display all properties initially
    displayProperties(properties);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});