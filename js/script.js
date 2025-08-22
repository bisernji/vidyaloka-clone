$(document).ready(function() {
    // Initialize dropdown functionality
    $('.dropdown-toggle').dropdown();

    // Initialize slick carousel if it exists
    if ($('.slick-carousel').length) {
        $('.slick-carousel').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
        });
    }

    // User dropdown toggle
    $('#login-trigger').on('click', function(e) {
        e.preventDefault();
        $('#userDropdown').toggle();
    });

    // Close dropdown when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.user_icon').length) {
            $('#userDropdown').hide();
        }
    });

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
    
    // Theme toggle functionality
    const toggleSwitch = document.querySelector('#checkbox');
    const currentTheme = localStorage.getItem('theme');
    
    // Check if a theme preference exists in localStorage
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
    
    // Function to switch theme
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            addDarkModeAnimations();
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            removeDarkModeAnimations();
        }
    }
    
    // Event listener for theme switch
    toggleSwitch.addEventListener('change', switchTheme, false);
    
    // Add animations specific to dark mode
    function addDarkModeAnimations() {
        // Add glow animation to certain elements in dark mode
        $('.navbar-brand img').css('animation', 'glow 3s infinite');
        $('#home_banner .right_col::before').css('animation', 'spin 20s linear infinite, glow 4s infinite');
        
        // Add floating animation to buttons
        $('.yellow_btn, .border_btn').css('animation', 'float 6s ease-in-out infinite');
    }
    
    // Remove dark mode specific animations
    function removeDarkModeAnimations() {
        $('.navbar-brand img').css('animation', 'none');
        $('#home_banner .right_col::before').css('animation', 'spin 20s linear infinite');
        $('.yellow_btn, .border_btn').css('animation', 'none');
    }
    
    // Initialize animations based on current theme
    if (currentTheme === 'dark') {
        addDarkModeAnimations();
    }
    
    // Add page transition animations
    $('body').css('opacity', '0').animate({opacity: 1}, 800);
    
    // Add reveal animations for elements as they scroll into view
    $(window).on('scroll', function() {
        $('.row').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
                $(this).addClass('animated fadeInUp');
            }
        });
    });
});