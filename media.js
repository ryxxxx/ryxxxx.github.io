const im = iframemanager();

im.run({
    currLang: 'en',
    services: {
        youtube: {
            embedUrl: 'https://www.youtube-nocookie.com/embed/{data-id}',

            thumbnailUrl: './assets/placeholder_thumbnail.jpg',

            iframe: {
                allow: 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;',
            },

            languages: {
                en: {
                    notice: 'Diese Video-Inhalte werden auf Youtube gehostet. Durch das Ansehen akzeptieren Sie die <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms" target="_blank">Bedingungen</a> von youtube.com.',
                    loadBtn: 'Video laden',
                    loadAllBtn: "Immer laden"
                }
            }
        }
    }
});
