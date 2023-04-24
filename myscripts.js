window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('header');
    if(window.pageYOffset>0){
      nav.classList.add("add-shadow");
    }else{
      nav.classList.remove("add-shadow");
    }
  });

  const container = document.querySelector('.container');
const links = document.querySelector('.links');

// Create anchor tags and append them to the links div
for (let i = 0; i < container.children.length; i++) {
  const sectionId = container.children[i].id;
  const link = document.createElement('a');
  link.setAttribute('href', `#${sectionId}`);
  link.textContent = `Section ${i + 1}`;
  links.appendChild(link);
}

// Add click event listener to each anchor tag
links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Prevent default anchor tag behavior
    // Remove active class from all anchor tags
    links.querySelectorAll('a').forEach(link => link.classList.remove('active'));
    // Add active class to clicked anchor tag
    link.classList.add('active');
    // Get target div ID from href attribute
    const targetId = link.getAttribute('href');
    // Scroll to target div
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});