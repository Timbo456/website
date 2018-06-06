tomtom.setProductInfo('Codepen Examples', '4.28.49');
var map = tomtom.map('map', {
    key: 'zCCMm7wLSUhSPodgecoEoFi4rVclAjdA',
    source: 'vector',
    basePath: 'https://api.tomtom.com/maps-sdk-js/4.28.49/examples/sdk'
});
var languageLabel = L.DomUtil.create('label');
languageLabel.innerHTML = 'Maps language';
var languageSelector = tomtom.languageSelector.getHtmlElement(tomtom.globalLocaleService, 'maps');
languageLabel.appendChild(languageSelector);
tomtom.controlPanel({
    position: 'bottomright',
    title: 'Settings',
    collapsed: true,
    closeOnMapClick: false
})
    .addTo(map)
    .addContent(languageLabel);