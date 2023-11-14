export function GetSectionVisual () {
    return Object.fromEntries(
      Array.from(document.querySelectorAll('[section]')).map(
        node=>[node.getAttribute('section'), {
          section: node, 
          visual: document.querySelectorAll(`[visual="${node.getAttribute('section')}"]`)
        }]
      )
    );
}