// LTIMindtree Milestones Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeNavigation();
    initializeTimelines();
    initializeScrollAnimations();
    initializeMilestoneInteractions();
});

// Navigation functionality
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.timeline-section');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            
            // Update active navigation button
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section and hide others
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('active');
                    section.style.display = 'block';
                    // Trigger entrance animation
                    setTimeout(() => {
                        section.classList.add('animate-in');
                    }, 50);
                } else {
                    section.classList.remove('active', 'animate-in');
                    section.style.display = 'none';
                }
            });
            
            // Smooth scroll to the section
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// Timeline animations and interactions
function initializeTimelines() {
    const milestones = document.querySelectorAll('.milestone');
    
    milestones.forEach((milestone, index) => {
        // Add staggered entrance animation
        milestone.style.animationDelay = `${index * 0.1}s`;
        
        // Add click interaction for detailed view
        milestone.addEventListener('click', function() {
            this.classList.toggle('expanded');
            
            // Create or toggle detailed info
            let details = this.querySelector('.milestone-details');
            if (!details) {
                details = createMilestoneDetails(this);
                this.appendChild(details);
            }
            
            details.style.display = details.style.display === 'none' ? 'block' : 
                                   details.style.display === 'block' ? 'none' : 'block';
        });
    });
}

// Create detailed milestone information
function createMilestoneDetails(milestone) {
    const details = document.createElement('div');
    details.className = 'milestone-details';
    details.style.display = 'none';
    
    const year = milestone.querySelector('.year').textContent;
    const title = milestone.querySelector('h3').textContent;
    
    // Add contextual information based on the milestone
    const detailsContent = getMilestoneDetails(year, title);
    details.innerHTML = detailsContent;
    
    return details;
}

// Get detailed information for specific milestones
function getMilestoneDetails(year, title) {
    const details = {
        '1996': 'L&T Infotech was established as the IT services arm of Larsen & Toubro, leveraging the parent company\'s engineering expertise to enter the growing IT services market.',
        '1999': 'Founded by 10 IT professionals who left Wipro, Mindtree started with a vision to create a different kind of IT services company focused on collaborative culture.',
        '2002': 'The IPO raised ₹47.7 crores and marked L&T Infotech\'s entry into public markets, providing capital for expansion.',
        '2007': 'Mindtree\'s IPO was oversubscribed 7 times, raising ₹240 crores and establishing it as a major player in the IT services industry.',
        '2019': 'L&T acquired 20.32% stake in Mindtree for ₹3,269 crores, followed by an open offer, despite resistance from Mindtree\'s management.',
        '2021': 'The consolidation process began with L&T owning 74.39% of Mindtree, setting the stage for the eventual merger.',
        '2022': 'The merger created LTIMindtree, a $3.5 billion revenue company combining complementary strengths in digital transformation and engineering services.'
    };
    
    return `<p>${details[year] || 'This milestone represents a significant step in the company\'s evolution and growth journey.'}</p>`;
}

// Scroll-based animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Special handling for timeline milestones
                if (entry.target.classList.contains('milestone')) {
                    const timeline = entry.target.closest('.timeline');
                    if (timeline) {
                        timeline.classList.add('active-timeline');
                    }
                }
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll('.milestone, .capability-card, .hero-content');
    animatableElements.forEach(el => observer.observe(el));
}

// Enhanced milestone interactions
function initializeMilestoneInteractions() {
    const milestones = document.querySelectorAll('.milestone');
    
    milestones.forEach(milestone => {
        // Hover effect enhancements
        milestone.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
        });
        
        milestone.addEventListener('mouseleave', function() {
            if (!this.classList.contains('expanded')) {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            }
        });
    });
}

// Utility function for smooth animations
function animateElement(element, animation, duration = 500) {
    element.style.animation = `${animation} ${duration}ms ease-in-out`;
    
    setTimeout(() => {
        element.style.animation = '';
    }, duration);
}

// Timeline progress indicator
function updateTimelineProgress() {
    const timelines = document.querySelectorAll('.timeline');
    
    timelines.forEach(timeline => {
        const milestones = timeline.querySelectorAll('.milestone');
        const visibleMilestones = Array.from(milestones).filter(milestone => {
            const rect = milestone.getBoundingClientRect();
            return rect.top < window.innerHeight && rect.bottom > 0;
        });
        
        const progress = (visibleMilestones.length / milestones.length) * 100;
        timeline.style.setProperty('--progress', `${progress}%`);
    });
}

// Update progress on scroll
window.addEventListener('scroll', updateTimelineProgress);

// Responsive navigation for mobile
function initializeMobileNavigation() {
    const nav = document.querySelector('.timeline-nav');
    if (window.innerWidth <= 768) {
        nav.classList.add('mobile-nav');
    }
}

// Initialize mobile features
window.addEventListener('resize', initializeMobileNavigation);
initializeMobileNavigation();

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    const activeSection = document.querySelector('.timeline-section.active');
    const navButtons = document.querySelectorAll('.nav-btn');
    const activeIndex = Array.from(navButtons).findIndex(btn => btn.classList.contains('active'));
    
    if (e.key === 'ArrowLeft' && activeIndex > 0) {
        navButtons[activeIndex - 1].click();
    } else if (e.key === 'ArrowRight' && activeIndex < navButtons.length - 1) {
        navButtons[activeIndex + 1].click();
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate hero section on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});
