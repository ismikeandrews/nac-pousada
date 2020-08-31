// Compiled using marko@4.13.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nac-pousada$1.0.0/src/views/quarto.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Quarto</title><link rel=\"stylesheet\" type=\"text/css\" href=\"/css/style.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<main class=\"main-container\"><div class=\"container wrapper\"><h1 class=\"title\">" +
    marko_escapeXml(data.tipoQuarto.nomeTipoQuarto) +
    "</h1><p class=\"quarto__text\">" +
    marko_escapeXml(data.tipoQuarto.descricaoTipoQuarto) +
    ". <br> Todos eles custam R$" +
    marko_escapeXml(data.tipoQuarto.valorDiariaTipoQuarto) +
    " a diária.</p><div class=\"quartos\">");

  var for__12 = 0;

  marko_forEach(data.quartos, function(quarto) {
    var keyscope__13 = "[" + ((for__12++) + "]");

    out.w("<div class=\"quarto\"><div class=\"quarto__image\"><img src=\"/assets/images/" +
      marko_escapeXmlAttr(data.tipoQuarto.nomeTipoQuarto) +
      "s/" +
      marko_escapeXmlAttr(quarto.imagemQuarto) +
      "\" alt=\"Quarto VIP\" title=\"Quarto VIP\" class=\"quarto__image-img quarto__image-img-detalhes\"></div><div class=\"quarto__informacoes\"><div class=\"quarto__text--title\">QUARTO " +
      marko_escapeXml(quarto.nomeQuarto) +
      "</div><a href=\"reserve\" class=\"quarto__btn quarto__btn_reserve\">RESERVE</a></div></div>");
  });

  out.w("</div></div></main>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "20");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nac-pousada$1.0.0/src/views/quarto.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
