 // Circle animation on scroll
 const circle = document.getElementById("circle");
 const trigger = document.getElementById("events");

 window.addEventListener("scroll", () => {
    const triggerRect = trigger.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = triggerRect.height;
    const triggerTop = triggerRect.top;
    const threshold = sectionHeight * 0.4; // 40% of the section
  
    // Trigger when top of section is past 40% of its height
    if (triggerTop <= windowHeight - threshold && triggerRect.bottom >= 0) {
      circle.classList.add("expanded");
    } else {
      circle.classList.remove("expanded");
    }
  });
 // Knob-based gallery
 const inputs = document.querySelectorAll('input[name="fan"]');
 const images = document.querySelectorAll('.gallery-image');
 const galleryMessage = document.querySelector('.gallery-message');
 const galleryContainer = document.querySelector('.gallery-container');

 inputs.forEach(input => {
   input.addEventListener('change', () => {
     images.forEach(img => img.classList.remove('active'));
     if (input.id === 'fan_off') {
       galleryMessage.classList.remove('hidden');
       galleryContainer.classList.remove('images-active');
     } else {
       galleryMessage.classList.add('hidden');
       galleryContainer.classList.add('images-active');
       const selectedImage = document.querySelector(`#${input.id.replace('fan_', 'image-')}`);
       if (selectedImage) {
         selectedImage.classList.add('active');
       }
     }
   });
 });