self.addEventListener('install', (e) => {
    console.log('[Service Worker] Zainstalowany pomyślnie!');
});

self.addEventListener('fetch', (e) => {
    // Na ten moment przepuszczamy wszystkie zapytania normalnie.
    // W przyszłości można tu dodać logikę działania offline.
});