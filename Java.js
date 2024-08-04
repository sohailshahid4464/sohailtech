document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.getElementById('search-icon');
    const searchBox = document.getElementById('search-box');

    searchIcon.addEventListener('click', () => {
        searchBox.style.display = 'block';
        searchBox.focus();
    });

    searchBox.addEventListener('blur', () => {
        searchBox.style.display = 'none';
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
  
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          if (target.classList.contains('db1')) {
            target.classList.add('animated-slide-fade-in-top');
          } else if (target.classList.contains('db2')) {
            target.classList.add('animated-slide-fade-in-bottom');
          }
          observer.unobserve(target); // Unobserve the element after animation starts
        }
      });
    };
  
    const observer = new IntersectionObserver(callback, options);
  
    document.querySelectorAll('.ban .db1, .ban .db2').forEach(element => {
      observer.observe(element);
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
  
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated-slide-fade-in');
          observer.unobserve(entry.target); // Unobserve the element after animation starts
        }
      });
    };
  
    const observer = new IntersectionObserver(callback, options);
  
    document.querySelectorAll('.contain1 .box1, .contain2 .box11, .contain3 .box22').forEach(element => {
      observer.observe(element);
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.section h1, .section p, .section img');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements with the class 'animated-element'
    const elementsToAnimate = document.querySelectorAll('.animated-element');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});




  