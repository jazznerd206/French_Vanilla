// TRANSFORM STRING TO SNAKE CASE
const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');

console.log(toSnakeCase('camelCase')); // 'camel_case'
console.log(toSnakeCase('some text')); // 'some_text'
console.log(toSnakeCase('some-mixed_string With spaces_underscores-and-hyphens')); // 'some_mixed_string_with_spaces_underscores_and_hyphens'
console.log(toSnakeCase('AllThe-small Things')); // "all_the_smal_things"
console.log(toSnakeCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML')); // "i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html"
// ==============================