function toggleContent() {
    const content = document.getElementById("toggle-content");
    
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none"; 
    }
  }
  function toggleContent1() {
    const content = document.getElementById("toggle-content1");
    
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none"; 
    }
  }
  function toggleContent2() {
    const content = document.getElementById("toggle-content2");
    
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none"; 
    }
  }
  function toggleContent3() {
    const content = document.getElementById("toggle-content3");
    
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none"; 
    }
  }
  function switchTheme() {
    document.body.classList.toggle("dark-theme");
    
  }

const items = document.querySelectorAll('.carousel-item'); 
  let currentIndex = 0;

  function showSlide(index) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }

  function next() {
    currentIndex = (currentIndex + 1) % items.length; 
    showSlide(currentIndex);
  }

  function prev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length; 
    showSlide(currentIndex);}



    function toggleAccordion(id) {
      const content = document.getElementById(id);

      content.classList.toggle('show');

      const allContents = document.querySelectorAll('.card-content');
      allContents.forEach(otherContent => {
        if (otherContent.id !== id) {
          otherContent.classList.remove('show');
        }
      });
    }
    
    const thumbnails = document.querySelectorAll('.thumbnail');

    const modalImage = document.getElementById('modalImage');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-src');
            modalImage.setAttribute('src', imageSrc)        });
          });
      