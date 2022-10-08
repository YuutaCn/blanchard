import { mobileCheck } from "../functions/mobile-check";
if (mobileCheck() === "Android" || mobileCheck() === "iOS") {
  ymaps.ready(['Panel']).then(function () {
    var map = new ymaps.Map("map", {
      center: [55.760236, 37.614877],
      zoom: 14,
      controls: [],
      behaviors: ['multiTouch']
      // behaviors: ['drag']
    });
    var office = '';
    var panel = new ymaps.Panel();
    map.controls.add(panel, {
    });
    var collection = new ymaps.GeoObjectCollection(null, {
      hasBalloon: false,
      iconLayout: 'default#image',
      iconImageHref: 'img/svg/marker.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [7, 5],
    });
    collection
    .add(new ymaps.Placemark([55.760236, 37.614877], {
      balloonContent: office
    }));
    map.geoObjects.add(collection);
    collection.events.add('click', function (e) {
      var target = e.get('target');
      panel.setContent(target.properties.get('balloonContent'));
    });
  });
} else {
  ymaps.ready(['Panel']).then(function () {
    var map = new ymaps.Map("map", {
      center: [55.760236, 37.614877],
      zoom: 14,
      controls: [],
      // behaviors: ['multiTouch']
      // behaviors: ['drag']
    });
    var office = '';
    var panel = new ymaps.Panel();
    map.controls.add(panel, {
    });
    var collection = new ymaps.GeoObjectCollection(null, {
      hasBalloon: false,
      iconLayout: 'default#image',
      iconImageHref: 'img/svg/marker.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [7, 5],
    });
    collection
    .add(new ymaps.Placemark([55.760236, 37.614877], {
      balloonContent: office
    }));
    map.geoObjects.add(collection);
    collection.events.add('click', function (e) {
      var target = e.get('target');
      panel.setContent(target.properties.get('balloonContent'));
    });
  });

}
