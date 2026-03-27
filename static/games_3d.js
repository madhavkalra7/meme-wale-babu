(() => {
  const games = Array.isArray(window.GAMES_3D) ? window.GAMES_3D : [];
  const grid = document.getElementById("games-grid");
  const count = document.getElementById("game-count");
  const queryInput = document.getElementById("game-search");

  if (!grid || !count || !queryInput) {
    return;
  }

  const getSlugFromUrl = (url) => {
    try {
      const pathParts = new URL(url).pathname.split("/").filter(Boolean);
      const rawSlug = decodeURIComponent(pathParts[pathParts.length - 1] || "");
      return rawSlug
        .toLowerCase()
        .replace(/[^a-z0-9-]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
    } catch {
      return "";
    }
  };

  const canonicalGameUrl = (url) => {
    const slug = getSlugFromUrl(url);
    return slug ? `https://www.friv4school.io/en/${slug}/` : url;
  };

  const nativeThumbnailUrl = (url) => {
    const slug = getSlugFromUrl(url);
    return slug ? `https://www.friv4school.io/images/games/${slug}.webp` : "";
  };

  const screenshotUrl = (url) => `https://image.thum.io/get/width/600/noanimate/${url}`;
  const fallbackProviderUrl = (url) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=600`;
  const localFallbackImage = "/static/images/game-fallback.svg";

  const createCard = (game) => {
    const resolvedUrl = canonicalGameUrl(game.url);
    const nativeThumb = nativeThumbnailUrl(resolvedUrl);

    const card = document.createElement("a");
    card.className = "game-card";
    card.href = resolvedUrl;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.title = `Open ${game.title} on Friv4School`;

    const thumbWrap = document.createElement("div");
    thumbWrap.className = "thumb-wrap";

    const img = document.createElement("img");
    img.className = "thumb";
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = game.title;

    const thumbnailSources = [nativeThumb, screenshotUrl(resolvedUrl), fallbackProviderUrl(resolvedUrl), localFallbackImage].filter(Boolean);
    let sourceIndex = 0;

    img.addEventListener("error", () => {
      sourceIndex += 1;
      if (sourceIndex < thumbnailSources.length) {
        img.src = thumbnailSources[sourceIndex];
      }
    });

    img.src = thumbnailSources[sourceIndex];
    thumbWrap.appendChild(img);

    const meta = document.createElement("div");
    meta.className = "meta";

    const heading = document.createElement("h3");
    heading.textContent = game.title;

    const source = document.createElement("span");
    source.textContent = "Play on Friv4School";

    meta.appendChild(heading);
    meta.appendChild(source);

    card.appendChild(thumbWrap);
    card.appendChild(meta);

    return card;
  };

  const render = (query = "") => {
    const q = query.trim().toLowerCase();
    const visibleGames = q
      ? games.filter((g) => g.title.toLowerCase().includes(q))
      : games;

    count.textContent = `${visibleGames.length} games`;

    if (visibleGames.length === 0) {
      grid.innerHTML = "<p class='empty'>No game found. Try another keyword.</p>";
      return;
    }

    grid.textContent = "";
    const fragment = document.createDocumentFragment();
    visibleGames.forEach((game) => {
      fragment.appendChild(createCard(game));
    });
    grid.appendChild(fragment);
  };

  queryInput.addEventListener("input", (event) => {
    render(event.target.value);
  });

  render();
})();
