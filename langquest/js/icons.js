/* TedraLingo — one icon set for the interface (24×24 line icons, colour from currentColor)
 *
 *   LQIcons.svg(name, size?)   → inline <svg> markup
 *   LQIcons.station(stationId) → the icon of a map stop
 * Content pictures (a phrase's emoji) stay as they are; buttons, the header and the map use these.
 */
(function () {
  const P = {
    settings: '<path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1"/><circle cx="15" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="18" r="2"/>',
    book: '<path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5z"/><path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H19v-3"/><path d="M9 7h6"/>',
    star: '<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z"/>',
    flame: '<path d="M12 2.5c.6 3.6 5 5.6 5 10.8a5 5 0 0 1-10 0c0-2.4 1.1-3.9 2.4-4.9.3 1.5 1 2.5 2.4 3-.1-3 -.8-5.9.2-8.9z"/>',
    crown: '<path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5z"/><path d="M5 16h14"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    play: '<path d="M8 5l11 7-11 7z"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    volume: '<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 9a4 4 0 0 1 0 6M19 6.5a8 8 0 0 1 0 11"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    redo: '<path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v5h-5"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
    trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8M10 17h4"/>',
    snowflake: '<path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7"/><path d="M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5"/>',
    headphones: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><path d="M4 15a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2zM20 15a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    game: '<path d="M7 7h10a5 5 0 0 1 5 5v.5a3.5 3.5 0 0 1-6.3 2.1L15 14H9l-.7.6A3.5 3.5 0 0 1 2 12.5V12a5 5 0 0 1 5-5z"/><path d="M7 10.5v3M5.5 12h3"/><circle cx="16" cy="11" r=".6"/><circle cx="18" cy="13" r=".6"/>',
    turtle: '<path d="M3 16a7 6 0 0 1 14 0z"/><path d="M7 10.5l3 5.5 3-5.5M5 13h10"/><circle cx="19.5" cy="13.5" r="1.8"/><path d="M17 15.5l1.2-.8M6 16v2.5M14 16v2.5"/>',
    prev: '<path d="M15 6l-6 6 6 6"/>',
    next: '<path d="M9 6l6 6-6 6"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',
    bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    gift: '<rect x="3" y="8" width="18" height="5" rx="1"/><path d="M5 13v8h14v-8M12 8v13M12 8C10 4 6 4 7 7c.5 1.5 5 1 5 1zM12 8c2-4 6-4 5-1-.5 1.5-5 1-5 1z"/>',
    headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/><path d="M19 19a3 3 0 0 1-3 3h-3"/>',
    // map stops
    plane: '<path d="M10.2 13.8L3 11.5l1.4-1.4 7.4.9 4.4-4.5c1-1 2.5-1.4 3.2-.7s.3 2.2-.7 3.2l-4.5 4.4.9 7.4-1.4 1.4-2.3-7.2-3.3 3.3.2 2.2-1.1 1.1-1.4-2.9-2.9-1.4 1.1-1.1 2.2.2z"/>',
    car: '<path d="M4 16l1.6-5.1A2 2 0 0 1 7.5 9.5h9a2 2 0 0 1 1.9 1.4L20 16v3H4z"/><path d="M4 16h16M9 9.5V7h6v2.5"/><circle cx="8" cy="16" r="1.2"/><circle cx="16" cy="16" r="1.2"/>',
    bed: '<path d="M3 19V6M3 14h18v5M21 19v-2"/><path d="M7 14v-2.5A1.5 1.5 0 0 1 8.5 10H11v4M11 10h6a4 4 0 0 1 4 4"/>',
    coffee: '<path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 3v3M12 3v3M4 21h13"/>',
    utensils: '<path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10"/><path d="M17 3c-2 2-2.5 5-2.5 7.5H17V21M17 3v7.5"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    landmark: '<path d="M3 21h18M4 10h16M12 3l9 5H3zM6 10v8M10 10v8M14 10v8M18 10v8"/>',
    bag: '<path d="M5 8h14l-1 13H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    chats: '<path d="M14 9a5 5 0 0 1-7.3 4.4L3 14.5l1-3.4A5 5 0 1 1 14 9z"/><path d="M9.7 16.3A5 5 0 0 0 17.3 18l3.7 1-1-3.4A5 5 0 0 0 16.2 8"/>',
    firstaid: '<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M9 6V4h6v2M12 10v6M9 13h6"/>'
  };
  const STATION = { airport: 'plane', taxi: 'car', hotel: 'bed', cafe: 'coffee', restaurant: 'utensils', directions: 'compass',
    sights: 'landmark', shopping: 'bag', smalltalk: 'chats', emergency: 'firstaid' };

  function svg(name, size = 22, cls = '') {
    const body = P[name] || P.sparkle;
    return `<svg class="ico ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
  }
  const station = (id, size) => svg(STATION[id] || 'compass', size);

  window.LQIcons = { svg, station, names: Object.keys(P) };
})();
