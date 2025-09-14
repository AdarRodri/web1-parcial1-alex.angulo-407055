
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const content = document.getElementById("content");

  function getRandomPhotos(count = 6) {
    let photosHTML = "";
    for (let i = 0; i < count; i++) {
      
      const w = 250 + Math.floor(Math.random() * 100);
      const h = 250 + Math.floor(Math.random() * 100);
      
      const seed = Math.floor(Math.random() * 1000);
      photosHTML += `<img src="https://picsum.photos/${w}/${h}?random=${seed}" alt="foto random">`;
    }
    return `<h3>Fotos</h3><div class="photos-grid">${photosHTML}</div>`;
  }

  const sections = {
    muro: `
      <h3>Bienvenido al muro 👋</h3>
      <article class="post">
        <p><strong>Daniel</strong> — Hoy fue un dia muy estresante por los parciales.</p>
      </article>
      <article class="post">
        <p><strong>Ana</strong> — ¡Genial!  🎉</p>
      </article>
    `,
    info: `
      <h3>Información del perfil</h3>
      <p><strong>Nombre:</strong> Alex Angulo</p>
      <p><strong>Ubicación:</strong> Cali, Colombia</p>
      <p><strong>Estudios:</strong> Inigenieria y Desarrollo Web</p>
    `,
    photos: "", 
    boxes: `
      <h3>Boxes</h3>
      <p>Sección de cajas y proyectos guardados.</p>
    `
  };

  
  function activateSection(name, clickedTab = null) {
    tabs.forEach(t => t.classList.toggle("active", t.dataset.section === name));
    if (name === "photos") {
      content.innerHTML = getRandomPhotos(); 
    } else {
      content.innerHTML = sections[name] || sections["muro"];
    }
  }

  
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const s = tab.dataset.section;
      activateSection(s, tab);
    });
  });

  
  activateSection("muro");
});

