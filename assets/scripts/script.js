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

// Function to create sector cards
// Function to create sector cards
function createSectorCards() {
    const container = document.querySelector('#scrollContainer > div');

    sectors.forEach(sector => {
        const card = `
            <div class="flex-shrink-0 w-[328.89px] group transition-all duration-300">
                <div class="rounded-lg overflow-hidden bg-white hover:bg-[#F7931E] transition-colors duration-300">
                    <div class="h-[88.89px] overflow-hidden">
                        <img src="${sector.image}" alt="${sector.name}" class="w-full h-full object-cover" />
                    </div>
                    <div class="p-4 h-[80px] flex items-center">
                        <div class="flex items-center gap-3">
                            <span class="" style="position: relative; top: -35px;">
                                <img class="" src="${sector.icon}" alt="${sector.name} icon">
                            </span>
                            <h3 class="text-lg font-medium text-[#11527E] group-hover:text-white pt-8" 
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
