function scrollTo(id) {
    const target = document.getElementById(id);
    target.scrollIntoView({
        behavior: 'smooth'
    });
    }

    const Tombolhome = document.getElementById('tombolHome');
    Tombolhome.addEventListener('click', function(event) {
    event.preventDefault();
    scrollTo('home');
    });

    const Tombollayanan = document.getElementById('tombolLayanan');
    Tombollayanan.addEventListener('click', function(event) {
    event.preventDefault();
    scrollTo('layanan');
    });

    const Tombolmetode = document.getElementById('tombolMetode');
    Tombolmetode.addEventListener('click', function(event) {
    event.preventDefault();
    scrollTo('metode');
    });