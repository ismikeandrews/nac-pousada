// Compiled using marko@4.13.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nac-pousada$1.0.0/src/views/quartos.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Pousada</title><link rel=\"stylesheet\" href=\"css/style.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<main class=\"main-container\"><div class=\"container wrapper\"><h1 class=\"title\">Quartos</h1><div class=\"tipos-quartos\">");

  var for__10 = 0;

  marko_forEach(data.tipos, function(tipo) {
    var keyscope__11 = "[" + ((for__10++) + "]");

    out.w("<div class=\"quarto\"><div class=\"quarto__image\"><img src=\"assets/images/" +
      marko_escapeXmlAttr(tipo.imagemTipoQuarto) +
      "\" alt=\"Quarto " +
      marko_escapeXmlAttr(tipo.nomeTipoQuarto) +
      "\" title=\"Quarto " +
      marko_escapeXmlAttr(tipo.nomeTipoQuarto) +
      "\" class=\"quarto__image-img\"></div><div class=\"quarto__text--title\">" +
      marko_escapeXml(tipo.nomeTipoQuarto) +
      "</div><div class=\"quarto__text\">" +
      marko_escapeXml(tipo.descricaoTipoQuarto) +
      "</div><a href=\"quartos/" +
      marko_escapeXmlAttr(tipo.nomeTipoQuarto) +
      "\" class=\"quarto__btn\">VEJA OS QUARTOS</a></div>");
  });

  out.w("</div></div></main>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "18");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nac-pousada$1.0.0/src/views/quartos.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
