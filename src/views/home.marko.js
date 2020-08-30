// Compiled using marko@4.13.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nac-pousada$1.0.0/src/views/home.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Pousada</title><link rel=\"stylesheet\" href=\"css/style.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"menu\"><div><img src=\"assets/images/logo.png\" alt=\"Logo da Pousada\" title=\"Logo da Pousada\" class=\"menu__img\"></div><div class=\"menu__pages\"><div class=\"menu__item\"><a href=\"/\" class=\"menu__link\">Home</a></div><div class=\"menu__item\"><a href=\"/quartos\" class=\"menu__link\">Quartos</a></div><div class=\"menu__item\"><a href=\"/reservas\" class=\"menu__link\">Reservas</a></div><div class=\"menu__item\"><a href=\"/contato\" class=\"menu__link\">Contato</a></div></div></nav><div class=\"banner\"><h1 class=\"banner__title\">Pousada Elegance</h1></div><div class=\"container wrapper\"><div class=\"content\"><h1 class=\"title\"> Conheça </h1><div class=\"desc\"><div class=\"desc__left\"><p class=\"text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel erat maximus, ultrices orci sed, elementum orci. Duis a dolor et dolor luctus lacinia. Pellentesque mattis, purus vel ultricies dapibus, dui diam sodales tortor, sit amet maximus tellus nulla in erat. Suspendisse eget finibus nulla. Quisque nec urna enim. Cras ac condimentum massa, sit amet pulvinar lorem. Aliquam egestas turpis eget porttitor consequat. Aliquam vel quam convallis tellus feugiat euismod eu in erat.</p><div class=\"topics\"><div class=\"topics__item\"><img src=\"assets/images/wifi.png\" alt=\"Wi-fi Gratuito\" title=\"Wi-fi Gratuito\" class=\"topics__img\"><p class=\"topics__text\">Wi-fi Gratuito</p></div><div class=\"topics__item\"><img src=\"assets/images/pool.png\" alt=\"Áreas de Lazer\" title=\"Áreas de Lazer\" class=\"topics__img\"><p class=\"topics__text\">Áreas de Lazer</p></div></div><div class=\"topics\"><div class=\"topics__item\"><img src=\"assets/images/breakfast.png\" alt=\"Café da manhã incluso\" title=\"Café da manhã incluso\" class=\"topics__img\"><p class=\"topics__text\">Café da manhã incluso</p></div><div class=\"topics__item\"><img src=\"assets/images/money.png\" alt=\"Sem taxas extras\" title=\"Sem taxas extras\" class=\"topics__img\"><p class=\"topics__text\">Sem taxas extras</p></div></div></div><div class=\"desc__right\"><img src=\"assets/images/map.png\" alt=\"Localização\" title=\"Localização\" class=\"desc__map\"></div></div></div></div><div class=\"footer\"></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "43");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nac-pousada$1.0.0/src/views/home.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
