
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        entry.target.classList.add('aparecer');
        
        
        const paragraphs = entry.target.querySelectorAll('p');
        paragraphs.forEach((p, index) => {
          setTimeout(() => {
            p.classList.add('visible');
          }, index * 500); 
        });
  
        
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); 
  
  
  const sobreNosSection = document.querySelector('.sobreNos');
  observer.observe(sobreNosSection);

  window.onload = function() {
    
    setTimeout(() => {
        window.scrollTo(0, 0); 
    }, 100); 
};


const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();  
      
        const targetId = link.getAttribute('href').substring(1);  
        const targetElement = document.getElementById(targetId);
        
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,  
                behavior: 'smooth'  
            });
        } else {
            console.error("Elemento de destino não encontrado!");
        }
    });
});  

window.onload = function() {
            document.getElementById('popup').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
            document.getElementById('overlay').style.opacity = 1; 
        };

        
        function closePopup() {
            document.getElementById('popup').style.display = 'none';
            document.getElementById('overlay').style.opacity = 0; 
            setTimeout(function() {
                document.getElementById('overlay').style.display = 'none';
            }, 300); 
        }
  
        window.addEventListener("scroll", function() {
          var header = document.querySelector("header");
          var sobreNosSection = document.querySelector(".sobreNos");
      
          var sectionTop = sobreNosSection.getBoundingClientRect().top;
          var sectionHeight = sobreNosSection.offsetHeight;
      
          
          if (sectionTop <= 0 && sectionTop + sectionHeight > 0) {
              header.classList.add("scrolled");  
          } else {
              header.classList.remove("scrolled");
          }
      });
      