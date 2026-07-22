// ================= MENU MOBILE =================


// Ambil tombol menu

const menuToggle =
    document.querySelector(".menu-toggle");


// Ambil menu navigasi

const navMenu =
    document.querySelector(".nav-menu");


// Buka dan tutup menu HP

menuToggle.addEventListener(
    "click",
    function () {

        navMenu.classList.toggle("active");

    }
);



// Tutup menu ketika link diklik

const navLinks =
    document.querySelectorAll(".nav-menu a");


navLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove(
                    "active"
                );

            }
        );

    }
);



// ================= BACK TO TOP =================


// Ambil tombol Back to Top

const backToTop =
    document.getElementById("backToTop");


// Deteksi scroll

window.addEventListener(
    "scroll",
    function () {


        if (window.scrollY > 400) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);



// Klik Back to Top

backToTop.addEventListener(
    "click",
    function () {


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


    }
);



// ================= ANIMASI SCROLL =================


// Ambil semua elemen yang ingin dianimasikan

const animatedElements =
    document.querySelectorAll(
        ".skill-card, .learning-card, .education-card, .career-goal, .contact-card"
    );


// Observer untuk mendeteksi elemen

const observer =
    new IntersectionObserver(
        function (entries) {


            entries.forEach(
                function (entry) {


                    if (entry.isIntersecting) {


                        entry.target.classList.add(
                            "visible"
                        );


                        observer.unobserve(
                            entry.target
                        );


                    }

                }
            );


        },
        {

            threshold: 0.15

        }
    );


// Jalankan observer

animatedElements.forEach(
    function (element) {

        observer.observe(
            element
        );

    }
);
