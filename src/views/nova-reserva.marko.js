// Compiled using marko@4.13.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nac-pousada$1.0.0/src/views/nova-reserva.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Pousada</title><link rel=\"stylesheet\" href=\"/css/style.css\">");

  let finalValue = 0;

  out.w("</head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"menu\"><a href=\"/\"><img src=\"/assets/images/logo.png\" alt=\"Logo da Pousada\" title=\"Logo da Pousada\" class=\"menu__img\"></a><div class=\"menu__pages\"><div class=\"menu__item\"><a href=\"/\" class=\"menu__link\">Home</a></div><div class=\"menu__item\"><a href=\"/quartos\" class=\"menu__link\">Quartos</a></div><div class=\"menu__item\"><a href=\"/quarto/all\" class=\"menu__link active\">Reservas</a></div><div class=\"menu__item\"><a href=\"/contatos\" class=\"menu__link\">Contato</a></div></div></nav><main class=\"main-container\"><div class=\"container wrapper\"><h1 class=\"title\">Nova Reserva</h1><section class=\"nova__reserva\"><div class=\"quarto__reserva\"><img src=\"/assets/images/" +
    marko_escapeXmlAttr(data.nomeTipoQuarto) +
    "s/" +
    marko_escapeXmlAttr(data.imagemQuarto) +
    "\" class=\"quarto__image\"><div class=\"quarto__reserva--right\"><span class=\"quarto__name\"> " +
    marko_escapeXml(data.nomeQuarto) +
    "</span><div class=\"desc desc__reserva\"><p class=\"text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel erat maximus, ultrices orci sed, elementum orci. Duis a dolor et dolor luctus lacinia. Pellentesque mattis, purus vel ultricies dapibus, dui diam sodales tortor, sit amet maximus tellus nulla in erat. Suspendisse eget finibus nulla. Quisque nec urna enim. Cras ac condimentum massa, sit amet pulvinar lorem. Aliquam egestas turpis eget porttitor consequat. Aliquam vel quam convallis tellus feugiat euismod eu in erat.</p><div class=\"topics\"><div class=\"topics__item\"><img src=\"/assets/images/wifi.png\" alt=\"Wi-fi Gratuito\" title=\"Wi-fi Gratuito\" class=\"topics__img\"><p class=\"topics__text\">Wi-fi Gratuito</p></div><div class=\"topics__item\"><img src=\"/assets/images/pool.png\" alt=\"Áreas de Lazer\" title=\"Áreas de Lazer\" class=\"topics__img\"><p class=\"topics__text\">Áreas de Lazer</p></div></div><div class=\"topics\"><div class=\"topics__item\"><img src=\"/assets/images/breakfast.png\" alt=\"Café da manhã incluso\" title=\"Café da manhã incluso\" class=\"topics__img\"><p class=\"topics__text\">Café da manhã incluso</p></div><div class=\"topics__item\"><img src=\"/assets/images/money.png\" alt=\"Sem taxas extras\" title=\"Sem taxas extras\" class=\"topics__img\"><p class=\"topics__text\">Sem taxas extras</p></div></div></div></div></div><hr><div class=\"reserva__nova\"><div class=\"wrapper\"><span class=\"form__title\">Preencha o formulário para concluirmos sua reserva.</span><form action=\"http://localhost:3333/reserva/create\" method=\"POST\" class=\"form__reserva\"><div class=\"form-group\"><label for=\"nomeQuarto\" class=\"form-label\">Nome</label><input id=\"nomeQuarto\" name=\"nomeCompleto\" placeholder=\"Nome\" class=\"form-input\"><label for=\"dataEntrada\" class=\"form-label\">Data de Entrada</label><input id=\"dataEntrada\" type=\"date\" name=\"dataEntrada\" placeholder=\"Data de entrada\" class=\"form-input\"><label for=\"dataSaida\" class=\"form-label\">Data de Saída</label><input type=\"date\" id=\"dataSaida\" name=\"dataSaida\" placeholder=\"Data de saída\" class=\"form-input\"><input id=\"valorReserva\" name=\"valorReserva\" class=\"d-none\"><button type=\"button\" onClick=\"calulateValue(dataEntrada.value, dataSaida.value, " +
    marko_escapeXmlAttr(data.valorDiariaTipoQuarto) +
    ")\" class=\"btn\">Calcular Preço</button><div class=\"js-content d-none\"><span class=\"form-label\">Confirma a reserva no valor de R$ <span class=\"finalValue\"></span> ?</span><button type=\"submit\" class=\"btn\">Reservar</button></div></div></form></div></div></section></div></main><div class=\"footer\"><div class=\"footer__infos\"><p>R. Seis, 619 - Praia do Sape</p><p>Ubatuba, São Paulo - Brasil</p></div><div class=\"footer__infos\"><p>Telefone: +55 (12) 3456-7890</p><p>Email: reservas@pousadaelegance.com.br</p></div><div class=\"footer__social\"><a href=\"https://twitter.com/home?lang=pt\"><svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" style=\" fill:#fff;\" class=\"footer__social-img\"><path d=\"M 24 4.300781 C 23.101563 4.699219 22.199219 5 21.199219 5.101563 C 22.199219 4.5 23 3.5 23.398438 2.398438 C 22.398438 3 21.398438 3.398438 20.300781 3.601563 C 19.300781 2.601563 18 2 16.601563 2 C 13.898438 2 11.699219 4.199219 11.699219 6.898438 C 11.699219 7.300781 11.699219 7.699219 11.800781 8 C 7.699219 7.800781 4.101563 5.898438 1.699219 2.898438 C 1.199219 3.601563 1 4.5 1 5.398438 C 1 7.101563 1.898438 8.601563 3.199219 9.5 C 2.398438 9.398438 1.601563 9.199219 1 8.898438 C 1 8.898438 1 8.898438 1 9 C 1 11.398438 2.699219 13.398438 4.898438 13.800781 C 4.5 13.898438 4.101563 14 3.601563 14 C 3.300781 14 3 14 2.699219 13.898438 C 3.300781 15.898438 5.101563 17.300781 7.300781 17.300781 C 5.601563 18.601563 3.5 19.398438 1.199219 19.398438 C 0.800781 19.398438 0.398438 19.398438 0 19.300781 C 2.199219 20.699219 4.800781 21.5 7.5 21.5 C 16.601563 21.5 21.5 14 21.5 7.5 C 21.5 7.300781 21.5 7.101563 21.5 6.898438 C 22.5 6.199219 23.300781 5.300781 24 4.300781\"></path></svg></a><a href=\"https://pt-br.facebook.com/pages/category/Community/pagina-inicial-facebook-134937276532264/\"><svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"30\" height=\"30\" viewBox=\"0 0 172 172\" style=\" fill:#fff;\" class=\"footer__social-img\"><g transform=\"translate(0.516,0.516) scale(0.994,0.994)\"><g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"none\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\"><g fill=\"#fff\" stroke=\"#cccccc\" stroke-linejoin=\"round\"><path d=\"M122.30633,93.138l-21.973,0.00717v64.5215h-28.66667v-64.50717l-21.5,0.00717v-28.66667h21.5v-16.4905c0,-21.801 14.19,-33.67617 33.63317,-33.67617c6.5575,-0.01433 13.10783,0.31533 19.62233,0.989v22.79h-13.38733c-10.5995,0 -11.2015,4.65833 -11.2015,12.05433v14.33333h25.2625z\"></path></g><path d=\"M0,172v-172h172v172z\" fill=\"none\" stroke=\"none\" stroke-linejoin=\"miter\"></path><g fill=\"#fff\" stroke=\"none\" stroke-linejoin=\"miter\"><path d=\"M125.59583,64.5h-25.2625v-14.33333c0,-7.396 0.602,-12.05433 11.2015,-12.05433h13.38733v-22.79c-6.5145,-0.67367 -13.06483,-1.00333 -19.62233,-0.989c-19.44317,0 -33.63317,11.87517 -33.63317,33.67617v16.4905h-21.5v28.66667l21.5,-0.00717v64.50717h28.66667v-64.5215l21.973,-0.00717z\"></path></g><path d=\"\" fill=\"none\" stroke=\"none\" stroke-linejoin=\"miter\"></path></g></g></svg></a><a href=\"https://br.linkedin.com\"><svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" style=\" fill:#fff;\" class=\"footer__social-img\"><path d=\"M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z\"></path></svg></a></div></div><script type=\"text/javascript\" src=\"/js/custom.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "85");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nac-pousada$1.0.0/src/views/nova-reserva.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
