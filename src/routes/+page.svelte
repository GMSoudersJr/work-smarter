<section class="home-page">
  <h2 class="header all-caps-600">
    Hi!
  </h2>
  <p id="paragraph-1" class="regular-font">
    Apps to <mark class="highlight">optimize</mark> your work
  </p>


  <section class="nav-grid">

    <nav class="navigation">
      <div class="nav-card">
        <a href="/randomtimize" class="regular-font">Optimized Randomizer</a>
      </div>
    </nav>

  </section>
</section>

<style>
  .home-page {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    row-gap: 2rem;
    margin-top: 2rem;

    #paragraph-1 {
      grid-column: 1/13;
      place-self: center;
    }
  }

  .header {
    grid-column: 1/13;
    place-self: center;
    color: var(--purple);
  }

  .highlight {
    color: var(--purple);
    font-weight: 600;
  }

  .nav-grid {
    grid-column: 1/13;
    place-self: center;
  }
</style>
