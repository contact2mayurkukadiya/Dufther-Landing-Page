// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuButton.addEventListener('click', () => {
    const isMenuHidden = mobileMenu.classList.contains('hidden');
    if (isMenuHidden) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) { // md breakpoint
        mobileMenu.classList.add('hidden');
    }
});


// Sector data
const sectors = [
    {
        name: 'Pharma',
        image: '/assets/images/chemicals.png',
        icon: '/assets/icons/1.png'
    },
    {
        name: 'Manufacturing',
        image: 'assets/images/manufacturing.png',
        icon: '/assets/icons/2.png'
    },
    {
        name: 'Construction',
        image: 'assets/images/consultant.png',
        icon: '/assets/icons/3.png'
    },
    {
        name: 'Chemicals',
        image: 'assets/images/chemicals.png',
        icon: '/assets/icons/4.png'
    },
    {
        name: 'Pharma',
        image: '/assets/images/chemicals.png',
        icon: '/assets/icons/1.png'
    },
    {
        name: 'Manufacturing',
        image: 'assets/images/manufacturing.png',
        icon: '/assets/icons/2.png'
    },
    {
        name: 'Construction',
        image: 'assets/images/consultant.png',
        icon: '/assets/icons/3.png'
    },
    {
        name: 'Chemicals',
        image: 'assets/images/chemicals.png',
        icon: '/assets/icons/4.png'
    },
    {
        name: 'Pharma',
        image: '/assets/images/chemicals.png',
        icon: '/assets/icons/1.png'
    },
    {
        name: 'Manufacturing',
        image: 'assets/images/manufacturing.png',
        icon: '/assets/icons/2.png'
    },
    {
        name: 'Construction',
        image: 'assets/images/consultant.png',
        icon: '/assets/icons/3.png'
    },
    {
        name: 'Chemicals',
        image: 'assets/images/chemicals.png',
        icon: '/assets/icons/4.png'
    }
];


function createSectorCards() {
    const container = document.querySelector('#scrollContainer > div');

    sectors.forEach(sector => {
        const card = `
            <div class="flex-shrink-0 w-[328.89px] group transition-all duration-300 scroll-snap-center" >
                <div class="rounded-lg overflow-hidden bg-white hover:bg-[#F7931E] transition-colors duration-300" style="border: 0.44px solid #C1C6CF">
                    <div class="h-[88.89px] overflow-hidden">
                        <img src="${sector.image}" alt="${sector.name}" class="w-full h-full object-cover" />
                    </div>
                    <div class="p-4 h-[80px] flex items-center">
                        <div class="flex items-center gap-3">
                            <span class="" style="position: relative; top: -35px;">
                                <img class="" src="${sector.icon}" alt="${sector.name} icon">
                            </span>
                            <h3 class="tag-6 group-hover:text-white pt-8" 
                                style="position: relative; left: -81px;">
                                ${sector.name}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', card);
    });
}

// Scroll functions
function scrollLeft() {
    const container = document.querySelector('#scrollContainer > div');
    container.scrollBy({ left: -340, behavior: 'smooth' });
}

function scrollRight() {
    const container = document.querySelector('#scrollContainer > div');
    container.scrollBy({ left: 340, behavior: 'smooth' });
}

// Initialize cards when the page loads
document.addEventListener('DOMContentLoaded', createSectorCards);

document.addEventListener('DOMContentLoaded', function () {
    // Get all FAQ items
    const faqItems = document.querySelectorAll('.faq-item');

    // Add click event listener to each FAQ item
    faqItems.forEach(item => {
        const button = item.querySelector('.faq-button');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        button.addEventListener('click', () => {
            // Check if current item is already active
            const isActive = !answer.classList.contains('hidden');

            // Close all answers
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherIcon = otherItem.querySelector('.faq-icon');

                otherAnswer.classList.add('hidden');
                otherIcon.classList.remove('rotate-180');
            });

            // Toggle current item
            if (!isActive) {
                answer.classList.remove('hidden');
                icon.classList.add('rotate-180');
            }
        });
    });
});

function toggleFaq(button) {
    const item = button.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const icon = button.querySelector('svg');

    // Close all other FAQs
    document.querySelectorAll('.faq-answer').forEach(el => {
        if (el !== answer) {
            el.classList.add('hidden');
            el.closest('.faq-item').querySelector('svg').classList.remove('rotate-180');
        }
    });

    // Toggle current FAQ
    answer.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
}

function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    const accordionItem = content.closest('.accordion-item');

    // Toggle current accordion
    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

    if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        accordionItem.classList.add('active');
        // Update icon to minus
        icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    } else {
        content.style.maxHeight = '0';
        accordionItem.classList.remove('active');
        // Update icon to plus
        icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }
}

// Initialize all accordions as closed on page load
document.addEventListener('DOMContentLoaded', () => {
    // Get all accordion contents
    const allContents = document.querySelectorAll('[id^="content-"]');

    // Set initial state for all accordions
    allContents.forEach(content => {
        content.style.maxHeight = '0';
        const accordionItem = content.closest('.accordion-item');
        accordionItem.classList.remove('active');
    });
});

function toggleLike(button) {
    // Toggle filled/unfilled state
    const svg = button.querySelector('svg');
    const isLiked = button.classList.contains('text-[#FF7A3D]');

    if (isLiked) {
        // Unlike
        button.classList.remove('text-[#FF7A3D]');
        button.classList.add('text-gray-400');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
    } else {
        // Like
        button.classList.add('text-[#FF7A3D]');
        button.classList.remove('text-gray-400');
        svg.setAttribute('fill', 'currentColor');
        svg.setAttribute('stroke', 'none');
    }
}