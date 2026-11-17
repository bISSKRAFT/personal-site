const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Mobile navigation ---------- */
const navToggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
const nav = document.querySelector<HTMLElement>('#primary-nav');

function closeNav() {
  nav?.classList.remove('is-open');
  document.body.classList.remove('nav-open');
  navToggle?.setAttribute('aria-expanded', 'false');
}

navToggle?.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') === 'true';
  if (open) {
    closeNav();
  } else {
    nav?.classList.add('is-open');
    document.body.classList.add('nav-open');
    navToggle.setAttribute('aria-expanded', 'true');
  }
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeNav();
});

document.addEventListener('click', (event) => {
  const target = event.target;
  if (target instanceof Node && !nav?.contains(target) && !navToggle?.contains(target)) {
    closeNav();
  }
});

window.matchMedia('(min-width: 761px)').addEventListener('change', (event) => {
  if (event.matches) closeNav();
});

/* ---------- Highlight the active section in the nav ---------- */
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav a[href^="#"]'));
const observedSections = navLinks
  .map((link) => document.querySelector<HTMLElement>(link.getAttribute('href') ?? ''))
  .filter((section): section is HTMLElement => section !== null);

if ('IntersectionObserver' in window && observedSections.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const active = entries.find((entry) => entry.isIntersecting);
      if (!active) return;
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${active.target.id}`);
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
  );
  observedSections.forEach((section) => sectionObserver.observe(section));
}

/* ---------- Reveal sections as they scroll into view ---------- */
const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

// Tell the inline fail-safe in BaseLayout that the reveal script is alive.
document.documentElement.setAttribute('data-reveal-ready', '');

/* ---------- Terminal typewriter ---------- */
const typeTarget = document.querySelector<HTMLElement>('[data-type]');
if (typeTarget && !reducedMotion) {
  const message = typeTarget.dataset.type ?? '';
  typeTarget.textContent = '';
  let index = 0;
  const typeNext = () => {
    if (index > message.length) return;
    typeTarget.textContent = message.slice(0, index);
    index += 1;
    window.setTimeout(typeNext, 55);
  };
  window.setTimeout(typeNext, 500);
}

/* ---------- Live local clock ---------- */
const clock = document.querySelector<HTMLElement>('[data-clock]');
if (clock) {
  const zone = clock.dataset.timezone || 'UTC';
  let formatter: Intl.DateTimeFormat;
  try {
    formatter = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
      timeZone: zone,
    });
  } catch {
    formatter = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
      timeZone: 'UTC',
    });
  }
  const updateClock = () => {
    clock.textContent = formatter.format(new Date());
  };
  updateClock();
  window.setInterval(updateClock, 1000);
}

/* ---------- Copy email button ---------- */
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const original = button.textContent ?? '';
    try {
      await navigator.clipboard.writeText(button.dataset.copy ?? '');
      button.textContent = 'COPIED ✓';
    } catch {
      window.prompt('Copy this address:', button.dataset.copy ?? '');
    }
    window.setTimeout(() => {
      button.textContent = original;
    }, 1800);
  });
});

/* ---------- Decorative comms cipher (no real phone number exists) ---------- */
const cipherButton = document.querySelector<HTMLButtonElement>('[data-cipher-button]');
const cipherResult = document.querySelector<HTMLElement>('[data-cipher-result]');
cipherButton?.addEventListener('click', () => {
  if (!cipherResult) return;
  cipherResult.textContent = 'ACCESS DENIED // KEY NOT FOUND';
  cipherResult.classList.add('is-denied');
  cipherButton.textContent = 'LOCKED';
  cipherButton.disabled = true;
});

/* ---------- Scroll-driven HUD buffer ---------- */
const bufferReadout = document.querySelector<HTMLElement>('[data-buffer]');
const updateScrollHud = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  document.documentElement.style.setProperty('--scroll', progress.toFixed(4));
  if (bufferReadout) bufferReadout.textContent = String(Math.round(progress * 100)).padStart(2, '0');
};
window.addEventListener('scroll', updateScrollHud, { passive: true });
window.addEventListener('resize', updateScrollHud);
updateScrollHud();

/* ---------- Neural-link boot overlay (once per session) ---------- */
const boot = document.querySelector<HTMLElement>('#boot');
if (boot) {
  let seen = false;
  try {
    seen = sessionStorage.getItem('datashard-boot') === '1';
  } catch {
    // Storage may be blocked; the overlay still runs once per page load.
  }

  if (seen || reducedMotion) {
    boot.classList.add('is-done');
  } else {
    try {
      sessionStorage.setItem('datashard-boot', '1');
    } catch {
      // Ignore storage failures.
    }
    const finishBoot = () => boot.classList.add('is-done');
    window.setTimeout(finishBoot, 1250);
    boot.querySelector('[data-boot-skip]')?.addEventListener('click', finishBoot);
    boot.addEventListener('click', finishBoot);
    window.addEventListener('keydown', finishBoot, { once: true });
  }
}

/* ---------- Printable CV ---------- */
document.querySelector<HTMLButtonElement>('#print-cv')?.addEventListener('click', () => window.print());

/* ---------- Footer year ---------- */
document.querySelectorAll<HTMLElement>('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
