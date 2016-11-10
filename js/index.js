// Reveal Init
Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,
        transition: 'slide',
        math: {
            src: '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.5.3/MathJax.js',
            config: 'TeX-AMS_HTML-full'
        },
        dependencies: [
            {
                src: '//cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/lib/js/classList.min.js',
                condition: function () {
                    return document.body.classList;
                }
            },
            {
                src: '//cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/plugin/zoom-js/zoom.min.js',
            },
            {
                src: '//cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/plugin/highlight/highlight.min.js',
                callback: function () {
                    return hljs.initHighlightingOnLoad();
                }
            },
            {
                src: '//cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/plugin/math/math.min.js',
            }
        ]
});