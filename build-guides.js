document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.guideTabBtn');
  const panels = document.querySelectorAll('.guidePanel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.race;

      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      panels.forEach(panel => {
        panel.classList.toggle('active', panel.dataset.race === target);
      });
    });
  });
});
